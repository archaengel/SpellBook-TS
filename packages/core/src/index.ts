import { SpellsService, SpellsServiceLive } from "./spells/index.js";
import { HttpLive } from "./http/index.js";
import { Spell } from "./spells/codec.js";

const getSpell = (name: string) => Do(($) => {
    const spells = $(Effect.service(SpellsService))
    const spell = $(spells.getSpell(name))
    const encodedSpell = Spell.encode(spell)
    $(Effect.sync(console.log(encodedSpell)))
}).catchAll((e) => Effect.sync(console.log(e)));

const main = getSpell("mage-hand") & getSpell("thunderwave") & getSpell("thaumaturgy")

const program = (main.provideSomeLayer(HttpLive >> SpellsServiceLive));

program.unsafeRunAsync()
