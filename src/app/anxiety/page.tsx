import Link from "next/link";
import LightPinkSection from "@/app/components/props";
import Button from "@/app/components/button";

export default function Anxiety() {
  return (
    <div className="w-full h-auto bg-[#8D988D] flex justify-center items-center py-10">
      <div className="w-[95%] lg:w-[1300px] h-auto bg-[#F9E8E5] p-5 lg:p-10 rounded-md shadow-md">
        <div className="font-sans font-bold text-[24px] lg:text-[30px] text-black text-center mb-5">
          DUAS FOR REMOVING ANXIETY ♥
        </div>
        <Link href="/">
          <button className="bg-[#0c343d] text-white text-[12px] lg:text-[14px] mt-3 mb-5 mx-auto block rounded-[10px] px-5 py-2">
            ◂ Home ▸
          </button>
        </Link>

        {/* Dua Sections */}
        <LightPinkSection
          paragraph="حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ"
          paragraph2="Sufficient for us is Allah, and He is the best Disposer of affairs."
          buttonText={<Button />}
          note="Provides strength, reliance on Allah, and protection during hardships. Recite 100 times when feeling anxious or in distress."
        />
        <LightPinkSection
          paragraph="اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ"
          paragraph2="O Allah, I seek refuge in You from anxiety and grief, weakness and laziness, miserliness and cowardice, the burden of debts, and being overpowered by men."
          buttonText={<Button />}
          note="This dua seeks protection from all forms of distress and anxiety. Recite daily, especially in times of stress."
        />
        <LightPinkSection
          paragraph="لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْعَظِيمِ"
          paragraph2="There is no deity except Allah, the Most Great, the Most Forbearing. There is no deity except Allah, Lord of the heavens, Lord of the earth, and Lord of the Noble Throne."
          buttonText={<Button />}
          note="Calms the heart and reminds us of Allah’s greatness during stressful times. Recite 3 times when feeling overwhelmed."
        />
        <LightPinkSection
          paragraph="اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي"
          paragraph2="O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forehead is in Your hand, Your command over me is forever executed and Your decree over me is just. I ask You by every name belonging to You, which You have named Yourself with, or revealed in Your Book, or taught to any of Your creation, or preserved in the knowledge of the unseen with You, that You make the Qur’an the spring of my heart and the light of my chest, the banisher of my grief and the reliever of my distress."
          buttonText={<Button />}
          note="A comprehensive dua for relief from sadness and anxiety. Recite during times of deep emotional distress."
        />
      </div>
    </div>
  );
}
