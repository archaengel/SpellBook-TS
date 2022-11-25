import { FetchError, Http, JsonBodyError } from "../http/index.js"
import { Spell } from "./codec.js"

const apiEndpoint = 'https://www.dnd5eapi.co/api/'

export class SpellError {
    readonly _tag = 'SpellError'
    constructor(readonly error: unknown) {}
}

const spellFromJson = (json: unknown) => Spell.decode(json).mapLeft((error) => new SpellError(error))

export interface SpellsService {
    getSpell: (name: string) => Effect<never, JsonBodyError | FetchError | SpellError, Spell>
}
export const SpellsService = Tag<SpellsService>()

const makeSpellsService = Do(($) => {
    const http = $(Effect.service(Http))
    const getSpellJson = (name: string) => http.get(apiEndpoint + 'spells/' + name).flatMap(http.jsonBody)
    const getSpell = (name: string) => getSpellJson(name).flatMap(json => Effect.fromEither(spellFromJson(json)))
    return {
        getSpell
    }
})

export const SpellsServiceLive = Layer.fromEffect(SpellsService)(makeSpellsService)
