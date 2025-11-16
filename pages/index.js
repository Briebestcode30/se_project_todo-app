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

initialTodos.forEach((item) => {
  const todo = new Todo(item, "#todo-template");
  todosList.append(todo.getView());
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

addTodoButton.addEventListener("click", () => openModal(addTodoPopup));
addTodoCloseBtn.addEventListener("click", () => closeModal(addTodoPopup));

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = addTodoForm.name.value;
  const date = addTodoForm.date.value || new Date();

  const todoData = {
    id: uuidv4(),
    name,
    date,
    completed: false,
  };

  const newTodo = new Todo(todoData, "#todo-template");
  todosList.append(newTodo.getView());

  closeModal(addTodoPopup);
  newTodoValidator.resetValidation();
});
