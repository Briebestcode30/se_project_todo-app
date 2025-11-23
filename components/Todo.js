export default class Todo {
  constructor(data, selector, handleToggle, handleDelete) {
    this._name = data.name;
    this._date = data.date;
    this._completed = data.completed || false;
    this._id = data.id;
    this._selector = selector;

    this._handleToggle = handleToggle;
    this._handleDelete = handleDelete;
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._checkbox.addEventListener("change", () => {
      this._completed = this._checkbox.checked;
      this._handleToggle(this._completed);
    });

    this._deleteBtn.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._element.remove();
    });
  }

  getView() {
    this._element = this._getTemplate();

    this._checkbox = this._element.querySelector(".todo__completed");
    this._nameEl = this._element.querySelector(".todo__name");
    this._dateEl = this._element.querySelector(".todo__date");
    this._deleteBtn = this._element.querySelector(".todo__delete-btn");
    this._label = this._element.querySelector(".todo__label");

    this._nameEl.textContent = this._name;
    this._checkbox.checked = this._completed;

    this._checkbox.id = `todo-${this._id}`;
    this._label.setAttribute("for", `todo-${this._id}`);

    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._dateEl.textContent = `Due: ${dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._setEventListeners();

    return this._element;
  }
}
