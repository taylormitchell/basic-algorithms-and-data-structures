/*
Run a test file on the .todo implementation

TODO: Finish implementing

1. load contents of given test file
2. replace e.g. `require('file');` with `require('file.todo');
3. save contents to temp file
4. run that temp file with jest
*/

const fs = require('fs');


let testFilename = process.argv[2]

fs.copyFileSync(testFilename, tempFilename)

const code = s.readFileSync(testFilename)

RegExp(`require(['"].*['"]);?)`)

temp

