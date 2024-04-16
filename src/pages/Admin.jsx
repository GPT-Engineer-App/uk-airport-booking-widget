import { Box, Button, Container, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack, Heading } from "@chakra-ui/react";

const Admin = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Admin Panel - Blackpool Cabs LTD
      </Heading>
      <VStack spacing={4} as="form">
        <FormControl isRequired>
          <FormLabel htmlFor="pricePerPassenger">Price per Passenger</FormLabel>
          <NumberInput min={0}>
            <NumberInputField id="pricePerPassenger" name="pricePerPassenger" />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="pricePerBag">Price per Bag</FormLabel>
          <NumberInput min={0}>
            <NumberInputField id="pricePerBag" name="pricePerBag" />
          </NumberInput>
        </FormControl>
        <Button colorScheme="blue" mt={4}>
          Save Settings
        </Button>
      </VStack>
    </Container>
  );
};

export default Admin;
