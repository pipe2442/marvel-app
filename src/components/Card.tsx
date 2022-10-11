import React from "react";
import { Result } from "../interfaces/FetchComicsResponse";
import { Image, Box } from "@chakra-ui/react";

type CardProps = {
  comic: Result;
};

const Card: React.FC<CardProps> = ({ comic }) => {
  const {
    thumbnail: { path: thumb },
    thumbnail: { extension: ext },
    title,
    id,
    issueNumber,
  } = comic;

  const imageSrc = `${thumb}.${ext}`;
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image boxSize="350px" src={imageSrc} alt={title} />

      <Box p="6">
        <Box
          w="360px"
          mx="auto"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
        <Box w="360px" mx="auto" mt="1" as="p" lineHeight="tight" noOfLines={1}>
          Id: {id}
        </Box>
        <Box w="360px" mx="auto" mt="1" as="p" lineHeight="tight" noOfLines={1}>
          IssueNumber: {issueNumber}
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
