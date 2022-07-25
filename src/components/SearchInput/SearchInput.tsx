import {
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MagnifyingGlass, X } from 'phosphor-react';

import { MusicDataProps } from 'contexts/@types/player';

import { useClickOutside, usePlayer } from 'hooks';

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  data?: MusicDataProps[];
  onClear?: () => void;
}

export function SearchInput({ data, onClear, ...props }: SearchInputProps) {
  const [isActived, setIsActived] = useState(false);

  const dropRef = useRef<HTMLDivElement>(null);

  const { handlePlay } = usePlayer();

  const dataFilter = useMemo(() => {
    const list = data?.filter(
      (item) =>
        item.title.toLowerCase().includes(String(props.value).toLowerCase()) ||
        item.author.toLowerCase().includes(String(props.value).toLowerCase())
    );

    return list;
  }, [props.value]);

  useEffect(() => {
    if (String(props.value).length > 0) {
      return setIsActived(true);
    }

    setIsActived(false);
  }, [props.value]);

  useClickOutside(dropRef, () => {
    setIsActived(false);
  });

  return (
    <div
      className="w-1/3 p-2 px-4 relative flex items-center space-x-3 rounded-full 
      bg-zinc-800 transition-all"
    >
      <button>
        <MagnifyingGlass
          className="text-amber-500"
          size={20}
          onClick={() => setIsActived(!isActived)}
        />
      </button>
      <input
        type="text"
        className="outline-none flex-1 bg-zinc-800 text-white 
        placeholder:text-zinc-400"
        {...props}
      />
      {String(props.value).length > 0 && (
        <>
          <button onClick={() => onClear && onClear()}>
            <X size={16} className="text-amber-500" />
          </button>
        </>
      )}

      {isActived && (
        <div
          ref={dropRef}
          className="w-full mt-3 absolute right-0 top-full z-[30] 
          rounded-lg bg-zinc-800"
        >
          {dataFilter?.map(item => (
            <div
              key={item.id}
              className="p-4 flex space-x-3 cursor-pointer 
              first:rounded-t-lg last:rounded-b-lg hover:bg-zinc-700 
              transition-colors"
              onClick={() => {
                handlePlay(item);
                setIsActived(false);
              }}
            >
              <img src={item.thumbnail} alt="" className="w-10 h-10 rounded" />
              <div className="flex flex-col flex-1 leading-relaxed">
                <strong className="text-white capitalize font-inter">
                  {item.title}
                </strong>
                <span className="text-zinc-400 text-sm font-inter">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
