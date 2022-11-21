export default class View {
  constructor() {
    this.mainButton = null;
    this.root = document.getElementById("root");
  }

  init() {
    this.renderTodo();
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);
    props.type && (button.type = props.type);

    return button;
  }

  createParagraph(props) {
    const p = document.createElement("p");

    props.text && (p.innerText = props.text);
    props.class && (p.className = props.class);
    props.id && (p.id = props.id);

    return p;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.class && (ul.className = props.class);
    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerText = props.text);
    props.class && (li.className = props.class);
    props.id && (li.id = props.id);
    props.draggable && (li.draggable = props.draggable);

    return li;
  }

  emptyInput() {
    this.input.value = "";
    this.input.style.display = "none";
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.innerText = props.text);
    props.class && (input.className = props.class);
    props.id && (input.id = props.id);
    props.value && (input.value = props.value);
    props.type && (input.typeText = props.type);
    props.name && (input.name = props.name);

    return input;
  }
  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.class && (div.className = props.class);
    props.id && (div.id = props.id);

    return div;
  }
  createImage(props) {
    const img = document.createElement("img");

    props.id && (img.id = props.id);
    props.class && (img.className = props.class);
    props.src && (img.src = props.src);

    return img;
  }
  createForm(props) {
    const form = document.createElement("form");

    props.text && (form.innerText = props.text);
    props.class && (form.className = props.class);

    return form;
  }

  renderTodo() {
    const yellowDiv = this.createDiv({ class: "yellow-div" });
    const toDoDiv = this.createDiv({ class: "to-do-div" });
    const toDoP = this.createParagraph({
      class: "to-do-p",
      text: "To-Do-List",
    });
    const sortDiv = this.createDiv({ class: "sort-div" });
    const inputDiv = this.createDiv({ class: "input-div" });
    this.input = this.createInput({
      class: "main-input",
      type: "text",
      name: "tasks",
    });
    const buttonDiv = this.createDiv({ class: "button-div" });
    this.button = this.createButton({ class: "buttonAdd", text: "Добавить" });
    const buttonPlus = this.createButton({
      class: "buttonPlus",
      type: "button",
      text: "+",
    });

    this.buttonSort = this.createDiv({ class: "img-up" });
    this.ul = this.createUl({ id: "mainList", class: "mainList " });
    this.form = this.createForm({ class: "form" });

    toDoDiv.appendChild(toDoP);
    buttonDiv.appendChild(this.button);
    this.button.appendChild(buttonPlus);
    inputDiv.appendChild(this.input);
    sortDiv.appendChild(this.buttonSort);

    this.form.appendChild(yellowDiv);
    this.form.appendChild(toDoDiv);
    this.form.appendChild(sortDiv);
    this.form.appendChild(inputDiv);
    this.form.appendChild(this.ul);
    this.form.appendChild(buttonDiv);
    this.root.appendChild(this.form);
  }
}
