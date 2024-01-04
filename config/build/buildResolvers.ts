import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(opitions: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [opitions.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
