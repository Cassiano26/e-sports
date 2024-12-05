// src/app/(blog)/page.tsx

import { AvailableEsports } from "@/components/availableEsports";
import { BrowseTournament } from "@/components/browseTournament";
import { NavBar } from "@/components/navbar";
import { Sponsors } from "@/components/sponsors";
//import { Posts } from "@/components/posts";
import { sanityFetch } from "@/sanity/lib/live";
import { HEADER_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: logo } = await sanityFetch({
    query: HEADER_QUERY,
  });

  console.log(logo)

  return (
    <div className="w-[1728px] ml-auto mr-auto">
      <NavBar items={logo} />
      <Sponsors />
      <AvailableEsports />
      <BrowseTournament />
    </div>
  );
}