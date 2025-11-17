import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector("#add-todo-form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => modal.classList.add("popup_visible");
const closeModal = (modal) => modal.classList.remove("popup_visible");

function renderTodo(data) {
  const todo = new Todo(data, "#todo-template");
  todosList.append(todo.getView());
}

initialTodos.forEach(renderTodo);

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

addTodoButton.addEventListener("click", () => openModal(addTodoPopup));
addTodoCloseBtn.addEventListener("click", () => closeModal(addTodoPopup));

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = addTodoForm.name.value;

  const dateInput = addTodoForm.date.value;
  const date = dateInput ? new Date(dateInput) : undefined;

  const todoData = {
    id: uuidv4(),
    name,
    date,
    completed: false,
  };

  renderTodo(todoData);

  closeModal(addTodoPopup);
  newTodoValidator.resetValidation();
});
