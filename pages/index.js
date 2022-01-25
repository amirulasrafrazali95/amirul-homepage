import {
  Container,
  Box,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  ListItem,
  Link,
  List,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import NextLink from "next/link";

const Home = () => {
  return (
    <Container maxW="container.lg">
      <Box borderRadius="lg" p={3} bg="whiteAlpha.200" align="center" mb={6}>
        <p>Welcome!</p> <p>I'm Amirul and this is my online portfolio </p>
      </Box>
      <Box dispaly={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mohamad Amirul Asraf
          </Heading>
          <p>Software Engineer ( Java / Javascript )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
          pt={5}
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profileImage.jfif"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Career Summary
        </Heading>
        <Paragraph>
          Experienced in JAVA development professionally with 4+ years of
          experience in fast-paced projects and taking part in all aspects of
          the software development lifecycle, which include, technical design,
          implementation documentation, requirement gathering, development and
          deployment. I aslo code in Javascript in my free time and also as
          hobby.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work">
            <Button
              size="md"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
            >
              Work Experience
            </Button>
          </NextLink>
        </Box>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2012</BioYear>
          Enrolled and graduated at MRSM PDRM Kulim with 7A in Sijil Pelajaran
          Malaysia
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Took Foundation in Engineering at UiTM Puncak Alam
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Bachelor of Computer Science with CGPA 3.56 at
          Univeristi Kebangsaan Malaysia
        </BioSection>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Skill
        </Heading>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Language / Technology</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Java</Td>
              <Td>Spring Boot, Hibernate, Vaadin, Java Server Faces</Td>
            </Tr>
            <Tr>
              <Td>Javascript</Td>
              <Td>NodeJs, React, NextJs, Chakra UI</Td>
            </Tr>
            <Tr>
              <Td>Operating System</Td>
              <Td>Linux, Windows</Td>
            </Tr>
            <Tr>
              <Td>Tools</Td>
              <Td>Maven</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box>
        <Heading as="h3" variant="section-title">
          Link
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/mohamad-amirul-65b914199/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Linked
              </Button>
            </Link>
            <Link href="https://github.com/amirulasrafrazali95" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Github
              </Button>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Home;
