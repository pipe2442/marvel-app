import { useState, useEffect } from "react";
import { fetchComics } from "../helpers/fetchComics";
import { Result } from "../interfaces/FetchComicsResponse";
import Card from "./Card";
import { Wrap } from "@chakra-ui/react";
import Pagination from "./Pagination";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = () => {
  const [comics, setComics] = useState<Result[]>([]);

  useEffect(() => {
    fetchComics().then((comics) => setComics(comics));
  }, []);
  console.log(comics);

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1); // No of Records to be displayed on each page
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = comics.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(comics.length / recordsPerPage);

  return (
    <Wrap spacing="30px" justify="center" align="center" my='55px'>
      {currentRecords.map((comic) => (
        <Card key={comic.id} comic={comic} />
      ))}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Wrap>
  );
};
export default Layout;
