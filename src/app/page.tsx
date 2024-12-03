import { AvailableEsports } from "@/components/availableEsports";
import { BrowseTournament } from "@/components/browseTournament";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <div className="">
      <Sponsors />
      <AvailableEsports />
      <BrowseTournament />
    </div>
  );
}
