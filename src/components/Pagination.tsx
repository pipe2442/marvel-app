import { Stack, Button } from "@chakra-ui/react";

type PaginationProps = {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  nPages,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1);

  return (
    <Stack spacing={4} direction="row" align="center">
      <Button
        colorScheme="red"
        size="xs"
        variant="ghost"
        onClick={() => {
          if (currentPage === 1) return;
          setCurrentPage(currentPage - 1);
        }}
      >
        Previous
      </Button>
      {pageNumbers.map((number) => (
        <Button
          colorScheme="red"
          size="xs"
          variant="ghost"
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Button>
      ))}
      <Button
        colorScheme="red"
        size="xs"
        variant="ghost"
        onClick={() => {
          if (currentPage === nPages) return;
          setCurrentPage(currentPage + 1);
        }}
      >
        Next
      </Button>
    </Stack>
  );
};

export default Pagination;
