const data = require("./movies.json");

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let list = []

data.genres.forEach(genre => {
		let obj = {}

		let movie_list = []

		data.movies.forEach(movie => {
			movie.genres.forEach(movie_genre => {
				if (movie_genre === genre) {
					movie_list.push({
						...movie,
						url: movie.posterUrl,
						})
				}
			})
		})
		obj["genre"] = genre

		obj["data"] = shuffle(movie_list)

		list.push(obj)
	}
) 



export default list