export type AllDataPokemons = 
{
  count: number;
  next: string;
  previous: string;
  results: {name:string; url: string}[]
}


export type Pokemon = {
  id:number;
  name:string;
  sprites: {
    back_default: string,
    back_female: null,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
  }
}