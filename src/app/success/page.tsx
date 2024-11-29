import Link from "next/link";
import LightPinkSection from "@/app/components/props";
import Button from "@/app/components/button";

export default function Success() {
  return (
    <div className="w-full min-h-screen bg-[#8D988D] flex justify-center items-center py-10">
      <div className="w-[95%] lg:w-[1300px] bg-[#F9E8E5] rounded-lg p-5 lg:p-10">
        <div className="text-center font-sans font-bold text-2xl lg:text-4xl text-black mb-10">
          DUAS FOR SUCCESSFUL LIFE ♥
        </div>
        <Link href="/">
          <button className="bg-[#0c343d] text-white text-sm lg:text-base rounded-lg px-4 py-2 hover:bg-[#0a2d34] mx-auto block mb-5">
            ◂ Home ▸
          </button>
        </Link>

        {/* Duas Sections */}
        <LightPinkSection
          paragraph="رَبِّ زِدْنِىْ عِلْمًا"
          paragraph2="Oh my Lord, Increase me in knowledge."
          buttonText={<Button />}
          note="Recite 11 times before studying or seeking knowledge."
        />
        <LightPinkSection
          paragraph="رَبِّ يَسِّرْ وَلاَ تُعَسِّرْ وَتَمِّمْ بِالْخَيْرِ"
          paragraph2="My Lord make it easy, and do not make it difficult and complete it with goodness."
          buttonText={<Button />}
          note="Recite 7 times before starting any difficult task."
        />
        <LightPinkSection
          paragraph="اللَّهُمَّ إِنِّي أَسْأَلُكَ تَوْفِيقَ وَالْهُدَى، وَالْعَافِيَةَ، وَالْغِنَى"
          paragraph2="O Allah, I ask You for success, guidance, well-being, and sufficiency."
          buttonText={<Button />}
          note="Recite daily in the morning to start your day with blessings."
        />
        <LightPinkSection
          paragraph="رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي، يَفْقَهُوا قَوْلِي"
          paragraph2="My Lord, expand for me my chest (with assurance), ease for me my task, and untie the knot from my tongue, that they may understand my speech."
          buttonText={<Button />}
          note="Enhances confidence and clarity, especially in communication. Recite 3 times before speaking or facing an important task."
        />
        <LightPinkSection
          paragraph="اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا"
          paragraph2="O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds."
          buttonText={<Button />}
          note="Ensures your work is beneficial, your sustenance is pure, and your deeds are accepted. Recite 7 times after Fajr Salah for blessings in your day."
        />
      </div>
    </div>
  );
}
