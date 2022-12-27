import { todoItems } from "../data.js";
import { createElement } from "../utils.js";
import { createToDoElement } from "./li-element.js";

//// Create Ul Element

function createNoteList(createLiElements, cssCLass = [], attributes = {}) {
  const ul = createElement("ul", attributes, cssCLass);

  ul.append(...createLiElements);

  return ul;
}

//// End Create Ul Element

//// Update Note List

function updateNoteList(listElement, data) {
  listElement.innerHTML = "";

  const todoElements = data.map((element, index) => {
    return createToDoElement(element, (element.id = index));
  });

  listElement.append(...todoElements);
}

//// End Update Note List

//// Update  New List Element

function addNewList(listElement, data) {
  const todoElements = data.map(element => {
    return createToDoElement(element);
  });

  listElement.append(...todoElements);
}

//// End Update  New List Element

const todoElements = todoItems.map(createToDoElement);

const list = createNoteList(todoElements, ["note-list"]);

export { list, updateNoteList, addNewList };
