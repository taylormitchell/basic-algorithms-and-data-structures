const acorn = require("acorn");
const fs = require("fs");

const js = fs.readFileSync("./linkedListDoubly.js", "utf8");

let ast = acorn.parse(js, { ecmaVersion: "latest" });

function findFunctionBodyLocs(root) {
  let children;
  if (!root) {
    return [];
  } else if (root.body) {
    children = root.body instanceof Array ? root.body : [root.body];
  } else if (root.value) {
    children = root.value instanceof Array ? root.value : [root.value];
  } else {
    return [];
  }

  result = [];
  for (let node of children) {
    if (node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") {
      result.push({ start: node.body.start, end: node.body.end });
    } else {
      result = result.concat(findFunctionBodyLocs(node));
    }
  }
  return result;
}

let locs = findFunctionBodyLocs(ast);
let searchValues = locs.map((loc) => js.slice(loc.start, loc.end));

let jsTodo = js;
for (let searchValue of searchValues) {
  jsTodo = jsTodo.replace(searchValue, "{}");
}

console.log(jsTodo);
