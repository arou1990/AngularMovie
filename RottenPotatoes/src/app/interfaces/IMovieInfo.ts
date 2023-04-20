import { IRating } from "./IRating";

export interface IMovieInfo
{
    id: string;
    Title: string;
    Poster: string;
    Ratings: IRating[];
    Released: string;
    Runtime: string;
    Plot: string;

}