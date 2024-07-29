import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Team from "@/components/Team";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full justify-center flex flex-row ">
        <div className="flex flex-col gap-7 items-center">
          <div className="w-[2px] h-[180px] bg-gray-100">
          </div>
          <h1 className=" rotate-90 text-gray-200 text-[22px] font-light ">HOME</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-[1250px]  flex flex-col items-center ">
            <Navbar/>
            <Hero/>
          </div>
          <div className="w-[1250px]  flex flex-col items-start">
            <Welcome/>
            <Team/>
            <Featured/>
            <Footer/>
          </div>
        </div>
    </main>
  );
}
