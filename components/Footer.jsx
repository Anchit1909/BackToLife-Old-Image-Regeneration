import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <section className="mt-10 py-10 h-16 text-center" id="footer">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center md:justify-between h-full px-12 md:flex-row">
        <div className="flex items-center text-black font-poppins text-2xl md:text-2xl font-semibold">
          <p>
            <Link href="/">
              <div className="flex items-center justify-center flex-row space-x-2">
                <Image src="/FinalLogo.svg" width={38} height={42}></Image>
                <p>BackToLife</p>
              </div>
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[#334155] font-poppins text-sm md:text-base">
            © 2023{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">
              Anchit Sinha.
            </span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
