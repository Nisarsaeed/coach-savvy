import React from "react";
import { Children } from "react";

export function GridBackground() {
  return (
    <div className="h-[65vh] w-full dark:bg-black  bg-grid-white/[0.2] absolute top-0 flex items-center justify-center">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-accentBlue  [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
    </div>
  );
}
