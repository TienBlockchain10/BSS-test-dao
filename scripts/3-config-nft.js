import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xFEEef2f839a13d27cF943F78FFA00d7094e48f73",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "BSS Badge",
        description: "This NFT will grant membership access to Blockchain Student Society DAO",
        image: readFileSync("scripts/assets/BSS.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()