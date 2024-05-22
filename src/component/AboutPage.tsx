import {
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
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
        viewport={{ once: true }}
      >
        <Box bgColor={"white"} pt={"90px"} w={"100%"} px={"30px"}>
          <Grid gap={"20px"} templateColumns={{ base: "1fr", md: "1fr" }}>
            <GridItem>
              <Heading
                as={"h2"}
                textAlign={"right"}
                px={"30px"}
                fontSize={{ base: "30px", md: "40px" }}
                fontFamily={"Lato"}
                fontWeight={700}
              >
                About Us
              </Heading>
            </GridItem>
            <GridItem>
              <Text
                px={{ base: "10px", md: "200px" }}
                fontSize={{ base: "18px", md: "22px" }}
                fontFamily={"Lato"}
                fontWeight={500}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis fugit reprehenderit harum illum distinctio nam non
                veritatis cumque hic, voluptas omnis nemo ipsam id dolorum quam
                vel recusandae maiores amet!
              </Text>
            </GridItem>
          </Grid>
          <Divider height="2px" my="3" bgColor="gray.800" border="0" />
          <Grid
            gap={"20px"}
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            px={{ base: "30px", md: "0px" }}
          >
            {[
              {
                bgImage: about1,
                logo: Logo1,
                title: "Interior Design",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ut quod ducimus reiciendis minus sunt laudantium numquam aliquam hic iste?",
              },
              {
                bgImage: about2,
                logo: Image2,
                title: "Clothing and Merch",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ut quod ducimus reiciendis minus sunt laudantium numquam aliquam hic iste?",
              },
              {
                bgImage: about3,
                logo: Image3,
                title: "Graphics Design and Videography",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ut quod ducimus reiciendis minus sunt laudantium numquam aliquam hic iste?",
              },
              {
                bgImage: about1,
                logo: Logo1,
                title: "Web Development",
                description:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ut quod ducimus reiciendis minus sunt laudantium numquam aliquam hic iste?",
              },
            ].map(({ bgImage, logo, title, description }, index) => (
              <GridItem
                key={index}
                bgImage={`url(${bgImage})`}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                h={"290px"}
                position="relative"
              >
                <Grid
                  templateRows="1fr auto"
                  h="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={logo} alt="Logo" width={"150px"} mx="auto" />
                  <Box
                    bgColor={"rgba(0, 0, 0, 0.5)"}
                    pt={"5px"}
                    px={"15px"}
                    py={"10px"}
                  >
                    <Text
                      as={"h3"}
                      color={"white"}
                      fontSize={"17px"}
                      fontWeight={600}
                      fontFamily={"Lato"}
                      textTransform={"uppercase"}
                    >
                      {title}
                    </Text>
                    <Text
                      color={"rgba(255, 255, 255, 0.5)"}
                      fontSize={"16px"}
                      fontFamily={"Lato"}
                      lineHeight={"20px"}
                      textAlign={"left"}
                    >
                      {description}
                    </Text>
                  </Box>
                </Grid>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default AboutPage;
