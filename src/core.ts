import screenshot from "screenshot-desktop";
import fs from "fs";

async function main() {
  const allBuffers = await screenshot({ format: "png" });

  fs.writeFileSync("screenshot.png", allBuffers);
}

main();
