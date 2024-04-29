import React from "react";

import ImagenLogo from "@/../../public/images/logos/logo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full p-3 bg-main">
      <div className="flex justify-between px-10">
        <Image className="w-16" src={ImagenLogo} alt="logo"></Image>
      </div>{" "}
    </div>
  );
};
