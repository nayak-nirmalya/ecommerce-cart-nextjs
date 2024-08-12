import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Profile.fyi",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col mt-16 items-center justify-center space-y-6">
      {children}
    </div>
  );
}
