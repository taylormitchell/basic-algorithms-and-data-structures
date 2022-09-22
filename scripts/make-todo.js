const acorn = require("acorn");
const fs = require("fs");

const sourcepath = process.argv[2];
if (!sourcepath) {
  console.log("No sourcepath given");
  process.exit(1);
}

const source = fs.readFileSync(sourcepath, "utf8");
let ast = acorn.parse(source, { ecmaVersion: "latest" });

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
    if (
      ["FunctionDeclaration", "FunctionExpression", "ArrowFunctionExpressiong"].includes(node.type)
    ) {
      result.push({ start: node.body.start, end: node.body.end });
    } else {
      result = result.concat(findFunctionBodyLocs(node));
    }
  }
  return result;
}

let bodyLocs = findFunctionBodyLocs(ast);
let bodyContents = bodyLocs.map((loc) => source.slice(loc.start, loc.end));

let sourceTodo = source;
for (let searchValue of bodyContents) {
  sourceTodo = sourceTodo.replace(searchValue, "{}");
}

const sourceTodoPath = sourcepath.replace(/\.js$/, ".todo.js");
fs.writeFileSync(sourceTodoPath, sourceTodo);
