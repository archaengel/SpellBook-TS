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

type AreaType = 'sphere' | 'cone' | 'cylinder' | 'line' | 'cube'
export interface AreaOfEffect {
    size: number;
    type: AreaType
}
export const AreaOfEffect = Derive<Codec<AreaOfEffect>>()

export type Ritual = boolean & Brand<"Ritual">
export const Ritual = Derive<Make<Ritual>>()

export type Duration = string & Brand<"Duration">
export const Duration = Derive<Make<Duration>>()

export type Concentration = boolean & Brand<"Concentration">
export const Concentraton = Derive<Make<Concentration>>()

export type CastingTime = string & Brand<"CastingTime">
export const CastingTime = Derive<Make<CastingTime>>()

export type AttackType = string & Brand<"AttackType">
export const AttackType = Derive<Make<AttackType>>()

export type DamageLevelMap = Record<string, string> & Brand<"DamageLevelMap">
export const DamageLevelMap = Derive<Make<DamageLevelMap>>()
export interface DamageType {
    name: string
}
export const DamageType = Derive<Codec<DamageType>>()
export interface Damage {
    damage_at_slot_level?: DamageLevelMap
    damage_at_character_level?: DamageLevelMap
    damage_type: DamageType;
}
export const Damage = Derive<Make<Damage>>()

export interface DndClass {
    name: string
}
export const DndClass = Derive<Codec<DndClass>>()
export type Classes = Chunk<DndClass> & Brand<"Classes">
export const Classes = Derive<Make<Classes>>()
export type Subclasses = Chunk<DndClass> & Brand<"Subclasses">
export const Subclasses = Derive<Make<Subclasses>>()

export interface School {
    name: string
}
export const School = Derive<Make<School>>()

export interface DifficultyCheckType {
    name: string;
}
export const DifficultyCheckType = Derive<Codec<DifficultyCheckType>>()
export interface DifficultyCheck {
    dc_success: string;
    dc_type: DifficultyCheckType
}
export const DifficultyCheck = Derive<Codec<DifficultyCheck>>()

export interface Spell {
    name: SpellName;
    desc: Description;
    range: Range;
    higher_level: HigherLevel;
    level: Level;
    components: Components;
    area_of_effect?: AreaOfEffect;
    material?: Material;
    damage?: Damage;
    ritual: Ritual;
    concentration: Concentration;
    duration: Duration;
    casting_time: CastingTime;
    attack_type?: AttackType;
    classes: Classes;
    subclasses: Subclasses;
    school: School;
    dc?: DifficultyCheck;
}

export const Spell = Derive<Codec<Spell>>();

