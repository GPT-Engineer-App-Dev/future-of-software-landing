import { Box, Button, Container, Heading, Text, Image, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" my={10}>
        <Heading as="h1" size="2xl" mb={6}>
          The Future of Software
        </Heading>
        <Text fontSize="xl" mb={4}>
          Join us for an exclusive event showcasing the latest innovations in large language models and software development.
        </Text>
        <Image src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZXxlbnwwfHx8fDE3MTQ0OTI5NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Conference" borderRadius="lg" my={4} />
        <Box my={8}>
          <Heading as="h3" size="lg" mb={2}>
            <FaCalendarAlt /> Date & Time
          </Heading>
          <Text fontSize="md">October 15, 2023, at 10:00 AM - 5:00 PM</Text>
          <Heading as="h3" size="lg" mb={2} mt={4}>
            <FaMapMarkerAlt /> Venue
          </Heading>
          <Text fontSize="md">Tech Park, Silicon Valley, CA</Text>
          <Heading as="h3" size="lg" mb={2} mt={4}>
            <FaRegClock /> Duration
          </Heading>
          <Text fontSize="md">7 hours</Text>
        </Box>
        <Link href="https://typeform.com" isExternal>
          <Button colorScheme="blue" rightIcon={<FaRegClock />}>
            Sign Up Now
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
