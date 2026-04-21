import type { ComponentType } from "react";

import { CHTLogo, OKCLogo } from "@/components/logos";

export const teamLogoByCode: Record<string, ComponentType> = {
  CHT: CHTLogo,
  OKC: OKCLogo,
};
