import { Result } from "../interfaces/FetchComicsResponse";

const MARVEL_API_URL =
  "http://gateway.marvel.com/v1/public/comics?limit=100&ts=1000&apikey=098d87e933e9643eb34564dbb6cc6d55&hash=2f976d2e6c33d1137a4928cb109a6e01";

export const fetchComics = async (): Promise<Result[]> => {
  const response = await fetch(MARVEL_API_URL);
  const comicsList = await response.json();

  const data = comicsList.data.results.filter((comic: Result) => {
    return comic.thumbnail.path.split("/")[10] !== "image_not_available";
  });

  return data;
};
