import { useEffect, useState } from "react";

import { Card, Sidebar, Player, SearchInput } from "components";

import { MusicDataProps } from "contexts/@types/player";

import { useAxios } from "hooks";

import { setMessageDayByHour } from "utils/setMessageDayByHour";

export function Home() {
  const [search, setSearch] = useState("");

  const { data, error } = useAxios<MusicDataProps[]>("/musics", {
    params: {
      _sort: "published_at",
      _order: "desc",
    },
  });

  const { srtValue, highValue, emoji } = setMessageDayByHour();

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="h-full flex flex-1 bg-zinc-900">
        <div className="max-h-screen flex-1 flex flex-col">
          <header
            className="w-full flex items-center justify-between px-12 py-5 
            border-b-2 border-zinc-800"
          >
            <h1 className="text-3xl font-bold text-white">
              {srtValue}{" "}
              <span className="text-amber-500">
                {highValue} {emoji}
              </span>
            </h1>
            <SearchInput
              data={data}
              value={search}
              placeholder="Procure por uma música..."
              onChange={({ target }) => setSearch(target.value)}
              onClear={() => setSearch('')}
            />
          </header>
          <div className="px-12 flex-1 grid grid-rows-2">
            <div className="mt-12 flex flex-col space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Últimos lançamentos
              </h2>
              <div className="grid grid-cols-2 flex-1 gap-6">
                {data?.slice(0, 2).map((item) => (
                  <Card key={item.id} data={item} />
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <Player />
      </main>
    </div>
  );
}
