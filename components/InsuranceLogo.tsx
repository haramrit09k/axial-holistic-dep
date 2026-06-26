"use client";

import { useState } from "react";

interface Props {
  name: string;
  domain: string;
}

export default function InsuranceLogo({ name, domain }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="bg-white border border-stone-100 rounded-xl px-3 py-2 flex items-center justify-center shadow-sm min-w-[80px] h-11">
      {failed ? (
        <span className="text-xs font-semibold text-stone-600 text-center leading-tight">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          className="h-6 w-auto object-contain max-w-[80px]"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
