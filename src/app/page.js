import PopupBackground from "@/components/PopupBackground";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start">
      <PopupBackground imgPath={"/home.png"} />
      <h1 className="gradient text-center text-[2rem] sm:text-[3.5rem]">
        Harmage  Construction <span className="block sm:hidden" /> Services
      </h1>
    </main>
  );
}
