import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import G1 from '../assets/images/gallery.jpg';
import G2 from "../assets/images/gallery2.jpg";
import G3 from "../assets/images/gallery3.jpg";
import G4 from "../assets/images/gallery4.jpg";
import G5 from "../assets/images/gallery5.jpg";
import G6 from "../assets/images/gallery6.jpg";

const Gallery = () => {
  return (
    <>
      <Flex
        bg={"white"}
        pt={{ base: "90px", md: "100px" }}
        flexDirection={"column"}
        gap={"20px"}
        px={{ base: "20px", md: "20px" }}
        pb={'20px'}
      >
        <Flex justifyContent={"flex-end"} alignItems={"end"}>
          <Heading
            as={"h2"}
            fontFamily={"Lato"}
            textAlign={"end"}
            fontWeight={600}
          >
            Gallery
          </Heading>
        </Flex>
        <Flex>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 2fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {[G1, G2, G3, G4, G5, G6].map((src, index) => (
              <Flex key={index} position={"relative"} overflow="hidden">
                <Image
                  key={index}
                  src={src}
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                />
                <Box
                  position={"absolute"}
                  top={"0px"}
                  left={"0px"}
                  width={"100%"}
                  height={"100%"}
                  bgGradient={
                    "linear(to-b, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))"
                  }
                  zIndex={1}
                />
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export default Gallery;
