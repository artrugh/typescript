// this approach doesn't work with non primitive values
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Hi')
textStorage.addItem('Bye')
textStorage.removeItem('Hi')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(30)
numberStorage.addItem(10)
numberStorage.removeItem(10)
console.log(numberStorage.getItems());

// thi method doesn't work for objectStorage and non primative values because:
// obj in js are reference types

// each team you try to remove an obj you are passing a new address, so the obj is not found

