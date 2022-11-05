let lastInput = "";


function searchInput(event) {
    let input = event.currentTarget.value;
if (input.includes(lastInput)) {
    recipesInputUpdate()
}else{
    recipesTagUpdate()
}
    
    lastInput = input;
}

