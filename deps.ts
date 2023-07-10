import { join } from "https://deno.land/std@0.193.0/path/mod.ts";
import { serve } from "https://deno.land/std@0.193.0/http/server.ts";
import { rgb8 } from "https://deno.land/std@0.193.0/fmt/colors.ts";
import { format, inspect } from "node:util";

export var std;
(function (std) {
    std.join = join;
    std.serve = serve;
    std.format = format;
    std.inspect = inspect;
    std.rgb8 = rgb8;
})(std || (std = {}));

export * as msgpack from "https://esm.sh/@msgpack/msgpack/mod.ts";
