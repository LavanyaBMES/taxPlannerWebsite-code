"use client";
import { Box, Container, Link, Text, } from "@chakra-ui/react";
import styled from "styled-components";

const StyledText = styled(Text)`
  &:hover {
    color: #01acf1;
  }
`;

const Footer: React.FC = () => {
  return (
    <Box bg={"#000B1C"} color={"#DFE4FD"} py={4}>
      <Container>
        <Box
          textAlign={{ base: "center", md: "start" }}
          mb={{ base: 3, md: 0 }}
        >
          <center>
            Copyright © Tax Planner <br />
            Powered by
            <Link
              textDecoration="underline"
              href="https://www.bmesolutions.in/"
            >
              <StyledText as="b"> BM e-Solutions.</StyledText>
            </Link>
          </center>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;