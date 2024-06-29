function addClass() {
    const imgElement = document.getElementById("myImg");
    imgElement.classList.add("hidden");
}


function removeClass() {
    const imgElement = document.getElementById("myImg");
    imgElement.classList.remove("hidden");
}

function toggleClass() {
    const imgElement = document.getElementById("myImg");
    imgElement.classList.toggle("hidden");
}