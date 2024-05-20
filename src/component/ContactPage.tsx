import { Button, Flex, Heading, Icon, Input, Text, Textarea } from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaInstagramSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";


const ContactPage = () => {
  return (
    <>
      <Flex
        bgColor="white"
        h={"600px"}
        w={"100%"}
        px={"100px"}
        pt={"150px"}
        flexDir={"row"}
        gap={"50px"}
      >
        <Flex flexDir={"column"} gap={"30px"}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Heading as={"h2"} fontFamily={"Lato"}>
              Contact Us
            </Heading>
            <Text maxW={"800px"} fontFamily={"Lato"} fontSize={"18px"} mt={'10px'}>
              Not sure what you need? Our team at NLE.studios are more than
              happy to listen to you and suggest solutions and ideas you have
              not considered yet.
            </Text>

            <Flex flexDirection="column" mt={"30px"}>
              <Flex alignItems="center" mb="2">
                <Icon as={FaPhone} mr="4" fontSize={"24px"} />
                <Text fontSize={"20px"} fontFamily={"Lato"}>
                  +234 90 3259 4471
                </Text>
              </Flex>
              <Flex alignItems="center" mb="2">
                <Icon as={FaEnvelope} mr="4" fontSize={"24px"} />
                <Text fontSize={"20px"} fontFamily={"Lato"}>
                  tomisinfamilusi@NLE.com
                </Text>
              </Flex>
              <Flex alignItems="center" mb="4">
                <Icon as={FaInstagramSquare} mr="2" fontSize={"24px"} />
                <Text fontSize={"20px"} fontFamily={"Lato"}>
                  NLE.studios
                </Text>
              </Flex>
              <Flex alignItems="center">
                <Icon as={FaGlobe} mr="4" fontSize={"24px"} />
                <Text fontSize={"20px"} fontFamily={"Lato"}>
                  www.NLEstudios.com
                </Text>
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
        <Flex flexDir={"column"} gap={"50px"} w={"100%"}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Flex pb={'20px'}>
              {" "}
              <Heading fontFamily={"Lato"} fontSize={"30px"}>
                Let's get In Touch
              </Heading>
            </Flex>
            <Flex flexDir={"column"} w={"100%"}>
              <Text fontFamily={"Lato"} fontSize={"18px"}>
                First Name:
              </Text>
              <Input
                placeholder="e.g John Doe"
                variant="filled"
                size="md"
                // h={"40px"}
                borderRadius={"8px"}
                borderColor={"#DCDCDC"}
                focusBorderColor={"#D1D0CE"}
              />
              <Text fontFamily={"Lato"} fontSize={"18px"} pt={"10px"}>
                Email:
              </Text>
              <Input
                placeholder="e.g johndoe@gmail.com"
                variant="filled"
                size="md"
                h={"40px"}
                borderRadius={"8px"}
                borderColor={"#DCDCDC"}
                focusBorderColor={"#D1D0CE"}
              />
              <Text fontFamily={"Lato"} fontSize={"18px"} pt={"10px"}>
                Message:
              </Text>
              <Textarea
                placeholder="Type your message here..."
                variant="filled"
                borderRadius={"8px"}
                borderColor={"#DCDCDC"}
                focusBorderColor={"#D1D0CE"}
              />
            </Flex>
            <Flex>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  bg={"rgba(247, 148, 29, 0.9)"}
                  py={{ lg: "22px", base: "18px" }}
                  px={{ lg: "30px", base: "22px" }}
                  fontFamily={"Lato"}
                  fontSize={{ lg: "20px", base: "15px" }}
                  mt={'20px'}
                  _hover={{
                    color: "rgba(247, 148, 29, 0.8 )",
                    bg: "white",
                    borderColor: "1px soild rgba(247, 148, 29, 0.8)",
                  }}
                >
                  Send Message
                </Button>
              </motion.button>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
}

export default ContactPage
