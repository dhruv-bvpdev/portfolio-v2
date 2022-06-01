import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Medium Clone">
      <Container>
        <Title>
          Medium Clone <Badge>2022</Badge>
        </Title>
        <P>
          Fully responsive clone of famous blog website &apos;Medium&apos; built
          using Next.js, TailwindCSS, TypeScript and Sanity. It fetches the data
          from Sanity CMS using GROQ Queries.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://medium-clone-roan-chi.vercel.app/">
              https://medium-clone-roan-chi.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome, Firefox, Edge, Opera, DuckDuckGo</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, TypeScript, TailwindCSS, Sanity CMS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/medium_home.png" alt="Medium" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
