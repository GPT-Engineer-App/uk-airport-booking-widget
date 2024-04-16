import { Box, Button, Container, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack, Heading } from "@chakra-ui/react";

const Admin = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4} textAlign="center" style={{ color: "#2a69ac" }}>
        Admin Panel - Pricing Configuration
      </Heading>
      <VStack spacing={4} as="form" style={{ border: "2px solid #153e75", padding: "20px", borderRadius: "10px" }}>
        <FormControl isRequired>
          <FormLabel htmlFor="weekdayPricePerPassenger">Weekday Price per Passenger</FormLabel>
          <NumberInput min={0}>
            <NumberInputField id="weekdayPricePerPassenger" name="weekdayPricePerPassenger" />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="weekendPricePerPassenger">Weekend Price per Passenger</FormLabel>
          <NumberInput min={0}>
            <NumberInputField id="weekendPricePerPassenger" name="weekendPricePerPassenger" />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="weekdayPricePerBag">Weekday Price per Bag</FormLabel>
          <NumberInput min={0}>
            <NumberInputField id="weekdayPricePerBag" name="weekdayPricePerBag" />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="weekendPricePerBag">Weekend Price per Bag</FormLabel>
          <NumberInput min={0}>
            <NumberInputField id="weekendPricePerBag" name="weekendPricePerBag" />
          </NumberInput>
        </FormControl>
        <Button colorScheme="blue" mt={4} size="lg">
          Update Prices
        </Button>
      </VStack>
    </Container>
  );
};

export default Admin;
