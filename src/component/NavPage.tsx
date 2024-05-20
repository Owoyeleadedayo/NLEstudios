import { Flex, Image, Link } from "@chakra-ui/react";
import Image1 from "../assets/images/Logo1.png";
import Image2 from "../assets/images/Logo2-24.png";
import { motion } from "framer-motion";


const NavPage = () => {
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
          display={"flex"}
          bgColor={"rgba(247, 148, 29, 0.8)"}
          px={"80px"}
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
          <Flex justifyContent="center" alignItems="center">
            <Link
              href="/"
              fontSize="xl"
              fontWeight="semibold"
              color={"white"}
              transition="color 0.4s ease-in"
              _hover={{ color: "white" }}
              mr={12}
            >
              Home
            </Link>
            <Link
              href="about"
              fontSize="xl"
              fontWeight="semibold"
              color={"white"}
              transition="color 0.4s ease-in"
              _hover={{ color: "white" }}
              mr={12}
            >
              About
            </Link>
            <Link
              href="subfirms"
              fontSize="xl"
              fontWeight="semibold"
              color={"white"}
              transition="color 0.4s ease-in"
              _hover={{ color: "white" }}
              mr={12}
            >
              Sub-Firms
            </Link>
            <Link
              href="contact"
              fontSize="xl"
              fontWeight="semibold"
              color={"white"}
              border={"1px solid white"}
              px={"24px"}
              py={"10px"}
              transition="color 0.4s ease-in"
              _hover={{ color: "white" }}
              mr={12}
            >
              Contact
            </Link>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}

export default NavPage
