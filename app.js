const fs = require("fs");
/**
 * Returns something...
 * @param {string} rootPath - The path to the root directory to process
 * @param {string} maxDepth - The depth of the directory tree to include in the
 * result structure
 * @returns {Object} result - Represents the tree structure
 * @param {string} result.name - The name of the file or directory
 * @param {string} result.path - The path to the file or directory, starting
 * from and including the roothPath
 * @param {number} result.size - An integer representing the file or directory size in bytes
 * @param {Array} result.children - for all "dir" nodes (even if empty) and absent for
 * all "file" nodes.
 */
const directoryToTree = (rootPath, maxDepth) => {
  // ? Validations
  if (!rootPath || typeof rootPath !== "string") {
    throw new Error("You must provide a valid path");
  }
  if (maxDepth < 0 || typeof maxDepth !== "number") {
    throw new Error("You must provide a valid depth value");
  }

  // ? Solution
  const pathSections = rootPath.split("/");
  const name = pathSections[pathSections.length - 1];
  const size = fs.statSync(rootPath).size;
  const type = fs.lstatSync(rootPath).isDirectory() ? "dir" : "file";

  const files = fs.readdirSync(rootPath).map((file) => `${rootPath}/${file}`);
  const directoriesPaths = files.filter((path) =>
    fs.lstatSync(path).isDirectory()
  );
  const filesPaths = files.filter((path) => fs.lstatSync(path).isFile());

  const result = {
    path: rootPath,
    name,
    type,
    size,
    children: [],
  };

  if (maxDepth === 0) return result;

  const childrenFiles = filesPaths.map((path) => {
    const fileNameSplited = path.split("/");
    const fileName = fileNameSplited[fileNameSplited.length - 1];
    return {
      path: path,
      name: fileName,
      type: "file",
      size: fs.statSync(path).size,
    };
  });

  const childrenDirectories = directoriesPaths.map((path) =>
    directoryToTree(path, maxDepth - 1)
  );

  result.children = [...childrenFiles, ...childrenDirectories];
  return result;
};

module.exports = directoryToTree;
