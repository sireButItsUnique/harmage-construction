import PopupBackground from "@/components/PopupBackground";
import Image from "next/image";

function Plus() {
  return (
    <Image
      src="/button-plus.svg"
      alt="Expand"
      width={20}
      height={20}
      className="ml-1" 
    />
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <PopupBackground imgPath={"/home.png"} />
      <h1 className="gradient text-center text-[2rem] sm:text-[3.5rem]">
        What We <span className="block sm:hidden" /> Offer:
      </h1>
      <ul className="list-disc pl-5 space-y-4 text-lg w-[50%] mt-[2rem] sm:text-[1.5rem] sm:ml-0 items-center">
        <li><div className="flex cursor-pointer">Electricial <Plus /></div></li>
        <li><div className="flex cursor-pointer">Plumbing <Plus /></div></li>
        <li><div className="flex cursor-pointer">Tiling <Plus /></div></li>
        <li><div className="flex cursor-pointer">General Rennovation <Plus /></div></li>
        <li><div className="flex cursor-pointer">Decking <Plus /></div></li>
      </ul>
    </main>
  );
}
