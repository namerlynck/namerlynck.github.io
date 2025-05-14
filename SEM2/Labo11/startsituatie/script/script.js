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

    //make sure you can't put a liked movie twice into to the moviebar
    if(!likedMovies.includes(movies[likebtn.getAttribute("data-id") -1])){
        //Add liked movie to array
        likedMovies.push(movies[likebtn.getAttribute("data-id") -1]);
        likeCounter++;
        console.log("IF IS SUCCES\n" + likeCounter)
        likebtn.setAttribute("id", "likecounter");

        //create the needed elements
        let likedMovie = createElement("div");
        let titlemovie = createElement("p");
        likedMovie.setAttribute("id", "data-id");
        let title = document.createTextNode(movies[likebtn.getAttribute("data-id") -1].title);
        //create garbage icon
        let garbage = createIconButton('fas fa-trash', 'unset buttons', deleteMovie);

        //append all elements
        titlemovie.appendChild(title);
        likedMovie.appendChild(titlemovie);
        moviebar.appendChild(likedMovie);
        likedMovie.appendChild(garbage);

        //increase the like counter
        document.getElementById("like").textContent = likeCounter;
        //Remove the dislike for further info look in the used function
        removeDislike(event);
    } else {
        alert("You cannot like a movie twice!")
        console.log("move is already in")
    }
    //Make the likebar visible
    let likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";
}

const dislike = (event) =>{
    let dislikebtn = event.target.parentElement;
    dislikebtn.setAttribute("id", "dislikecounter");
    if(!dislikedMovies.includes(movies[dislikebtn.getAttribute("data-id") -1])){
        dislikedMovies.push(movies[dislikebtn.getAttribute("data-id") -1]);
        dislikeCounter++;
        removeLike(event);
    } else {
        alert("you cannot dislike a movie twice!")
    }

    document.getElementById("dislike").textContent = dislikeCounter;
}

const removeLike = (event) => {
    let dislikebtn = event.target.parentElement;
    dislikebtn.setAttribute("id", "dislikecounter");
    console.log("RemoveLike succesfull\n" + event.target);
    if (likedMovies.includes(movies[dislikebtn.getAttribute("data-id") - 1])) {
        //If movie is in likedmovies
        //Remove the movie from the array
        //Decrease the likecounter
        const index = likedMovies.indexOf(movies[dislikebtn.getAttribute("data-id") - 1]);
        likedMovies.splice(index, 1);
        likeCounter--;
        deleteMovie();
        //nu nog CSS removen van likebutton
    }
}

const removeDislike = (event) => {
    let likebtn = event.target.parentElement;
    likebtn.setAttribute("id", "dislikecounter");
    console.log("RemoveDisLike succesfull\n"+ event.target);
    if(dislikedMovies.includes(movies[likebtn.getAttribute("data-id") -1])){
        //If movie is in dislikedmovies
        //Remove the movie from the array
        //Decrease the dislikecounter
        const index = dislikedMovies.indexOf(movies[likebtn.getAttribute("data-id") -1]);
        dislikedMovies.splice(index, 1);
        dislikeCounter--;
        //deleteMovie();
        //nu nog CSS removen van likebutton
    }
}
const deleteMovie = () => {
    let moviebar = document.getElementById("likebarmovies");
    let film = document.getElementById("data-id");
    moviebar.removeChild(film);
}
window.addEventListener("load", setup);