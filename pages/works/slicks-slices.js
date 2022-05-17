import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Slicks Slices">
      <Container>
        <Title>
          Slick&apos;s Slices <Badge>2022</Badge>
        </Title>
        <P>
          Local Pizza Joint Website built using Gatsby and Styled Components.
          The data is stored and fetched from Sanity (a headless node.js CMS
          built for structured content)
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://slicks-great-slices.netlify.app/">
              https://slicks-great-slices.netlify.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome, Firefox, Edge, Opera, DuckDuckGo</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Gatsby, Sanity CMS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/slicks_home.png" alt="Slicks Slices" />
        <WorkImage src="/images/works/slicks_order.png" alt="Slicks Slices" />
        <WorkImage
          src="/images/works/slicks_slicemasters.png"
          alt="Slicks Slices"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
