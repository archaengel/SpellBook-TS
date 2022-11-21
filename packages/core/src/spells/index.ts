import { Chunk } from "@tsplus/stdlib/collections/Chunk";

export type SpellName = string &
  Brand<"SpellName"> &
  Regex<`^([a-zA-Z]+\s)*([a-zA-Z]+)$`>;
export const SpellName = Derive<Make<SpellName>>();

export type Description = Chunk<string> & Brand<"Description">;
export const Description = Derive<Make<Description>>();

export interface Spell {
  name: SpellName;
  desc: Description;
}
export const Spell = Derive<Codec<Spell>>();
