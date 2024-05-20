import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";
import Image2 from "../assets/images/Logo2-24.png";
import Image3 from "../assets/images/Logo3-24.png";
import Logo1 from "../assets/images/Logo4.png";

const AboutPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
      >
        <Flex
          flexDirection={"column"}
          gap={"20px"}
          px={"30px"}
          bgColor={"white"}
          pt={"90px"}
          w={"100%"}
          h={"600px"}
        >
          <Flex flexDirection={"column"}>
            <Heading
              as={"h2"}
              textAlign={"right"}
              px={"30px"}
              fontSize={"40px"}
              fontFamily={'Lato'}
              fontWeight={700}
            >
              About Us
            </Heading>
            <Text px={"200px"} fontSize={"22px"} fontFamily={'Lato'} fontWeight={500}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis fugit reprehenderit harum illum distinctio nam non
              veritatis cumque hic, voluptas omnis nemo ipsam id dolorum quam
              vel recusandae maiores amet!
            </Text>
          </Flex>
          <Divider height="2px" my="3" bgColor="gray.800" border="0" />
          <Flex gap={"20px"}>
            <Flex
              bgImage={about1}
              bgSize={"cover"}
              w={"350px"}
              bgRepeat={"no-repeat"}
              h={"290px"}
              flexDirection={"column"}
              gap={"0px"}
            >
              <Flex mx={"auto"} pt={"60px"}>
                <Image src={Logo1} alt="Logo" width={"150px"} height={"45px"} />
              </Flex>
              <Flex
                bgColor={"rgba(0, 0, 0, 0.5)"}
                pt={"5px"}
                flexDir={"column"}
                px={"15px"}
                py={"10px"}
                mt={"60px"}
                alignContent={"end"}
              >
                <Text
                  as={"h3"}
                  color={"white"}
                  fontSize={"17px"}
                  fontWeight={600}
                  fontFamily={"Lato"}
                  textTransform={"uppercase"}
                >
                  Interior Design
                </Text>
                <Text
                  color={"rgba(255, 255, 255, 0.5)"}
                  fontSize={"16px"}
                  fontFamily={"Lato"}
                  lineHeight={"20px"}
                  maxW={"280px"}
                  textAlign={"left"}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores ut quod ducimus reiciendis minus sunt laudantium
                  numquam aliquam hic iste?
                </Text>
              </Flex>
            </Flex>
            <Flex
              bgImage={about2}
              bgSize={"cover"}
              w={"350px"}
              bgRepeat={"no-repeat"}
              h={"290px"}
              flexDirection={"column"}
              gap={"0px"}
            >
              <Flex mx={"auto"} pt={"50px"}>
                <Image
                  src={Image2}
                  alt="Logo"
                  width={"150px"}
                  height={"50px"}
                />
              </Flex>
              <Flex
                bgColor={"rgba(0, 0, 0, 0.5)"}
                pt={"5px"}
                flexDir={"column"}
                px={"15px"}
                py={"10px"}
                mt={"65px"}
                alignContent={"end"}
              >
                <Text
                  as={"h3"}
                  color={"white"}
                  fontWeight={600}
                  fontFamily={"Lato"}
                  textTransform={"uppercase"}
                >
                  Clothing and Merch
                </Text>
                <Text
                  color={"rgba(255, 255, 255, 0.5)"}
                  fontSize={"16px"}
                  lineHeight={"20px"}
                  maxW={"280px"}
                  fontFamily={"Lato"}
                  textAlign={"left"}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores ut quod ducimus reiciendis minus sunt laudantium
                  numquam aliquam hic iste?
                </Text>
              </Flex>
            </Flex>
            <Flex
              bgImage={about3}
              bgSize={"cover"}
              w={"350px"}
              bgRepeat={"no-repeat"}
              h={"290px"}
              flexDirection={"column"}
              gap={"0px"}
            >
              <Flex mx={"auto"} pt={"30px"}>
                <Image
                  src={Image3}
                  alt="Logo"
                  width={"150px"}
                  height={"56px"}
                />
              </Flex>
              <Flex
                bgColor={"rgba(0, 0, 0, 0.5)"}
                pt={"5px"}
                flexDir={"column"}
                px={"15px"}
                mt={"83px"}
                py={"10px"}
                alignContent={"end"}
              >
                <Text
                  as={"h4"}
                  color={"white"}
                  fontSize={"14px"}
                  fontFamily={"Lato"}
                  fontWeight={600}
                >
                  GRAPHICS DESIGN AND VIDEOGRAPHY
                </Text>
                <Text
                  color={"rgba(255, 255, 255, 0.5)"}
                  fontSize={"16px"}
                  fontFamily={"Lato"}
                  lineHeight={"20px"}
                  maxW={"280px"}
                  textAlign={"left"}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores ut quod ducimus reiciendis minus sunt laudantium
                  numquam aliquam hic iste?
                </Text>
              </Flex>
            </Flex>
            <Flex
              bgImage={about1}
              bgSize={"cover"}
              w={"350px"}
              bgRepeat={"no-repeat"}
              h={"290px"}
              flexDirection={"column"}
              gap={"0px"}
            >
              <Flex mx={"auto"} pt={"55px"}>
                <Image src={Logo1} alt="Logo" width={"150px"} height={"50px"} />
              </Flex>
              <Flex
                bgColor={"rgba(0, 0, 0, 0.5)"}
                pt={"5px"}
                flexDir={"column"}
                px={"15px"}
                py={"10px"}
                mt={"60px"}
                alignContent={"end"}
              >
                <Text
                  as={"h3"}
                  color={"white"}
                  fontFamily={"Lato"}
                  fontWeight={600}
                  textTransform={"uppercase"}
                >
                  Web Development
                </Text>
                <Text
                  color={"rgba(255, 255, 255, 0.5)"}
                  fontSize={"16px"}
                  lineHeight={"20px"}
                  maxW={"280px"}
                  fontFamily={"Lato"}
                  textAlign={"left"}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores ut quod ducimus reiciendis minus sunt laudantium
                  numquam aliquam hic iste?
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};

export default AboutPage;
