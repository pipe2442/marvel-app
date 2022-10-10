import Layout from "./components/Layout";
import { Heading, Center } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Heading mx="auto" my="25px" as="h1" size="4xl">
          Marvel Comics Database
        </Heading>
      </Center>
      <Layout />
    </>
  );
}

export default App;
