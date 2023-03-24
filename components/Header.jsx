import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
// import useScroll from "@/lib/hooks/use-scroll";

function Header() {
  // const scrolled = useScroll(20);

  return (
    <header className="top-0 z-50 flex w-full items-center justify-between p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <div className="relative h-10 w-5 flex items-center text-black font-poppins text-xl md:text-2xl font-semibold cursor-pointer opacity-75 transition hover:opacity-100">
          <Link href="/">
            <div className="flex items-center justify-center flex-row space-x-2">
              <Image src="/FinalLogo.svg" width={38} height={42}></Image>
              <p>BackToLife</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex font-poppins font-medium">
        <Link
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href="/#products"
          scroll={false}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href="/#explore"
          scroll={false}
        >
          Restore Photos
        </Link>
        {/* <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Support
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Business
        </a> */}
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        {/* <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" /> */}
        <div className="flex items-center justify-center cursor-pointer opacity-75 transition hover:opacity-100 space-x-1">
          <Image src="/Twitter.svg" height={22} width={22}></Image>
          <Image src="/LinkedIn.svg" height={22} width={22}></Image>
          <Image src="/Github.svg" height={22} width={22}></Image>
        </div>
        {/* <Link href="/checkout">
          <div className="relative cursor-pointer">
            {item.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {item.length}
              </span>
            )}
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
          </div>
        </Link> */}
        {/* {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="user image"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100"
            onClick={() => signIn()}
          />
        )} */}
      </div>
    </header>
  );
}

export default Header;
