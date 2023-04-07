import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="top-0 z-50 flex w-full items-center justify-between py-4 px-8">
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
          href="/#home"
          scroll={false}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer opacity-75 transition hover:opacity-100"
          href="/#originalmodel"
          scroll={false}
        >
          Restore Photos
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <div className="flex items-center justify-center cursor-pointer opacity-75 transition hover:opacity-100 space-x-1">
          <a href="https://twitter.com/anchit1909" target="_blank">
            <Image src="/Twitter.svg" height={22} width={22} />
          </a>
          <a href="https://www.linkedin.com/in/anchit-sinha/" target="_blank">
            <Image src="/Linkedin.svg" height={22} width={22} />
          </a>
          <a href="https://github.com/Anchit1909" target="_blank">
            <Image src="/Github.svg" height={22} width={22} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
