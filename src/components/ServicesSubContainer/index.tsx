/*
"use client"
import {
  Image,
  Heading,
  Text,
  Link,
  Center,
  Button,
  Card,
} from "@chakra-ui/react";
import { StyledBox1, StyledBox2, Wrapper } from "../Styled/ServicesSubStyled";
import { BiRightArrowAlt } from "react-icons/bi";

interface ServiceProps {
  title: string;
  startingFrom: string;
  description: string;
  knowMoreLink: any;
  imgSrc?: any;
  buyNowLink: any;
}


interface ServicesCardProps {
  cartcontents:ServiceProps[];
}

const ServicesSubContainer: React.FC<ServicesCardProps> = ({cartcontents}) => {
  return (
    <Card
      p={"24px"}
      border={"1px"}
      borderStyle={"solid"}
      borderColor={"#DFE4FD"}
      _hover={{
        bg: "#01ACF1",
        transition: "0.5s",
        color: " #fff",
        "h5":{color:"white"}
      }}
      as={Wrapper}
    >
     {cartcontents?.map((content)=>(
      <>
       <StyledBox1>
        <Image
          src={content.imgSrc}
          alt={"img"}
          height={content.title === "MSME REGISTRATION" ? "120px" : "124px"}
        />
        <Heading
          as={"h5"}
          pt="15px"
          lineHeight="1.9"
          mt="0"
          fontWeight={"600 !important"}
        >
          {content.title}
        </Heading>
      </StyledBox1>
      <StyledBox2>
        <Heading as="h5" lineHeight={1.5} mb={2} pt="15px">
          {content.title}</Heading>
        <Heading as="h5" mb={3} >Starting From : ₹ {content.startingFrom}
        </Heading>
        <Text mb={3}>{content.description}</Text>
        <Link
          mb={2}
          href={content.knowMoreLink}
          textDecoration="none"
          fontWeight={700}
          display={"flex"}
          alignItems={"center"}
          _hover={{ textDecoration: "none" }}
        >
          Know More <BiRightArrowAlt size={24}/>
        </Link>
        {content.buyNowLink === "#" || (
          <Center>
            <Button
              size="1rem"
              margin="0.5rem"
              fontWeight="500"
              color={"#fff"}
              borderColor="#2D50D6"
              backgroundColor="#2D50D6"
              py={"0.5rem"}
              px={"1rem"}
            >
              <Link
                href={content.buyNowLink}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                Buy Now
              </Link>
            </Button>
          </Center>
        )}
      </StyledBox2>
      </>
     ))}
    </Card>
  );
};
export default ServicesSubContainer;
*/

"use client";
import {
  Image,
  Heading,
  Text,
  Link,
  Center,
  Card,
  Box,
} from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./services.css";
interface ServiceProps {
  title: string;
  startingFrom: string;
  description: string;
  knowMoreLink: any;
  imgSrc?: any;
  buyNowLink: any;
}
interface ServicesCardProps {
  cartcontents: ServiceProps[];
}
const ServicesSubContainer: React.FC<ServicesCardProps> = ({
  cartcontents,
}) => {
  return (
    <Card
      p={"24px"}
      border={"1px"}
      borderStyle={"solid"}
      borderColor={"#DFE4FD"}
      _hover={{
        bg: "#01ACF1",
        transition: "0.5s",
        color: " #fff",
        h5: { color: "white" },
      }}
      className="Wrapper"
    >
      {cartcontents?.map((content,index) => (
        <>
          <Box className="StyledBox1" key={index}>
            <Image
              src={content.imgSrc}
              alt={"img"}
              height={content.title === "MSME REGISTRATION" ? "120px" : "124px"}
            />
            <Heading
              as={"h5"}
              pt="15px"
              lineHeight="1.9"
              mt="0"
              fontWeight={"600 !important"}
            >
              {content.title}
            </Heading>
          </Box>
          <Box className="StyledBox2" key={index} >
            <Heading as="h5" lineHeight={1.5} mb={2} pt="15px">
              {content.title}
            </Heading>
            <Heading as="h5" mb={3}>
              Starting From : ₹ {content.startingFrom}
            </Heading>
            <Text mb={3}>{content.description}</Text>
            <Link
              mb={2}
              href={content.knowMoreLink}
              textDecoration="none"
              fontWeight={700}
              display={"flex"}
              alignItems={"center"}
              _hover={{ textDecoration: "none" }}
            >
              Know More <BiRightArrowAlt size={24} />
            </Link>
            {content.buyNowLink === "#" || (
              <Center>
                <Link
                  size="1rem"
                  margin="0.5rem"
                  fontWeight="500"
                  color={"#fff"}
                  borderColor="#2D50D6"
                  backgroundColor="#2D50D6"
                  rounded={"8px"}
                  py={"0.5rem"}
                  px={"1rem"}
                  href={content.buyNowLink}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" ,bg:""}}
                >
                  Buy Now
                </Link>
              </Center>
            )}
          </Box>
        </>
      ))}
    </Card>
  );
};
export default ServicesSubContainer;