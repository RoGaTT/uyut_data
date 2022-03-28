import { Modification, ModificationGroup, System, SystemElement, SystemElementColor, SystemGroup } from "./types";

export type SystemGroupView = SystemGroup & {
  items: System[]
}

export type ModificationGroupView = ModificationGroup & {
  items: Modification[]
}

export type SystemElementColorView = {
  mainImage: string;
  data: SystemElementColor
}