import { Planets, Result } from "../types/dataTypes";

export const getPlanets = async (): Promise<Result[]> => {
  const result = await fetch("https://swapi-trybe.herokuapp.com/api/planets/");
  const resultJson: Planets = await result.json();
  return resultJson.results.map(({ residents, ...rest }) => rest);
};
