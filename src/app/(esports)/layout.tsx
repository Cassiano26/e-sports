// src/app/(blog)/layout.tsx

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { NavBar } from "@/components/navbar";
import { HEADER_QUERY } from "@/sanity/lib/queries";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: logo } = await sanityFetch({
    query: HEADER_QUERY,
  });

  return (
    <div className="bg-white min-h-screen w-[1728px] ml-auto mr-auto">
      <NavBar items={logo} />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </div>
  );
}