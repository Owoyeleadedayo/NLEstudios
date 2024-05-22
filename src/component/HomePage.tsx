import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image1 from "../assets/images/Welcome page.png";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <Flex
        bgImage={Image1}
        bgSize={"cover"}
        w={"100%"}
        bgRepeat={"no-repeat"}
        h={{ base: "600px", md: "600px" }} // Adjusted height for responsiveness
      >
        <Flex
          bgColor="rgba(247, 148, 29, 0.5)"
          h={"100%"}
          w={"100%"}
          px={{ base: "20px", md: "50px", lg: "100px" }} // Responsive padding
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Flex
              flexDirection={"column"}
              gap={{ base: "10px", md: "20px" }} // Responsive gap
              alignItems={{ base: "center", md: "flex-start" }} // Center align on smaller screens
              pt={{ md: "0px", lg: "0px", base: "60px" }}
            >
              <Heading
                as={"h1"}
                mt={{ base: "50px", md: "150px", lg: "200px" }} // Responsive margin top
                color={"white"}
                fontSize={{ base: "20px", md: "40px", lg: "50px" }} // Responsive font size
                fontFamily={"Lato"}
                fontWeight={600}
                lineHeight={{ base: "30px", md: "50px", lg: "60px" }} // Responsive line height
                textAlign={{ base: "center", md: "left" }} // Center text on smaller screens
              >
                Through{" "}
                <Text as={"span"} color={"purple"}>
                  Smart Funding
                </Text>
                ,
                <br /> Transformational
                <br /> Results
              </Heading>
              <Text
                color={"white"}
                fontSize={{ base: "16px", md: "20px", lg: "24px" }} // Responsive font size
                textTransform={"capitalize"}
                fontFamily={"Lato"}
                fontWeight={600}
                textAlign={{ base: "center", md: "left" }} // Center text on smaller screens
              >
                If you can think it, we can create it
              </Text>
              <Button
                width={{ base: "120px", md: "140px" }} // Responsive button width
                mt={"20px"}
                bgColor="rgba(247, 148, 29, 0.5)"
                fontFamily={"Lato"}
                fontWeight={600}
                color={"white"}
                border={"1px solid white"}
                _hover={{
                  color: "rgba(247, 148, 29, 0.5)",
                  bg: "white",
                  borderColor: "1px solid rgba(247, 148, 29, 0.9)",
                }}
              >
                Find out more
              </Button>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
