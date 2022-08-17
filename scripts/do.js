const fs = require("fs");
const todoFile = process.argv[2];
const doingFile = todoFile.replace("todo", "doing");
fs.copyFile(todoFile, doingFile, (err) => {
  if (err) throw err;
});
