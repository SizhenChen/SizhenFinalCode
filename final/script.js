let n = -1;

var boxes = document.querySelectorAll('.Box');
boxes.forEach(function (div, index) {
    var boxId = 'box' + (index);
    div.id = boxId;
    // console.log(`${index}+${boxId}`)
})

var names = document.querySelectorAll('.name');
names.forEach(function (h2, index) {
    var nameId = 'name' + (index);
    h2.id = nameId;
    // console.log(`${index}+${nameId}`)
})

var addSigns = document.querySelectorAll('.add');
addSigns.forEach(function (button) {
    n++;
    // console.log(`${num}`)
    let Name = document.getElementById(`name${n}`).innerHTML;
    // console.log(`${Name}`)
    let Box = document.getElementById(`box${n}`);
    button.addEventListener('click', function () {
        let suggestion = prompt(`Please enter your suggestion for ${Name}`);
        // console.log(suggestion)
        let para = document.createElement("p");
        para.style.margin = 0;
        Box.appendChild(para);
        para.innerText = `•${suggestion}`;

        if (suggestion === null) {
            para.innerText = null;
        }
    })
})

let m = -1;

var hierarchies = document.querySelectorAll('.hierarchy');
hierarchies.forEach(function (div, index) {
    var hierarchyId = 'hierarchy' + (index);
    div.id = hierarchyId;
    // console.log(`${hierarchyId}`)
})

var showList = document.querySelectorAll('.showList');
showList.forEach(function (button) {
    m++;
    let child = document.getElementById(`hierarchy${m + 1}`)
    // console.log(`hierarchy${m + 1}`)
    button.addEventListener('click', function () {
        child.classList.toggle('show');
        //An issue here: when the arrow button is clicked the toggle of invisibility won't happen.

        if (button.innerHTML === '▼') {
            button.innerHTML = '▲';
        } else if (button.innerHTML === '▲') {
            button.innerHTML = '▼';
        }
    })
})

