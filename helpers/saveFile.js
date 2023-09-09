import fs from "fs";

export const saveTreeResult = (data) => {
  const file = "./results/tree.json";
  fs.writeFileSync(file, data);
};
