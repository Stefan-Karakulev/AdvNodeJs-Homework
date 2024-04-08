interface IMovie {
  id: string;
  title: string;
  duration: number;
  genre: string;
  hasWonOscar?: boolean; 
}

class Movie implements IMovie {
  constructor(
    public id: string,
    public title: string,
    public duration: number,
    public genre: string,
    public hasWonOscar?: boolean
  ) {}
}

class MovieLibrary {
  private movies: IMovie[] = [];

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  printMovies(genre: string = 'action') {
    const filteredMovies = this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());

    if (filteredMovies.length === 0) {
      console.log(`No movies found in the ${genre} genre.`);
    } else {
      console.log(`Movies in the ${genre} genre:`);
      filteredMovies.forEach(movie => console.log(movie.title));
    }
  }

  static movieDetail(movie: Movie): string {
    return `Movie name is ${movie.title} and is of genre: ${movie.genre}`;
  }
}

const inception = new Movie("1", "Inception", 148, "Sci-Fi", true);
const shawshankRedemption = new Movie("2", "The Shawshank Redemption", 142, "Drama", true);
const dumbAndDumber = new Movie("3", "Dumb And Dumber", 149, "Comedy", true);
const fastAndFurious = new Movie("4", "Fast And Furious", 170, "Action", true);

const library = new MovieLibrary();

library.addMovie(inception);
library.addMovie(shawshankRedemption);

console.log("----------------------");
library.printMovies("Sci-Fi");

console.log("----------------------");
library.printMovies("Comedy");

console.log("----------------------");
console.log(MovieLibrary.movieDetail(inception));
console.log(MovieLibrary.movieDetail(shawshankRedemption));
console.log(MovieLibrary.movieDetail(fastAndFurious));
console.log(MovieLibrary.movieDetail(dumbAndDumber)); 