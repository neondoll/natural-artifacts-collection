import YouTube from "@/icons/YouTube.tsx";
import Instagram from "@/icons/Instagram.tsx";
import { cn } from "@/lib/utils.ts";
import type { HTMLAttributes } from "react";

interface NavLinkProps extends Pick<HTMLAttributes<HTMLElement>, "children" | "className"> {
  click?: boolean;
  focus?: boolean;
  hover?: boolean;
}

function NavLink({ children, className, click, focus, hover }: NavLinkProps) {
  return (
    <p
      className={cn([
        "px-[6px] text-base font-normal text-[#ffffff] border border-transparent border-solid",
        click && "text-[#688b05]",
        hover && "text-[#bae249]",
        focus && "border-[#83a440]",
        className,
      ])}
    >
      {children}
    </p>
  );
}

export default function UiKit() {
  return (
    <main className="w-[635px] pt-[42px] pl-[41px] bg-[#1d2f30]">
      <div className="flex gap-x-[50px]">
        <NavLink>Каталог</NavLink>
        <NavLink hover>Галерея</NavLink>
        <NavLink focus className="ml-[3px]">О лаборатории</NavLink>
        <NavLink click className="-ml-[1px]">Контакты</NavLink>
      </div>
      <div className="flex gap-x-[30px]">
        <YouTube className="size-6 text-[#899d9d]" />
        <Instagram className="size-6 text-[#bae249]" />
      </div>
    </main>
  );
}
