import { SpellsService, SpellsServiceLive } from "./spells/index.js";
import { HttpLive } from "./http/index.js";
import { Spell } from "./spells/codec.js";

const main = Do(($) => {
    const spells = $(Effect.service(SpellsService))
    const spell = $(spells.getSpell("mage-hand"))
    return Spell.encode(spell)
});

const program = (main.provideSomeLayer(HttpLive >> SpellsServiceLive));

(program.flatMap((spell) =>
    Effect.succeed(console.dir(spell)))
 .catchAll((error) =>
     Effect.succeed(console.error(error)))).unsafeRunAsync()