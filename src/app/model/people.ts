import { Movie } from './movie';
import { Serializable, Serialize, SerializeProperty } from 'ts-serializer';

@Serialize({})
export class People extends Serializable {

  constructor() {
    super();
    this.movies = [];
    this.vehicles = [];
  }

  @SerializeProperty()
  name: string;

  @SerializeProperty()
  height: string;

  @SerializeProperty()
  mass: string;

  @SerializeProperty()
  planet: string;

  @SerializeProperty()
  specie: string;

  @SerializeProperty()
  gender: string;

  @SerializeProperty()
  image: string;

  @SerializeProperty({map: 'skin_color'})
  hairColor: string;

  @SerializeProperty({map: 'skin_color'})
  skinColor: string;

  @SerializeProperty({map: 'eye_color'})
  eyeColor: string;

  @SerializeProperty({map: 'birth_year'})
  birthYear: string;

  movies: Array<Movie>;

  vehicles: Array<string>;


  public addVehicles(vehicles: string) {
    this.vehicles.push(vehicles);
  }

  public addMovie(movie: Movie) {
    this.movies.push(movie);
  }

}
