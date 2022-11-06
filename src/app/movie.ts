export interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID : number;

}

export interface MovieResult {
    Search: Movie[]
}


//id: number;
//original_title: string;
//poster_path: string;
//release_date: string;
//title: string;
//vote_average: number;