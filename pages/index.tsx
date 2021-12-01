import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImpactSection from "../components/ImpactSection";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SiteMetaData from "../components/SiteMetaData";
import Testimonials from "../components/Testimonials";

export default function Home(): JSX.Element {
  return (
    <Box>
      <SiteMetaData
        metaTitle="Home | Prognosis Technologies Limited"
        metaContent="Home Prognosis Technologies Limited"
        metaContent2="What we do | Pronosis Technologies Limited"
      />
      <Navbar />
      <Box bgColor="#1A202C">
        <Landing />
      </Box>
      <Box py="4em" textAlign="center">
        <SectionOne />
      </Box>
      <Box py={{ base: "3rem", md: "4em" }} bgColor="#1A202C">
        <SectionTwo />
      </Box>
      <Box
        py={{ base: "3em", md: "8em" }}
        bg="url('images/sec-img.png')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        color="white"
      >
        <Container maxW="container.xl">
          <ScrollAnimation
            animateIn="animate__slideInUp"
            duration={0.3}
            animateOnce={true}
          >
            <Heading
              w={{ base: "320px", md: "50%" }}
              mb={5}
              fontSize={{ base: "25px", md: "3xl" }}
            >
              Robust technology solutions across market verticals
            </Heading>
          </ScrollAnimation>
          <Text
            w={{ base: "100%", md: "40%" }}
            lineHeight="1.7"
            fontSize={{ base: "sm", md: "15px" }}
          >
            Take control of your business finances, we have designed our
            accounting solution to provide business owners with a full spectrum
            of features guaranteed to help them manage all aspects of their
            business finance.
          </Text>
        </Container>
      </Box>
      <ImpactSection />
      <Box bg="#EEF2F6" py={6}>
        <Testimonials />
      </Box>
      <Box py="4em">
        <Client />
      </Box>
      <Box py="4em" bg="#8ef985">
        <Contact />
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
}
