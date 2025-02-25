export const MOVIE_ACTION_TYPES = {
    SAVE_ALL_MOVIES: "SAVE_ALL_MOVIES",
    FETCH_MOVIE_ERROR: "FETCH_MOVIE_ERROR"
};

export function saveMovies(type = "", payload = {}) {
    console.log("Action dispatched");
    return {type, payload}
}