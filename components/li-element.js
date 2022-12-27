import { createElement, createWrapper, createButton } from "../utils.js";

/// Create Li Element

export function createToDoElement({ id, text, date, isChecked }) {
  ////---Done Block---////

  const cssCheckedBoxClass = ["done"];
  const cssCheckedLiClass = [];
  if (isChecked) {
    cssCheckedBoxClass.push("done-checked");
    cssCheckedLiClass.push("done-list");
  }
  const doneCheck = createElement("div", {}, cssCheckedBoxClass);

  ////---Description Block ---////

  const descriptionContent = createElement("p");
  descriptionContent.innerText = text;
  const descriptionWrapper = createWrapper(
    [descriptionContent],
    ["description"]
  );

  ////---Delete li & Date BLock---////

  const deleteBtn = createButton("X", ["delete"]);

  const dateText = createElement("p");
  dateText.innerText = date;

  const dateWrapper = createWrapper([dateText], ["current-date"]);

  const deleteAndDateWrapper = createWrapper(
    [deleteBtn, dateWrapper],
    ["right-side"]
  );

  const li = document.createElement("li");

  li.id = id;
  li.classList.add(...cssCheckedLiClass);

  li.append(...[doneCheck, descriptionWrapper, deleteAndDateWrapper]);

  return li;
}

//// End Create Li Element
