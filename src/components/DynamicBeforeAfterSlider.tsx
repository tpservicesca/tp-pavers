"use client";

import dynamic from "next/dynamic";

const BeforeAfterSlider = dynamic(() => import("./BeforeAfterSlider"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black/50" />,
});

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeSrcMobile?: string;
  afterSrcMobile?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function DynamicBeforeAfterSlider(props: Props) {
  return <BeforeAfterSlider {...props} />;
}
