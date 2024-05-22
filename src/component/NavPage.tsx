import {
  Flex,
  Image,
  Link,
  IconButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image1 from "../assets/images/Logo1.png";
import Image2 from "../assets/images/Logo2-24.png";
import { motion } from "framer-motion";

const NavPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/subfirms", label: "Sub-Firms" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
      >
        <Flex
          w={"100%"}
          h={"90px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgColor={"rgba(247, 148, 29, 0.8)"}
          px={{ base: "20px", md: "50px", lg: "80px" }} // Responsive padding
          position={"fixed"}
          zIndex={99}
        >
          <Flex gap={"20px"}>
            <Flex
              w={"80px"}
              h={"40px"}
              flexDirection={"row"}
              borderRight={"2px solid white"}
              pr={"20px"}
            >
              <Image src={Image1} alt="Logo" width={"100%"} height={"100%"} />
            </Flex>
            <Flex w={"120px"} h={"40px"} flexDirection={"row"}>
              <Image src={Image2} alt="Logo" width={"100%"} height={"100%"} />
            </Flex>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                fontSize="xl"
                fontWeight="semibold"
                color={"white"}
                transition="color 0.4s ease-in"
                _hover={{ color: "white" }}
                mr={12}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={isOpen ? <MdClose /> : <GiHamburgerMenu />}
            onClick={isOpen ? onClose : onOpen}
            aria-label={"Toggle Navigation"}
            color={"white"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
          />
        </Flex>

        {isOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            bgColor={"rgba(247, 148, 29, 0.8)"}
            w={"100%"}
            position={"fixed"}
            top={"90px"}
            left={0}
            zIndex={98}
          >
            <Flex flexDirection={"column"} alignItems={"center"} py={4}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  fontSize="xl"
                  fontWeight="semibold"
                  color={"white"}
                  transition="color 0.4s ease-in"
                  _hover={{ color: "white" }}
                  py={2}
                >
                  {item.label}
                </Link>
              ))}
            </Flex>
          </Box>
        )}
      </motion.div>
    </>
  );
};

export default NavPage;
