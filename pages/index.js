import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsSpotify } from 'react-icons/bs'
import useSWR from 'swr'

const Page = () => {
  const fetcher = url => fetch(url).then(r => r.json())
  const { data } = useSWR('/api/spotify', fetcher)
  const title = data?.isPlaying ? data.title : ''
  const truncatedTitle = title.substr(0, 15) + '...'

  return (
    <Layout>
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
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️ I am fluent in C, Java, C# and Javascript. My
            field of interest is building new web products. I apply my passion
            for developing products with Node.js and Modern Javascript Libraries
            and Frameworks like React.js and Next.js.
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
            Completed Bachelor&apos;s Program in Computer Application at Bharati
            Vidyapeeth Institute of Management and Research
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Still Figuring out what&apos;s next.....
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Travelling, Hip-Hop Music, Binge Watching Netflix
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/dhruv-bvpdev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @dhruv-bvpdev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/dhruv_gursahani" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @dhruv_gursahani
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/dhruv_G" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaTelegramPlane />}
                >
                  @dhruv_G
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={
                  data?.isPlaying
                    ? data.songUrl
                    : 'https://open.spotify.com/playlist/4bbRmyLN9Zbr4WllN5ucy8?si=878c062b4a074841'
                }
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<BsSpotify />}
                >
                  {data?.isPlaying
                    ? `Now Playing - ${truncatedTitle}`
                    : 'Spotify - Not Listening'}
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
