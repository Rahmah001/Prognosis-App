import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { ChakraImage } from "../utils";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Our Services", path: "/services" },
    { text: "Our Solutions", path: "/solution" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <Box
      py={1}
      left={0}
      top={0}
      right={0}
      bg="white"
      zIndex={2}
      w="full"
      position="sticky"
      boxShadow="sm"
      transition="box-shadow 0.2s , background-color 0.2s ease-in-out"
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Link href="/">
            <a>
              <ChakraImage
                width="140px"
                height="66px"
                src="/images/Prognosis.png"
                alt="logo"
              />
            </a>
          </Link>
          <Box d={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="menu-icon"
              icon={<HiMenuAlt3 size="22px" />}
              onClick={onOpen}
              size="sm"
              _focus={{
                boxShadow: "0 0 0 3px #24db14",
              }}
            />
          </Box>
          <Flex
            align="center"
            display={{ base: "none", md: "flex" }}
            gridGap="0.9em"
            justify="space-between"
          >
            {links.map(({ path, text }, i) => (
              <Link href={path} key={i}>
                <Button
                  size="sm"
                  bgColor={router.pathname === path ? "#b9fbb4" : ""}
                  _hover={{
                    bgColor: "#b9fbb4",
                  }}
                  _active={{
                    bgColor: "#8ef985",
                  }}
                  _focus={{
                    boxShadow: "0 0 0 3px #24db14",
                  }}
                  variant="ghost"
                >
                  {text}
                </Button>
              </Link>
            ))}
          </Flex>
          <Drawer
            closeOnOverlayClick={false}
            isOpen={isOpen}
            size="xs"
            placement="left"
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                _focus={{
                  boxShadow: "0 0 0 3px #24db14",
                }}
                size="sm"
              />
              <DrawerHeader>
                <ChakraImage
                  width="120px"
                  height="55px"
                  src="/images/Prognosis.png"
                  alt="logo"
                />
              </DrawerHeader>
              <DrawerBody>
                <Stack>
                  {links.map(({ text, path }, i) => (
                    <Link href={path} key={i}>
                      <Button
                        size="sm"
                        justifyContent="flex-start"
                        bgColor={router.pathname === path ? "#b9fbb4" : ""}
                        _hover={{
                          bgColor: "#b9fbb4",
                        }}
                        _active={{
                          bgColor: "#8ef985",
                        }}
                        _focus={{
                          boxShadow: "0 0 0 3px #24db14",
                        }}
                        variant="ghost"
                      >
                        {text}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
