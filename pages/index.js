import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import TodoCounter from "../components/TodoCounter.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const TEMPLATE_SELECTOR = "#todo-template";
const TODOS_CONTAINER_SELECTOR = ".todos__list";
const COUNTER_SELECTOR = ".counter__text";
const ADD_TODO_FORM_SELECTOR = "#add-todo-form";
const ADD_TODO_POPUP_SELECTOR = "#add-todo-popup";
const ADD_TODO_BUTTON_SELECTOR = ".button_action_add";

const addTodoButton = document.querySelector(ADD_TODO_BUTTON_SELECTOR);

const todoCounter = new TodoCounter(initialTodos, COUNTER_SELECTOR);

const renderTodo = (data) => {
  const todo = new Todo(
    data,
    TEMPLATE_SELECTOR,
    (checked) => todoCounter.updateCompleted(checked),
    (wasCompleted) => {
      todoCounter.updateTotal(false);
      if (wasCompleted) todoCounter.updateCompleted(false);
    }
  );
  todoSection.addItem(todo.getView());
};

const todoSection = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: TODOS_CONTAINER_SELECTOR,
});

todoSection.renderItems();

const addTodoPopup = new PopupWithForm(ADD_TODO_POPUP_SELECTOR, (values) => {
  const todoData = {
    id: uuidv4(),
    name: values.name,
    date: values.date ? new Date(values.date) : undefined,
    completed: false,
  };

  todoCounter.updateTotal(true);
  renderTodo(todoData);
  addTodoPopup.close();
});

addTodoPopup.setEventListeners();

const newTodoValidator = new FormValidator(
  validationConfig,
  document.querySelector(ADD_TODO_FORM_SELECTOR)
);
newTodoValidator.enableValidation();

addTodoButton.addEventListener("click", () => addTodoPopup.open());
