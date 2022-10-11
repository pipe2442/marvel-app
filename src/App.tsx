import Layout from "./components/Layout";
import { ChakraProvider, Heading, Center } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Center>
        <Heading mx="auto" my="25px" as="h1" size="4xl">
          Marvel Comics Database
        </Heading>
      </Center>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
