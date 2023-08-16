import { join } from "https://deno.land/std@0.198.0/path/mod.ts";
import { serve } from "https://deno.land/std@0.198.0/http/server.ts";
import { rgb8 } from "https://deno.land/std@0.198.0/fmt/colors.ts";
import { decode, encode } from "https://deno.land/std@0.198.0/msgpack/mod.ts";
import { format, inspect } from "node:util";


export var std;
(function (std) {
    std.join = join;
    std.serve = serve;
    std.format = format;
    std.inspect = inspect;
    std.rgb8 = rgb8;
    std.decode = decode;
    std.encode = encode;
})(std || (std = {}));
