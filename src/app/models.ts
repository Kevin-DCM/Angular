export interface Game {
  id : string,
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms:Array<ParentsPlatforms>;
  publishers: Array<Publishers>;
  description:string;
  ratings:Array<Rating>;
  screenshots:Array<Screenshots>;
  trailers:Array<Trailer>;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name:string;
}

interface ParentsPlatforms {
  platform: {
    name: string;
  };
}

interface Publishers {
  name:string;
}

interface Rating {
  id:number;
  count:number;
  title:string;
}

interface Screenshots {
    image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
