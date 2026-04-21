import Svg, { Path } from "react-native-svg";

import type { IconProps } from "@/components/icons/types";

export function ChevronDownIcon({ color = "#A4A4A4" }: IconProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
