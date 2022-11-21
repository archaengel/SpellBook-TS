import { Description, Spell, SpellName } from "./spells/index.js";

const spell = Spell.encodeJSON({
  name: SpellName.unsafeMake("Mage Hand"),
  desc: Description.make(
    Chunk("Touch something", "Don't need to be touching it")
  ),
});

Effect.succeed(console.log(spell));
