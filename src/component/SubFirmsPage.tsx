import { Box, Flex, Image, Text} from "@chakra-ui/react"
import Firm1 from "../assets/images/office.jpg";
import Firm2 from "../assets/images/church.jpg";
import Firm3 from "../assets/images/gagga.jpg";
import Firm4 from "../assets/images/jiji.jpg";
import Firm5 from "../assets/images/Design.jpg";
import Firm6 from "../assets/images/THE OAK HOUSE - DOUBLE HEIGHT VILLA.jpg";
import { motion } from "framer-motion";

const SubFirmsPage = () => {
  return (
    <>
      <motion.div>
        <Flex
          flexDirection={{ lg: "row", md: "row", base: "column" }}
          bgColor={"white"}
          pt={"90px"}
          w={"100%"}
          h={"600px"}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 0.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Box position="relative" h={"100%"} w={"100%"}>
              <Image src={Firm1} alt="Firm 1" width={"100%"} height={"100%"} />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to top, rgba(247, 148, 29, 0.5), rgba(247, 148, 29, 0))"
                zIndex="1"
              >
                <Text
                  position="absolute"
                  bottom="20px"
                  left="30%"
                  transform="translateX(-20%)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  zIndex="2"
                  fontFamily={"Lato"}
                >
                  Remodelled office space for Purezza Feminine Foundation
                </Text>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 1,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Box position="relative" h={"100%"} w={"100%"}>
              <Image src={Firm2} alt="Firm 1" width={"100%"} height={"100%"} />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to top, rgba(247, 148, 29, 0.5), rgba(247, 148, 29, 0))"
                zIndex="1"
              >
                <Text
                  position="absolute"
                  bottom="50px"
                  left="30%"
                  transform="translateX(-20%)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  zIndex="2"
                >
                  Church Renovation
                </Text>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 1.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Box position="relative" h={"100%"} w={"100%"}>
              <Image src={Firm3} alt="Firm 1" width={"100%"} height={"100%"} />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to top, rgba(247, 148, 29, 0.5), rgba(247, 148, 29, 0))"
                zIndex="1"
              >
                <Text
                  position="absolute"
                  bottom="20px"
                  left="25%"
                  transform="translateX(-25%)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  zIndex="2"
                >
                  Bedroom visualization for F11 Project, Banana
                </Text>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 0.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Box position="relative" h={"100%"} w={"100%"}>
              <Image src={Firm4} alt="Firm 1" width={"100%"} height={"100%"} />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to top, rgba(247, 148, 29, 0.5), rgba(247, 148, 29, 0))"
                zIndex="1"
              >
                <Text
                  position="absolute"
                  bottom="30px"
                  left="20%"
                  transform="translateX(-20%)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  zIndex="2"
                >
                  Interior Design for 6 Star Hotel in Dubai
                </Text>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 1,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Box position="relative" h={"100%"} w={"100%"}>
              <Image src={Firm5} alt="Firm 1" width={"100%"} height={"100%"} />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to top, rgba(247, 148, 29, 0.5), rgba(247, 148, 29, 0))"
                zIndex="1"
              >
                <Text
                  position="absolute"
                  bottom="20px"
                  left="50%"
                  transform="translateX(-50%)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  zIndex="2"
                >
                  Proposed Interior Render for Dan&Dan residence
                </Text>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
              duration: 1.5,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Box position="relative" h={"100%"} w={"100%"}>
              <Image src={Firm6} alt="Firm 1" width={"100%"} height={"100%"} />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to top, rgba(247, 148, 29, 0.5), rgba(247, 148, 29, 0))"
                zIndex="1"
              >
                <Text
                  position="absolute"
                  bottom="20px"
                  left="30%"
                  transform="translateX(-20%)"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  zIndex="2"
                >
                  The Oak-house double height villa
                </Text>
              </Box>
            </Box>
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
}

export default SubFirmsPage
