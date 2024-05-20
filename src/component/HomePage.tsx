import { Button, Flex, Heading, Text } from "@chakra-ui/react"
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
        h={"600px"}
        // color={"#F7941D"}
      >
        <Flex
          bgColor="rgba(247, 148, 29, 0.5)"
          h={"600px"}
          w={"100%"}
          px={"100px"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Flex flexDirection={"column"} gap={"20px"}>
              <Heading
                as={"h1"}
                mt={"200px"}
                color={"white"}
                fontSize={"50px"}
                fontFamily={"Lato"}
                fontWeight={600}
                lineHeight={"60px"}
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
                fontSize={"24px"}
                textTransform={"capitalize"}
                fontFamily={"Lato"}
                fontWeight={600}
              >
                If you can think it, we can create it
              </Text>
              <Button
                width={"140px"}
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
}

export default HomePage
