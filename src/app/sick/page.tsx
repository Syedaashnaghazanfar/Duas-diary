import Link from "next/link";
import LightPinkSection from "@/app/components/props";
import Button from "@/app/components/button";

export default function Sick() {
  return (
    <div className="w-full h-auto bg-[#8D988D] flex justify-center items-center py-10">
      <div className="w-[95%] lg:w-[1300px] h-auto bg-[#F9E8E5] p-5 lg:p-10 rounded-md shadow-md">
        <div className="font-sans font-bold text-[24px] lg:text-[30px] text-black text-center mb-5">
          DUAS FOR SICK PEOPLE ♥
        </div>
        <Link href="/">
          <button className="bg-[#0c343d] text-white text-[12px] lg:text-[14px] mt-3 mb-5 mx-auto block rounded-[10px] px-5 py-2">
            ◂ Home ▸
          </button>
        </Link>

        {/* Dua Sections */}
        <LightPinkSection
          paragraph="اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا."
          paragraph2="“O Allah, Lord of mankind, remove the affliction and heal (him/her). You are the Healer; there is no healing except Your healing, a healing that leaves behind no ailment.”"
          buttonText={<Button />}
          note="Recite it 7 times. It is recommended to touch the area of pain with the right hand while reciting this dua."
        />
        <LightPinkSection
          paragraph="أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ"
          paragraph2="“I seek protection in the might of Allah and His power from the evil of what I am experiencing and of what I fear.”"
          buttonText={<Button />}
          note="It is recommended to recite this dua while the ill person places their right hand on the area of pain. Recite bismillah three times, and then the entire supplication is recited seven times."
        />
        <LightPinkSection
          paragraph="أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَا."
          paragraph2="“I ask Allah, the Mighty, the Lord of the Mighty Throne, to cure you.”"
          buttonText={<Button />}
          note="It is recommended to repeat the dua seven times."
        />
        <LightPinkSection
          paragraph="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
          paragraph2="“Oh Allah! Our Lord and Sustainer! Grant us good in this world and good in the Hereafter, and save us from the Fire of Hell.”"
          buttonText={<Button />}
          note="It is good to say this dua, as it's all-encompassing. It surpasses receiving good not only in this life but in the afterlife as well. Scholars mention these types of dua as being excellent for our overall well-being."
        />
        <LightPinkSection
          paragraph="أَنِّي مَسَّنِيَ ٱلضُّرُّ وَأَنتَ أَرۡحَمُ ٱلرَّـٰحِمِي"
          paragraph2="“Verily, distress has seized me, and You are the Most Merciful of all those who show mercy."
          buttonText={<Button />}
          note="Supplication of Prophet Ayub (A.S.) when he was afflicted with leprosy for many years. He said this dua and Allah SWT cured him of his terrible disease - so imagine how powerful it will be for minor illness!"
        />
      </div>
    </div>
  );
}
