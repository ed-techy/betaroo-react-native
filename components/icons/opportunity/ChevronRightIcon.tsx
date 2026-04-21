import Svg, { Path } from "react-native-svg";

import type { IconProps } from "@/components/icons/types";

export function ChevronRightIcon({ color = "#A4A4A4" }: IconProps) {
  return (
    <Svg width={5} height={7} viewBox="0 0 5 7" fill="none">
      <Path
        d="M2.59875 3.3411L0 0.74235L0.74235 0L4.08345 3.3411L0.74235 6.6822L0 5.93985L2.59875 3.3411Z"
        fill={color}
      />
    </Svg>
  );
}
