// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
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
    likebtn.setAttribute("id", "likecounter");
    let likedMovie = createElement("div");
    let titlemovie = createElement("p");
    likedMovie.setAttribute("id", "data-id");
    let title = document.createTextNode(movies[likebtn.getAttribute("data-id") -1].title);
    titlemovie.appendChild(title);
    likedMovie.appendChild(titlemovie);
    moviebar.appendChild(likedMovie);

    let garbage = createIconButton('fas fa-trash', 'unset buttons', deleteMovie);
    likedMovie.appendChild(garbage);

    let likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";
}

const dislike = (event) =>{
    let dislikebtn = event.target;
    dislikebtn.setAttribute("id", "dislikecounter");
}

const deleteMovie = () => {
    let moviebar = document.getElementById("likebarmovies");
    let film = document.getElementById("data-id");
    moviebar.removeChild(film);
}
window.addEventListener("load", setup);