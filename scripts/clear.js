/**
 * Delete all files ending in ".doing.js" in the project directory
 */
const fs = require("fs");
fs.readdir("./", (err, files) => {
  if (err) throw err;
  for (let file of files) {
    if (file.endsWith(".doing.js")) {
      fs.rename(file, `./.archive/${file}`, (err) => {
        if (err) throw err;
      });
    }
  }
});
