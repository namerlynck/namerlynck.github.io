// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const likedMovies = [];
const dislikedMovies = [];
let likeCounter = 0;
let dislikeCounter = 0;
const setup = () => {
    loadMovies();
}

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};
const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};

const loadMovies = () => {
    let movieList = document.getElementById("movielist");

    movies.forEach((movie, index)=> {
        let divMovie = createElement("div", "movie", "");
        let title = createElement("p", "title", movie.title);
        let divButton = createElement("div");
        let image = createElement("img", "image");
        image.setAttribute("src", movie.imageUrl);
        let likeButton = createIconButton(
            "fas fa-thumbs-up",
            "unset buttons",
            like
        );
        //likeButton.classList.add("buttons");
        likeButton.setAttribute("data-id", movie.id);
        let dislikeButton = createIconButton(
            "fas fa-thumbs-down",
            "unset buttons",
            dislike
        );
        let description = createElement("p", "description", movie.description);
        //dislikeButton.classList.add("buttons");
        dislikeButton.setAttribute("data-id", movie.id);

        divMovie.appendChild(title);

        divButton.appendChild(likeButton);
        divButton.appendChild(dislikeButton);
        divMovie.appendChild(divButton);
        divMovie.appendChild(image);
        divMovie.appendChild(description);
        movieList.appendChild(divMovie);
    });
}

const like = (event) =>{
    let moviebar = document.getElementById("likebarmovies");
    let likebtn = event.target.parentElement;
    //Add liked movie to array

    //make sure you can't put a liked movie twice into to the moviebar
    if(!likedMovies.includes(movies[likebtn.getAttribute("data-id") -1])){
        likedMovies.push(movies[likebtn.getAttribute("data-id") -1]);
        likeCounter++;
        console.log("IF IS SUCCES\n" + likeCounter)
        //create a likedmovie Div
        likebtn.setAttribute("id", "likecounter");
        let likedMovie = createElement("div");
        let titlemovie = createElement("p");
        likedMovie.setAttribute("id", "data-id");
        let title = document.createTextNode(movies[likebtn.getAttribute("data-id") -1].title);

        //append all elements
        titlemovie.appendChild(title);
        likedMovie.appendChild(titlemovie);
        moviebar.appendChild(likedMovie);

        //create garbage icon
        let garbage = createIconButton('fas fa-trash', 'unset buttons', deleteMovie);
        likedMovie.appendChild(garbage);

        //increase the like counter
        document.getElementById("like").textContent = likeCounter;
    } else {
        alert("You cannot like a movie twice!")
        console.log("move is already in")
    }


    //Make the likebar visible
    let likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";
}

const dislike = (event) =>{
    let dislikebtn = event.target;
    dislikebtn.setAttribute("id", "dislikecounter");
    dislikeCounter++;
    document.getElementById("dislike").textContent = dislikeCounter;
}

const deleteMovie = () => {
    let moviebar = document.getElementById("likebarmovies");
    let film = document.getElementById("data-id");
    moviebar.removeChild(film);
}
window.addEventListener("load", setup);