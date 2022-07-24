import { ReactNode } from "react";

export interface MusicDataProps {
  id: string;
  title: string;
  author: string;
  published_at: string;
  thumbnail: string;
  file: { 
    path: string;
    duration: number;
  }
}

export interface CurrentProps {
  id: string;
  title: string;
  author: string;
  published_at: string;
  thumbnail: string;
  file: { 
    path: string;
    duration: number;
  },
  isPlay: boolean;
}

export interface PlayerContextProps {
  current: CurrentProps;
  handlePlay: (data: MusicDataProps) => void;
  handlePause: () => void;
}

export interface PlayerProviderProps {
  children: ReactNode;
}