import * as src from "../src/search.js";
// import * as practice from "../practice/bfs.js";
let bfs, dfs, Node;

describe.each([
  ["src", src],
  // ["practice", practice]
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
  });
  describe("dfs", () => {
    test("sanity", () => {
      testSanity(dfs);
    });
  });
});

function testSanity(searcher) {
  const expected = new Node(1);
  const tree = new Node(0, [expected, new Node(2)]);
  expect(searcher(tree, expected.key)).toEqual(expected);
}
