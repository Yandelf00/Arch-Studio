import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full justify-center flex flex-row ">
        <div className="flex flex-col justify-center gap-7 items-center">
          <div className="w-[2px] h-[180px] bg-gray-100">
          </div>
          <h1 className=" rotate-90 text-gray-200 text-[22px] font-light ">HOME</h1>
        </div>
        <div className="w-[1250px] flex justify-center">
          <Navbar/>
        </div>
    </main>
  );
}
