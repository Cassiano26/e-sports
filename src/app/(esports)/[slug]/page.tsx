// app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";

import { PAGE_QUERY } from "@/sanity/lib/queries";

import { sanityFetch } from "@/sanity/lib/live";
// import { Post } from "@/components/post";
import { AvailableEsports } from "@/components/availableEsports";

export default async function Page({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });

  console.log(page.availableSportsSection)

  return (
    <div className="w-[1728px] ml-auto mr-auto">
      {
       page.availableSportsSection && (<AvailableEsports items={page.availableSportsSection}/>)
      }
    </div>
    
  );
}