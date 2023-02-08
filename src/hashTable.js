// https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.ipynb

class Item {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill().map((v) => []);
    this.prime = 31;
  }

  hash(key) {
    const keyInts = key.split("").map((char) => char.charCodeAt(0));
    const keyInt = keyInts.reduce((acc, curr) => acc + curr, 0);
    return (keyInt * this.prime) % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const item = this.buckets[index].find((i) => i.key === key);
    if (item) {
      item.value = value;
    } else {
      this.buckets[index].push(new Item(key, value));
    }
  }

  get(key) {
    const index = this.hash(key);
    const item = this.buckets[index].find((i) => i.key === key);
    return item ? item.value : undefined;
  }

  delete(key) {
    const index = this.hash(key);
    const bucketIdx = this.buckets[index].findIndex((i) => i.key === key);
    if (bucketIdx !== -1) {
      this.buckets[index].splice(bucketIdx, 1);
      return true;
    }
    return false;
  }

  entries() {
    return this.buckets.reduce((acc, bucket) => {
      return [...acc, ...bucket];
    }, []);
  }
}
