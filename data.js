


//// Get Current Date Function

const getCurrentDate = () => {
  return `${new Date().getDate()}.${new Date().getMonth()< 10 ?  '.0' : ''}${new Date().getMonth() +
    1}.${new Date().getFullYear()}`;
};

//// End Get Current Date Function

//// Data Block

let todoItemsJSON = localStorage.getItem("notes") || "[]";
let todoItems = JSON.parse(todoItemsJSON);

//// End Data Block

export  { getCurrentDate ,todoItems}