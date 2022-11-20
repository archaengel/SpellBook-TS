export type Name = string & Brand<"Name"> & Regex<`^[a-zA-Z]+$`>;
export const Name = Derive<Make<Name>>();

const name = Name.make("hello")
const name2 = Name.make("1234")

Effect.succeed(console.log(name)) > Effect.succeed(console.log(name2))