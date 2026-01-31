"use client";

import { useEffect, useState } from "react";
import { Lock, ChevronRight, User } from "lucide-react";
import { useAppSelector } from "../../store/hooks";

export default function ProfilePage() {
  const [profile, setProfile] = useState<{ name: string; email: string } | null>(
    null,
  );
  const [status, setStatus] = useState<"idle" | "loading" | "failed">("idle");
  const [error, setError] = useState<string | null>(null);

  const accessToken = useAppSelector((state) => state.auth.tokens?.accessToken);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const normalizedBaseUrl = baseUrl ? baseUrl.replace(/\/+$/, "") : "";

  useEffect(() => {
    const fetchProfile = async () => {
      if (!normalizedBaseUrl) {
        setError("NEXT_PUBLIC_API_BASE_URL is not set.");
        setStatus("failed");
        return;
      }
      if (!accessToken) {
        setError("Missing access token.");
        setStatus("failed");
        return;
      }

      setStatus("loading");
      setError(null);

      try {
        const response = await fetch(`${normalizedBaseUrl}/admin/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          let message = "Failed to fetch profile.";
          try {
            const errorBody = await response.json();
            message = errorBody?.message ?? message;
          } catch {
            try {
              const errorText = await response.text();
              if (errorText) message = errorText;
            } catch {
              // Keep fallback message.
            }
          }
          throw new Error(message);
        }

        const body = await response.json();
        const payload = body?.data;
        if (!payload) throw new Error("Invalid profile response.");

        setProfile({
          name: payload?.name ?? "Admin",
          email: payload?.email ?? "-",
        });
        setStatus("idle");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch profile.");
        setStatus("failed");
      }
    };

    fetchProfile();
  }, [accessToken, normalizedBaseUrl]);

  return (
    <div className="w-full space-y-10">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Profile Overview
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View your administrator information and account details.
          </p>
        </div>
      </div>

      {/* PROFILE SECTION */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-inner">
              <User className="h-10 w-10 text-sky-500" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                {profile?.name ?? "Admin"}
              </p>
              <p className="text-sm text-gray-500">
                {error ? "Profile unavailable" : profile?.email ?? "-"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          {status === "loading" ? (
            <div className="text-sm text-gray-600">Loading profile...</div>
          ) : status === "failed" ? (
            <div className="text-sm text-red-600">
              {error ?? "Failed to load profile."}
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 tracking-wide">
                  NAME
                </p>
                <p className="mt-1 text-gray-900 font-medium">
                  {profile?.name ?? "-"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 tracking-wide">
                  EMAIL
                </p>
                <p className="mt-1 text-gray-900 font-medium">
                  {profile?.email ?? "-"}
                </p>
              </div>

              <button className="flex items-center gap-3 text-sm font-medium text-sky-600 hover:opacity-80 transition">
                <Lock className="h-4 w-4" />
                Change Password
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
