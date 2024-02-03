let inputElement = document.getElementById("Input-text");
let AddElement = document.getElementById("Add-button");

let AddListItems = document.getElementById("Todo-item-list");

let id_value = localStorage.setItem("id_value", 0);
let save_button = document.getElementById("save-data");

list = [];

function appendingListValues(id, taskValue) {
  data = {
    id: id,
    task: taskValue,
  };
  list.push(data);
}

function DeleteTask(id_value) {
  let task = document.getElementById(id_value);
  AddListItems.removeChild(task);

  list.splice(id_value - 1, 1);
}

function AdditemNameIcons(id_value, input_by_user) {
  //   let id_value = localStorage.getItem("id_value");
  //   id_value = parseInt(id_value) + 1;
  let todo_item_container = document.createElement("div");
  todo_item_container.classList.add("Todo-item");
  todo_item_container.id = id_value;
  AddListItems.appendChild(todo_item_container);

  let number_para = document.createElement("div");
  number_para.classList.add("number_para");
  todo_item_container.appendChild(number_para);

  let serial_num = document.createElement("p");
  serial_num.classList.add("Task_number");
  serial_num.textContent = id_value;
  number_para.appendChild(serial_num);

  let task_name_container = document.createElement("div");
  task_name_container.classList.add("List-item");
  todo_item_container.appendChild(task_name_container);

  let task_name = document.createElement("p");
  task_name.classList.add("Item-name");
  task_name.textContent = input_by_user;
  task_name_container.appendChild(task_name);

  let delete_container = document.createElement("div");
  delete_container.classList.add("delete");

  todo_item_container.appendChild(delete_container);

  let font_icon = document.createElement("i");
  font_icon.setAttribute("class", "fa fa-trash");
  font_icon.setAttribute("aria-hidden", "true");
  font_icon.id = id_value;
  delete_container.appendChild(font_icon);

  font_icon.onclick = function () {
    DeleteTask(id_value);
  };

  appendingListValues(id_value, input_by_user);
}

function saveDataLocalStorage(list) {}

function get_items_list(data_values) {
  for (item of data_values) {
    let id = item["id"];
    let task = item["task"];
    console.log(id, task);
    AdditemNameIcons(id, task);
  }
}

function saveData() {
  console.log("save_button", list);
  localStorage.setItem("taskList", JSON.stringify(list));
}

// function getIdValue() {

// }

let get_data_from_localstorage = localStorage.getItem("taskList");
let data_value = JSON.parse(get_data_from_localstorage);
console.log(data_value);

length = data_value.length;
id_value = 0;

console.log();
id_value = length;
get_items_list(data_value);
console.log(list);

function AdditemName() {
  // id = getIdValue()
  //   console.log(list);
  id_value = list.length;
  let input_by_user = inputElement.value;
  inputElement.value = "";

  id_value += 1;
  if (!input_by_user) return alert("Please enter a valid value!");
  else {
    AdditemNameIcons(id_value, input_by_user);
  }
}

// localStorage.clear();
