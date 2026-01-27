import { Suspense } from "react";
import FeesClient from "./FeesClient";

export default function FeesPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#faf8f3] text-[#1e2749] pb-20">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
              <p className="text-sm text-[#6b7280]">Loading fee page…</p>
            </div>
          </div>
        </main>
      }
    >
      <FeesClient />
    </Suspense>
  );
}
