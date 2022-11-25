
export class FetchError {
    readonly _tag = 'FetchError'
    constructor(readonly error: unknown) {}
}

export class JsonBodyError {
    readonly _tag = 'JsonBodyError'
    constructor(readonly error: unknown) {}
}

export interface Http {
    get: (url: string) => Effect<never, FetchError, Response>
    jsonBody: (input: Response) => Effect<never, JsonBodyError, unknown>
}

export const Http = Tag<Http>()

export const HttpLive = Layer.fromEffect(Http)(Effect.succeed({
    get: (url) => Effect.tryCatchPromise(fetch(url), (error) => new FetchError(error)),
    jsonBody: (input) => Effect.tryCatchPromise(input.json(), (error) => new JsonBodyError(error))
}))