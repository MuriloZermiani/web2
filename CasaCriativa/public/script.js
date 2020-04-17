
function onOff() {
    document.querySelector("#modal")
        .classList
        .toggle("hide")

        document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

        document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

/*function checkfields(event){

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "decription",
        "link",

    ]

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if (checkIfIsString && checkIfIsString) {
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor preencha todos os campos")
    }
        
    for (let value of valuesToCheck){
        console.log(event.target[value].value)
    }

}*/
