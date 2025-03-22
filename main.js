const outcome = document.querySelector('h5');
const btn = document.querySelector('button');
const img = document.querySelector('img');


btn.addEventListener("click", () => {
    result = Math.round(Math.random() * 2) +1;
    result = (result <2) ? outcome.innerHTML = "Tails" : outcome.innerHTML = "Heads";  
    img.src = `./assets/${result.toLowerCase()}.svg`;
    console.log(result);
})