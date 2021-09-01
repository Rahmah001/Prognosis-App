import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MdFilterFrames } from "react-icons/md";
import { SiFSecure } from "react-icons/si";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";

const HumanResource = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>
          Human Resource Management Solution | Prognosis Technologies Limited
        </title>
        <meta
          name="description"
          content="Human Resource Management Solution | Prognosis Technologies Limited"
        />
        <meta
          property="og:title"
          content="Simplify your HR-related processes with Solutions built by our experts | Pronosis Technologies Limited"
        />
        <meta
          property="og:description"
          content="Simplify your HR-related processes with Solutions built by our experts | Pronosis Technologies Limited"
        />
        <meta property="og:image" content="/images/Prognosis.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingOverlays
        bgImage="/images/insurance.jpg"
        firstText="HUMAN RESOURCE MANAGEMENT SOLUTION"
        hasSecondText={false}
        titleText="Simplify your HR-related processes with Solutions built by our experts."
      />
      <Box bgColor="#1A202C">
        <Flex justify="space-between" direction="row" color="white">
          <Image
            display={{ base: "none", md: "block" }}
            src="/images/insurance.jpg"
            objectFit="cover"
          />
          <Flex align="center" justify="center">
            <Box
              px={{ base: "2em", md: "5em" }}
              py={{ base: "2em", md: "0px" }}
            >
              <Heading fontSize={{ base: "25px", md: "4xl" }}>
                Prognosis HR Management Solution.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                Our team of HR Solution experts simplifies.processes ranging
                from recruitment, onboarding, payroll, time and attendance,
                talent management, and many others with our HR Software
                Solution.
              </Text>
              <Stack
                align="center"
                spacing={{ base: "1.5em", md: "1em" }}
                direction={{ base: "column", md: "row" }}
                mt={"2em"}
              >
                <HStack>
                  <SiFSecure size="30px" color="#EEF2F6" />
                  <Text mt={"1em"} textStyle="defaultText">
                    Secured Database
                  </Text>
                </HStack>
                <HStack>
                  <MdFilterFrames size="30px" color="#EEF2F6" />
                  <Text mt={"1em"} textStyle="defaultText">
                    Modern Framework
                  </Text>
                </HStack>
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box py="4em" bg="#87F97D">
        <Contact />
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
};

export default HumanResource;