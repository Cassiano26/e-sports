// src/app/(blog)/page.tsx

import { AvailableEsports } from "@/components/availableEsports";
import { BrowseTournament } from "@/components/browseTournament";
import { NavBar } from "@/components/navbar";
import { Sponsors } from "@/components/sponsors";
import { dataset } from "@/sanity/env";
//import { Posts } from "@/components/posts";
import { sanityFetch } from "@/sanity/lib/live";
import { HEADER_QUERY, HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Page() {

  const { data: homeData } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  return (
    <div className="w-[1728px] ml-auto mr-auto">
      <Sponsors heroSection={homeData.heroSection} sponsorsItems={homeData.sponsorsSection} />
      {homeData.availableSportsSection && (
        <AvailableEsports items={homeData.availableSportsSection} />
      )}
    </div>
  );
}