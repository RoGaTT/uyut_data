import { ExtraSystemElement, Modification, ModificationGroup, System, SystemElement, SystemGroup } from "./types";

export type SystemGroupView = SystemGroup & {
  items: SystemView[]
}

export type SystemView = System & {
  extraSystemElements: ExtraSystemElement[]
}

export type ModificationGroupView = ModificationGroup & {
  items: Modification[]
  extraSystemElements: ExtraSystemElement[]
}