const directoryToTree = require("../app");

describe("Tests for code challenge", () => {
  test("should throw an error if there isn't any value for rootPath param", () => {
    try {
      directoryToTree();
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("You must provide a valid path");
    }
  });
  test("should throw an error if there isn't any value for ", () => {
    try {
      directoryToTree("dummy_dir");
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("You must provide a valid depth value");
    }
  });
  test("should have a children value based on the rootPath 'dummy_dir/a_dir' and the maxDepth of 5", () => {
    const result = directoryToTree("dummy_dir/a_dir", 5);
    expect(result.children[0].name).toEqual("test_file1.md");
    expect(result.children[0].type).toEqual("file");
  });
  test("should have 4 children values based on the rootPath 'dummy_dir' and the maxDepth of 5", () => {
    const result = directoryToTree("dummy_dir", 5);
    expect(result.children.length).toEqual(4);
  });
  test("should not see children from the childrens of the rootPath 'dummy_dir' and the maxDepth of 1", () => {
    const result = directoryToTree("dummy_dir", 1);
    expect(result.children[1].children.length).toEqual(0);
    expect(result.children[2].children.length).toEqual(0);
  });
  test("should be able to see both c directories and files of the rootPath 'dummy_dir/c_dir' and the maxDepth of 3", () => {
    const result = directoryToTree("dummy_dir/c_dir", 2);
    expect(result.children.length).toEqual(2);
    expect(result.children[0].type).toEqual("dir");
    expect(result.children[1].type).toEqual("dir");
    expect(result.children[0].children[0].type).toEqual("file");
    expect(result.children[1].children[0].type).toEqual("file");
  });
  test("should be able to see the data of the 'test_c_file1.md'", () => {
    const result = directoryToTree("dummy_dir/c_dir/c_a_dir", 1);
    expect(result.type).toEqual("dir");
    expect(result.children[0].path).toEqual(
      "dummy_dir/c_dir/c_a_dir/test_c_file1.md"
    );
    expect(result.children[0].name).toEqual("test_c_file1.md");
    expect(result.children[0].type).toEqual("file");
    expect(result.children[0].size).toEqual(0);
  });
  test("should be able to see the data of the tests directory", () => {
    const result = directoryToTree("tests", 1);
    expect(result.path).toEqual("tests");
    expect(result.name).toEqual("tests");
    expect(result.type).toEqual("dir");
    expect(result.children.length).toEqual(1);
    expect(result.children[0].path).toEqual("tests/index.test.js");
    expect(result.children[0].name).toEqual("index.test.js");
    expect(result.children[0].type).toEqual("file");
  });
});
