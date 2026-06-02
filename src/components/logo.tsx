import { Link } from "@tanstack/react-router";
import clsx from "clsx";

export const LogoArea = ({
  variant = "default",
}: {
  variant?: "default" | "white";
}) => (
  <Link to="/" className="flex items-center gap-2">
    <div className="h-8 w-8">
      <img
        src="https://learn2earn.ng/favicon.ico"
        alt="Learn2Earn logo"
        className="h-full w-full"
      />
    </div>
    <div className="leading-tight">
      <div
        className={clsx("text-[14px] font-bold text-foreground", {
          "!text-white": variant === "white",
        })}
      >
        Learn2Earn
      </div>
      <div
        className={clsx(
          "text-[10px] uppercase tracking-wider text-muted-foreground",
          {
            "!text-white/60": variant === "white",
          },
        )}
      >
        Ambassadors
      </div>
    </div>
  </Link>
);
