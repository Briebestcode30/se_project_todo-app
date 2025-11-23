import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import TodoCounter from "../components/TodoCounter.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const addTodoButton = document.querySelector(".button_action_add");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const todoSection = new Section(
  {
    items: initialTodos,
    renderer: (data) => {
      const todo = new Todo(
        data,
        "#todo-template",
        (checked) => todoCounter.updateCompleted(checked),
        (wasCompleted) => {
          todoCounter.updateTotal(false);
          if (wasCompleted) todoCounter.updateCompleted(false);
        }
      );
      todoSection.addItem(todo.getView());
    },
  },
  ".todos__list"
);

todoSection.renderItems();

const addTodoPopup = new PopupWithForm("#add-todo-popup", (values) => {
  const todoData = {
    id: uuidv4(),
    name: values.name,
    date: values.date ? new Date(values.date) : undefined,
    completed: false,
  };

  todoCounter.updateTotal(true);

  const todo = new Todo(
    todoData,
    "#todo-template",
    (checked) => todoCounter.updateCompleted(checked),
    (wasCompleted) => {
      todoCounter.updateTotal(false);
      if (wasCompleted) todoCounter.updateCompleted(false);
    }
  );

  todoSection.addItem(todo.getView());
  addTodoPopup.close();
});

addTodoPopup.setEventListeners();

const newTodoValidator = new FormValidator(
  validationConfig,
  document.querySelector("#add-todo-form")
);
newTodoValidator.enableValidation();

addTodoButton.addEventListener("click", () => addTodoPopup.open());
