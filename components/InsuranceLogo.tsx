"use client";

interface Props {
  name: string;
  file: string;
}

export default function InsuranceLogo({ name, file }: Props) {
  return (
    <div className="bg-white border border-stone-100 rounded-xl shadow-sm flex items-center justify-center px-4 py-3 w-36 h-14">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={file}
        alt={name}
        className="max-h-8 max-w-full w-auto object-contain"
      />
    </div>
  );
}
