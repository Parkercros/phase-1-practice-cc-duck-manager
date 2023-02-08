fetch("http://localhost:3000/ducks")
    .then(response => response.json())
    .then(ducksData =>{
        renderDucks(ducksData)
        renderDetails(ducksData[0])
        addLikes()
    })

function renderDucks(ducksData){
    let ducksNav = document.querySelector('#duck-nav')
    ducksData.forEach(duck => {
        let duckLink = document.createElement("span")
        duckLink.textContent = duck.name
        ducksNav.append(duckLink)

        duckLink.addEventListener("click", ()=>{
            renderDetails(duck)
        })
    })
}
function renderDetails(duck) {
    currentDuck = duck;

    let image = document.querySelector("#duck-display-image")
    let name = document.querySelector("#duck-display-name")
    let likes = document.querySelector("#duck-display-likes")

    image.src = currentDuck.image
    likes.textContent = `${currentDuck.likes} likes`
    name.textContent = currentDuck.name
}

function addLikes(){
    let likeButton = document.querySelector("#duck-display-likes");

    likeButton.addEventListener("click", () => {
        currentDuck.likes += 1;
        renderDetails(currentDuck);
    });
}


