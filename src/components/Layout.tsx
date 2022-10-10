import { useState, useEffect } from "react";
import { fetchComics } from "../helpers/fetchComics";
import { Result } from "../interfaces/FetchComicsResponse";
import Card from "./Card";
import { Wrap } from "@chakra-ui/react";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = () => {
  const [comics, setComics] = useState<Result[]>([]);

  useEffect(() => {
    fetchComics().then((comics) => setComics(comics));
  }, []);
  console.log(comics);
  return (
    <Wrap spacing="30px" justify="center" align="center">
      {comics.map((comic) => (
        <Card key={comic.id} comic={comic} />
      ))}
    </Wrap>
  );
};
export default Layout;
