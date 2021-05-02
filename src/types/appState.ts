import { MovieDetails } from './MovieDetails';
import { User } from './User';

export interface ApplicationState {
    user: User,
    movieDetails: MovieDetails,
}
