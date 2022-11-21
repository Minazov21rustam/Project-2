export default class Model {
  constructor() {
    this.arr = [];
  }

  addElement(task) {
    this.arr.push(task);
  }
  sortingArr() {
    this.arr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  }
  sortingArrReverse() {
    this.arr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1));
  }
  deleteTask(selectIndex) {
    this.arr = this.arr.filter((el, index) => index !== selectIndex);
  }
  changeTask(index, task) {
    this.arr[index] = task;
  }
}
