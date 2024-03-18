"use client";
import {
  Heading,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import AnimatedText from "../Animation/Text-Animation";
import Navbar from "../Navbar";
interface headerProps {
  heading: string;
}
const Header = ({ heading }: headerProps) => {
  const pathname = usePathname();
  const handleBack = () => {
    history.back();
  };
  return (
    <>
      <Navbar />
      <Box
        backgroundImage="url('/assets/header.jpg')"
        backgroundSize="cover"
        backgroundPosition="top left"
        bgRepeat="no-repeat"
        pt="6rem"
        pb="3rem"
        mb={"3rem"}
        px={"0.75rem"}
        mx={"auto"}
        width={"100%"}
      >
        <Container
          className="header_container"
          width={"100%"}
          mx={"auto"}
        >
          <AnimatedText>
            <Heading
              as="h1"
              mt={0}
              mb={"0.5rem"}
              fontWeight="700"
              line-height={1.1}
              color="#011A41"
            >
              {heading}
            </Heading>
          </AnimatedText>
          <AnimatedText>
            <Breadcrumb mb={"1.5rem"}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{ fontWeight: "500", color: "#01ACF1" }}
                  _hover={{ textDecoration: "none", color: "#DFE4FD" }}
                  href="/"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathname === "/contact" || (
                <BreadcrumbItem>
                  <BreadcrumbLink
                    style={{ fontWeight: "500" }}
                    _hover={{ textDecoration: "none" }}
                    onClick={handleBack}
                  >
                    Services
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
              <BreadcrumbItem>
                <BreadcrumbLink
                  style={{
                    fontWeight: "500",
                    color: "#6C757D",
                  }}
                  isCurrentPage
                  aria-current="page"
                >
                  {heading}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </AnimatedText>
        </Container>
      </Box>
    </>
  );
};
export default Header;