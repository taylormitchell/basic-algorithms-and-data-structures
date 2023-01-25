import * as src from "../src/search.js";
// import * as practice from "../practice/search.js";
let bfs, dfs, Node;

describe.each([
  ["src", src],
  // ["practice", practice],
])("%s", (_, module) => {
  beforeAll(() => {
    bfs = module.bfs;
    dfs = module.dfs;
    Node = module.Node;
  });
  describe("bfs", () => {
    test("sanity", () => {
      testSanity(bfs);
    });
    test("missing", () => {
      testMissing(dfs);
    });
    test("empty", () => {
      testEmpty(dfs);
    });
    test("root", () => {
      testRoot(dfs);
    });
  });
  describe("dfs", () => {
    test("sanity", () => {
      testSanity(dfs);
    });
    test("missing", () => {
      testMissing(dfs);
    });
    test("empty", () => {
      testEmpty(dfs);
    });
    test("root", () => {
      testRoot(dfs);
    });
  });
});

function testSanity(searcher) {
  const expected = new Node(1);
  const tree = new Node(0, [expected, new Node(2)]);
  expect(searcher(tree, expected.key)).toEqual(expected);
}

function testMissing(searcher) {
  const tree = new Node(0, [new Node(1), new Node(2)]);
  expect(searcher(tree, 3)).toEqual(null);
}

function testEmpty(searcher) {
  expect(searcher(null, 3)).toEqual(null);
}

function testRoot(searcher) {
  const expected = new Node(1);
  expect(searcher(expected, expected.key)).toEqual(expected);
}
