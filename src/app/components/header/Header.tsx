import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-11/12 flex flex-row justify-between items-center py-2">
      <div>
        <Link href={"/"}>
          <Image
            className="  w-[50px] lg:w-[90px]"
            src="/images/R24.png"
            alt="Rehoboth Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
