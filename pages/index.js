import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full stack developer based in New Delhi, India
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dhruv Gursahani
          </Heading>
          <p>Digital Craftzman (Developer / Tech Enthusiast)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ base: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/profile.png"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️ I am fluent in C, Java, C# and Javascript. My field of
          interest is building new web products. I apply my passion for
          developing products with Node.js and Modern Javascript Libraries and
          Frameworks like React.js and Next.js.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in New Delhi (नई दिल्ली), India
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated Senior Year at Bhatnagar International School
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed Bachelor's Program in Computer Application at Bharati
          Vidyapeeth Institute of Management and Research
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Still Figuring out what's next.....
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Travelling, Hip-Hop Music, Binge Watching Netflix</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
