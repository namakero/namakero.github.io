
main()
toDo()
function toDo() {
    const ary = [];
    const inputText = document.getElementById("inputText");
    const enter = document.getElementById("enter");
    const list = document.getElementById("list");

    inputText.addEventListener("input", function (Text) {
        ary.push(text);
    })

    const listAfter = document.createElement("li");
    listAfter.textContent = ary[ary.length];
    element.appendChild(list);

    


}

function main() {
    let count = 0;
    const countUp = document.getElementById("countUp");
    const countDi = document.getElementById("countDi");
    const countDo = document.getElementById("countDo");
    const countRe = document.getElementById("countRe");

    countUp.addEventListener("click", function () {
        count += 1;
        if(count > 99999){
            count = 0;
        }
        countDi.innerHTML = count;
    })

    countDo.addEventListener("click", function () {
        count -= 1;
        if(count < 0){
            count = 0;
        }
        countDi.innerText = count;
    })

    countRe.addEventListener("click", function () {
        count = 0;
        countDi.innerText = count;
    })
}