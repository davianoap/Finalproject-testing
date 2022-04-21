import {
  Box,
  Button,
  Center,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Heading,
} from "@chakra-ui/react";
import { searchInterface } from "global/interfaces";

const Search = ({ setSearchSong, getSong }: searchInterface) => {
  return (
    <>
    <Center mb="10">
      <Box>
      <Heading>Welcome to Create Playlist</Heading>
        <Text> Search song first and then fill form below track</Text>
      </Box>
    </Center>
      <Center>
        <Box w="md">
          <InputGroup mb="3">
            <Input
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchSong(e.target.value)}
            />
            <InputRightElement width="4.5rem" pr="2">
              <Button
                size="sm"
                type="button"
                onClick={getSong}
                colorScheme="green"
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Center>
    </>
  );
};

export default Search;
