"use client";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }: { children: React.ReactNode }) {
	return <SessionProvider session={null}>{children}</SessionProvider>;
}
