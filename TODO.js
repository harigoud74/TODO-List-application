let inp = document.querySelector(".inp");
let btn = document.querySelector(".btns");
let ul = document.querySelector(".midul");
let ul2 = document.querySelector(".ul2");
let ul3 = document.querySelector(".ul3");

btn.addEventListener("click", addtask);
function addtask() {
    console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
}

btn.addEventListener("click", incomplete);
function incomplete() {
    // console.log("clicked 2");
    let item = document.createElement("li");
    let labels = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    item.innerText = inp.value;
    ul2.appendChild(item);
    item.appendChild(labels);
    labels.appendChild(checkbox);
    // item.innerText = inp.value;
}

ul2.addEventListener("change", function (event) {
    if (event.target.type === "checkbox" && event.target.checked) {
        let listItem = event.target.closest("li");
        let item = listItem.innerText;
        let comli = document.createElement("li");
        comli.innerText = listItem.innerText;
        ul3.appendChild(comli);
    }
});

ul2.addEventListener("change", function (event) {
    if (event.target.type === "checkbox" && event.target.checked) {
        let listItem = event.target.closest("li");
        listItem.remove();
    }
});
