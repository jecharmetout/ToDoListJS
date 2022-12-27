import { createWrapper, createElement, createButton } from "./utils.js";
import { title } from "./components/title-todo.js";
import { deleteAllBtn, inputElement, addBtn } from "./components/head-todo.js";
import { list, updateNoteList, addNewList } from "./components/list.js";
import { getCurrentDate, todoItems } from "./data.js";

////Title

const titleWrapper = createWrapper([title], ["title"]);

////Head

const headWrapper = createWrapper(
  [deleteAllBtn, inputElement, addBtn],
  ["note-head"]
);

////Body

const bodyWrapper = createWrapper([list], ["note-body"]);

// HANDLERS

//1. delete all notes

function deleteAll() {
  todoItems.length = 0;

  updateNoteList(list, todoItems);
  localStorage.setItem("notes", JSON.stringify(todoItems));
}

//2. add new todo-notes

function addNotes() {
  let textValue = inputElement.value;
  if (textValue.length === 0) {
    alert("tap some note text");
    return;
  }
  todoItems.push({
    id: 0,
    text: textValue,
    date: getCurrentDate(),
    isChecked: false
  });
  todoItems.map((element, index) => (element["id"] = index));

  localStorage.setItem("notes", JSON.stringify(todoItems));

  list.innerHTML = "";
  addNewList(list, todoItems);

  inputElement.value = "";
}

//3. set "DONE" in chekbox

function addCheked(evt) {
  const target = evt.target;
  const currentIndex = target.offsetParent.id;
  let currentLiELement = document.getElementById(`${currentIndex}`);

  if (target.className === "done") {
    todoItems[currentIndex].isChecked = true;
    target.classList.toggle("done-checked");
    currentLiELement.classList.toggle("done-list");
  } else if (target.className === "done done-checked") {
    todoItems[currentIndex].isChecked = false;
    target.classList.toggle("done-checked");
    currentLiELement.classList.toggle("done-list");
  }
}

//4. remove one list card

function removeLiElement(evt) {
  const target = evt.target;
  const currentIndex = target.offsetParent.id;

  if (target.className === "delete") {
    todoItems.splice(currentIndex, 1);
    updateNoteList(list, todoItems);
  }
  localStorage.setItem("notes", JSON.stringify(todoItems));
}

// END HANDLERS

// ADD EVENT LISTENERS

// 1. Delete all elements

deleteAllBtn.addEventListener("click", deleteAll, true);

// 2. add new todo-notes

//2.1 add with btn 'Add'

addBtn.addEventListener("click", addNotes, true);

//2.1 add with btn 'Enter'

inputElement.addEventListener(
  "keypress",
  evt => {
    if (event.keyCode === 13) {
      addNotes();
    }
  },
  true
);

// 3. Create a new list item when clicking on the "Add" button

list.addEventListener("click", addCheked, true);

// 4. Delete one note List

list.addEventListener("click", removeLiElement, true);

// END ADD EVENT LISTENERS

///Get Root Element

const rootElement = document.getElementById("root");
rootElement.classList.add("wrap");
rootElement.append(titleWrapper, headWrapper, bodyWrapper);
