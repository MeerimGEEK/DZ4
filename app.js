const input = document.querySelector("#input")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const reset = document.querySelector("#reset")


plus.addEventListener("click" ,() =>{
    input.value = parseInt(input.value) +1
    color()
})
minus.addEventListener("click" ,() =>{
    input.value = parseInt(input.value) -1
    color()
})

reset.addEventListener("click", () =>{
    input.value = 0
    color()
})

function color (){
    const value = parseInt(input.value)
    if (value >0){
        input.style.color = "green"
    } else if (value <0){
        input.style.color = "red"
    } else {
        input.style.color = "gray"
    }
}