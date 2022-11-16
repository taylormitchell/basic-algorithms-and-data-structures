import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/ads.js",
  output: {
    filename: "ads.js",
    path: path.resolve(__dirname, "dist"),
    library: ["ads"],
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
};
