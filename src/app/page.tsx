import Button from "@/app/components/button";
import Image from "next/image";
import sick from "@/app/images/sick.jpg";
import success from "@/app/images/sucess.jpg";
import anxiety from "@/app/images/anxiety.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full md:h-auto lg:h-[680px] bg-[#8D988D] flex justify-center items-center py-10">
      <div className="w-full max-w-[400px] sm:max-w-[90%] md:max-w-[85%] h-auto bg-[#F9E8E5] p-5 lg:p-10 rounded-md shadow-md ">
        <div className="font-sans font-bold text-[24px] sm:text-[28px] lg:text-[30px] text-black text-center">
          WELCOME TO DUA DIARY ♥
        </div>
        <p className="font-sans font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-black text-center mt-4">
          Choose the situation you want to read dua for.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 mt-10">
          <Link href="/sick">
            <div className="w-[260px] sm:w-[280px] lg:w-[300px] h-[260px] sm:h-[280px] lg:h-[300px] bg-[#C1B1A6] border-black hover:border-2 transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center">
              <Image
                src={sick}
                alt="sick"
                width={200}
                height={200}
                className="mt-[10px]"
              />
              <h1 className="text-[#134f5c] text-[24px] sm:text-[28px] lg:text-[32px] font-bold uppercase tracking-[2px] mt-4">
                Sick
              </h1>
            </div>
          </Link>
          <Link href="/success">
            <div className="w-[260px] sm:w-[280px] lg:w-[300px] h-[260px] sm:h-[280px] lg:h-[300px] bg-[#C1B1A6] border-black hover:border-2 transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center">
              <Image
                src={success}
                alt="success"
                width={200}
                height={200}
                className="mt-[10px]"
              />
              <h1 className="text-[#134f5c] text-[24px] sm:text-[28px] lg:text-[32px] font-bold uppercase tracking-[2px] mt-4">
                Success
              </h1>
            </div>
          </Link>
          <Link href="/anxiety">
            <div className="w-[260px] sm:w-[280px] lg:w-[300px] h-[260px] sm:h-[280px] lg:h-[300px] bg-[#C1B1A6] border-black hover:border-2 transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center">
              <Image
                src={anxiety}
                alt="anxiety"
                width={200}
                height={200}
                className="mt-[10px]"
              />
              <h1 className="text-[#134f5c] text-[24px] sm:text-[28px] lg:text-[32px] font-bold uppercase tracking-[2px] mt-4">
                Anxiety
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
