import type { ComponentType } from "react";

import { CHTLogo } from "@/components/opportunity/logos/CHTLogo";
import { OKCLogo } from "@/components/opportunity/logos/OKCLogo";

export const teamLogoByCode: Record<string, ComponentType> = {
  CHT: CHTLogo,
  OKC: OKCLogo,
};
