import { ReactNode } from "react";

type SectionProps = {
  paragraph: string;
  buttonText: ReactNode;
  paragraph2: string;
  note: string; // Allows JSX elements, strings, or components
};

export default function LightPinkSection({
  paragraph,
  buttonText,
  paragraph2,
  note,
}: SectionProps) {
  return (
    <div className="w-[90%] bg-[#FADADD] p-6 rounded-lg mx-auto shadow-md mt-[90px]">
      <p className="text-black text-[18px] font-sans mb-4 flex justify-center">
        {paragraph}
      </p>
      <p className="text-black text-[18px] font-sans mb-4 flex justify-center">
        {paragraph2}
      </p>
      <div>{buttonText}</div>
      <p className="text-red-400 text-[11px] font-sans flex justify-center">
        {note}
      </p>
    </div>
  );
}
