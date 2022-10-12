# Basic algorithm and data structures

A collection of javascript implementations of fundamental algorithms and data structures. Includes tests and blank templates that can be used to practice implementing yourself.

How to use this for practice:

- Make a copy of a file ending in `todo.js`
- Replace `todo.js` with `doing.js`
- Fill in the missing implementations
- Run the test file ending in `test.js`

## Todo

- [ ] ankify the big-O for heaps

### maybe/later

- I don't like how the hashTable.todo.js has the Item class and `size = 10` as givens. I want those to be part of the thing I need to remember to implement. Maybe move them into the test file? Maybe have a separate test file config file? Or maybe have the test file just be a template and then have a test while checks that the test file and implementation file are in sync.

You could have some kind of markup in the template which says whether the generated todo file should include the class/function/parameter/etc and how.

```js
/**
 * include=false
 */
class Item {}

class HashTable {
  /**
   * include=true
   * @param size (include = false)
   */
  constructor() {}
}
```
