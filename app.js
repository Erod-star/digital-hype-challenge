import "colors";
import { inquirerMenu, stop, readInput } from "./helpers/inquirer.js";
import { saveTreeResult } from "./helpers/saveFile.js";
import { directoryToTree } from "./directoryToTree.js";

console.clear();

const app = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const rootPath = await readInput("Provide the rootPath: ");
        console.log(rootPath);
        const maxDepth = await readInput("Provide the maxDepth: ");
        console.log(maxDepth);
        console.log("--- Directory tree ----".green);
        const result = directoryToTree(rootPath, +maxDepth);
        console.log(result);
        saveTreeResult(JSON.stringify(result, null, 4));
        console.log(
          `\nYou can see the full directory tree on the ${
            "tree.json".yellow
          } file at the ${
            "results".yellow
          } folder at the root of the project :D\n`
        );
        break;
    }

    await stop();
  } while (opt !== "0");
};

app();
