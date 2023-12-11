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

let h = -1;
let m = -1;

var hierarchies = document.querySelectorAll('.hierarchy');
hierarchies.forEach(function (div, index) {
    var hierarchyId = 'hierarchy' + (index);
    div.id = hierarchyId;
    h++;
    // console.log(`${hierarchyId}+${h}`)
})

for (i = 0; i <= h; i++) {
    var showList = document.querySelectorAll(`#hierarchy${i} .showList`);
    // console.log(`#hierarchy${i}`);
    var sameHdiffChild = document.querySelectorAll(`#hierarchy${i} .sameHdiffChild`);

    sameHdiffChild.forEach(function (div, index) {
        var sameHdiffChildId = 'sameHdiffChild' + (index);
        div.id = sameHdiffChildId;
        // console.log(`${sameHdiffChildId}`);
    })

    showList.forEach(function (button, index) {
        let H = document.getElementById(`hierarchy${i + 1}`)
        // console.log(`hierarchy${i + 1}`);

        if (i > 0) {
            let C = document.getElementById(`sameHdiffChild${index}`)
            console.log(`sameHdiffChild${index}`)
            button.addEventListener('click', function () {
                H.classList.toggle('show');
                C.classList.toggle('show');
                //Why is here an error of cannot read properties of null when C isn't null?

                if (button.innerHTML === '▼') {
                    button.innerHTML = '▲';
                } else if (button.innerHTML === '▲') {
                    button.innerHTML = '▼';
                }
            })
        } else {
            button.addEventListener('click', function () {
                H.classList.toggle('show');

                if (button.innerHTML === '▼') {
                    button.innerHTML = '▲';
                } else if (button.innerHTML === '▲') {
                    button.innerHTML = '▼';
                }
            })
        }
    })

}

