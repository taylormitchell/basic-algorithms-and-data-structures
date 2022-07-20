// https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.ipynb

class Item {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(size=10) {
        this.size = size;
        this.buckets = new Array(size);
        this.prime = 31;
    }

    hash(key) {
        let keyAsInteger;
        if (typeof key === 'number') {
            keyAsInteger = key;
        } else {
            let keyCharCodes = key.toString().split('').map(char => char.charCodeAt(0)); // abc => [97, 98, 99]
            keyAsInteger = keyCharCodes.reduce((acc, curr) => acc + curr, 0) // [97, 98, 99] => 609
        }
        return keyAsInteger * this.prime % this.size; // 609 % 10 = 9
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = []; // this should be a linked list
        }
        let items = this.buckets[index];
        for (let i = 0; i < items.length; i++) {
            if (items[i].key === key) {
                items[i].value = value;
                return;
            }
        }
        items.push(new Item(key, value));
    }

    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        let items = this.buckets[index]
        for (let i = 0; i < items.length; i++) {
            if (items[i].key === key) {
                return items[i].value;
            }
        }
        return null;
    }

    delete(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            return false;
        }
        const items = this.buckets[index];
        for (let i = 0; i < items.length; i++) {
            if (items[i].key === key) {
                items.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    entries() {
        let entries = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (!this.buckets[i]) continue;
            for (let j = 0; j < this.buckets[i].length; j++) {
                entries.push([this.buckets[i][j].key, this.buckets[i][j].value]);
            }
        }
        return entries;
    }
}

module.exports = { HashTable };