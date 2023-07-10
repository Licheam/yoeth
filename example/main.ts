import { parse } from "https://deno.land/std/encoding/yaml.ts"

const config = parse(await Deno.readTextFile("./config.yml"))
const Yoeth = await import("../src/mod.js")

const app = new Yoeth.App()

app.plugin_list(config.plugins)
app.bot_list(config.bots)

await app.start()