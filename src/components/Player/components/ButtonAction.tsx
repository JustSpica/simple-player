import { ButtonHTMLAttributes, ReactNode } from "react";
import { Play, Pause } from "phosphor-react";
import classNames from "classnames";

import { usePlayer } from "hooks";

export interface ButtonActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  play?: boolean;
}

export function ButtonAction({ children, play, ...props }: ButtonActionProps) {
  const { current } = usePlayer();

  return !play ? (
    <button
      className={classNames("text-white transition-color", {
        "opacity-50 cursor-not-allowed": !current.id,
        "hover:text-amber-600 cursor-pointer": current.id,
      })}
      {...props}
    >
      {children}
    </button>
  ) : (
    <button
      className={classNames(
        'group p-4 bg-white rounded-full text-zinc-900 transition-colors',
        {
          'opacity-50 cursor-not-allowed': !current.id,
          'hover:bg-amber-600 hover:text-white cursor-pointer': current.id
        }
      )}
      {...props}
    >
      {current.isPlay ? (
        <Pause
          weight="fill"
          size={24}
          className="group-active:scale-75 transition-transform"
        />
      ) : (
        <Play
          weight="fill"
          size={24}
          className="group-active:scale-75 transition-transform"
        />
      )}
    </button>
  );
}
