import { Box, Button, Container, FormControl, FormLabel, Input, NumberInput, NumberInputField, Textarea, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock, FaSuitcase, FaUsers, FaPlane, FaRegPaperPlane } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      date: formData.get("date"),
      time: formData.get("time"),
      flightNumber: formData.get("flightNumber"),
      passengers: formData.get("passengers"),
      bags: formData.get("bags"),
      notes: formData.get("notes"),
    };

    // Simulate sending email
    console.log("Sending email with data:", data);
    toast({
      title: "Booking Request Sent",
      description: "We've received your booking request and will get back to you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form
    event.target.reset();
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Blackpool Cabs LTD Booking
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="date">Pickup Date</FormLabel>
            <Input id="date" type="date" name="date" leftIcon={<FaCalendarAlt />} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="time">Pickup Time</FormLabel>
            <Input id="time" type="time" name="time" leftIcon={<FaClock />} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="flightNumber">Flight Number</FormLabel>
            <Input id="flightNumber" name="flightNumber" placeholder="e.g., BA123" leftIcon={<FaPlane />} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="passengers">Number of Passengers</FormLabel>
            <NumberInput min={1} max={10}>
              <NumberInputField id="passengers" name="passengers" />
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="bags">Number of Bags</FormLabel>
            <NumberInput min={0} max={20}>
              <NumberInputField id="bags" name="bags" />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="notes">Additional Notes</FormLabel>
            <Textarea id="notes" name="notes" placeholder="Enter any special requests or notes here" />
          </FormControl>
          <Button type="submit" leftIcon={<FaRegPaperPlane />} colorScheme="blue" size="lg">
            Submit Booking
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Index;
