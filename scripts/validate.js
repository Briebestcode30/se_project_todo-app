import { validationConfig } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";

const formElement = document.querySelector(validationConfig.formSelector);

const validator = new FormValidator(validationConfig, formElement);
validator.enableValidation();
