export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const inputValue = data.get("tasks");
        this.model.addElement(inputValue);
        this.view.emptyInput();
        this.renderTasks();

      
    });

    this.view.buttonSort.addEventListener("click", (e) => {
      e.preventDefault();
      this.renderTasks();
      this.sortImage(e);
    });
  }

  renderTasks() {
    this.view.ul.innerHTML = "";
    this.model.arr.forEach((el, index) => {
      this.addElement(el, index);

      this.newInput.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });
    });
    this.correctUll();
  }

  correctUll() {
    if (this.model.arr.length) {
      this.view.ul.className = "mainList";
    } else {
      this.view.ul.classList.remove("mainList");
    }
  }

  addElement(task, currentIndex) {
    const li = this.view.createLi({ class: "li draggable", draggable: "true" });
    this.newInput = this.view.createInput({
      class: "input-li draggable",
      name: "input-name",
      value: task,
    });

    li.appendChild(this.newInput);
    this.view.ul.appendChild(li);
    const deleteButton = this.view.createImage({
      type: "button",
      class: "deleteImage",
    });
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      this.model.deleteTask(currentIndex);
      this.renderTasks();
    });
  }

  sortImage(e) {
    if (e.target.className === "img-down") {
      e.target.className = "img-up";

      this.model.sortingArrReverse();
      this.renderTasks();
    } else {
      e.target.className = "img-down";
      this.model.sortingArr();
      this.renderTasks();
    }
  }
}
