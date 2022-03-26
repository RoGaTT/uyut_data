import { Modification, ModificationGroup, System, SystemGroup } from "./types";

export type SystemGroupView = SystemGroup & {
  items: System[]
}

export type ModificationGroupView = ModificationGroup & {
  items: Modification[]
}