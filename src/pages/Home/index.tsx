import { Sidebar, Player } from "components";

export function Home() {
  return(
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="h-full flex flex-1 bg-zinc-900">
        <div className="flex-1"></div>
        <Player />
      </main>
    </div>
  );
}