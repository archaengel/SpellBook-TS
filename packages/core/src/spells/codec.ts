export type SpellName = string &
  Brand<"SpellName"> &
  Regex<`^([a-z|A-Z]+\\s)*([a-z|A-Z]+)+$`>;
export const SpellName = Derive<Make<SpellName>>();

export type Description = Chunk<string> & Brand<"Description">;
export const Description = Derive<Make<Description>>();

export type Range = string & Brand<"Range">
export const Range = Derive<Make<Range>>()

export type HigherLevel = Chunk<string> & Brand<"HigherLevel">
export const HigherLevel = Derive<Make<HigherLevel>>()

export type Material = string & Brand<"Material">
export const Material = Derive<Make<Material>>()

export type Level = number & Brand<"Level">
export const Level = Derive<Make<Level>>()

type Component = 'V' | 'S' | 'M'
export type Components = Chunk<Component> & Brand<"Components">
export const Components = Derive<Make<Components>>()

export interface Spell {
    name: SpellName;
    desc: Description;
    range: Range;
    higher_level: HigherLevel;
    level: Level;
    components: Components;
}
export const Spell = Derive<Codec<Spell>>();

