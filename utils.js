//// Create Wrapper Function

export function createWrapper(children = [], cssClass = []) {
  const div = document.createElement("div");
  div.classList.add(...cssClass);
  div.append(...children);

  return div;
}

//// End Create Wrapper Function


//// Create Element Function

export function createElement(type, attributes = {}, cssClass = []) {
  const element = document.createElement(type);
  for (let attributeType in attributes) {
    element.setAttribute(attributeType, attributes[attributeType]);
  }
  element.classList.add(...cssClass);

  return element;
}
//// End Create Element Function


//// Create Button Function

export function createButton(text,  cssClass = [], attributes = {}) {
    const button = createElement("button", attributes ,cssClass);
    
    button.innerText = text;
  
    return button;
  }
  //// End Create Button Function