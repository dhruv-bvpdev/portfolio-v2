import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Amazon 2.0">
      <Container>
        <Title>
          Amazon 2.0 <Badge>2022</Badge>
        </Title>
        <P>
          Clone of famous E-Commerce shopping Platform &apos;Amazon&apos; built
          using Next.js, TailwindCSS. It fetches the product data from FakeStore
          API (a free to use demo product REST API). The checkout process is
          handled by Stripe through Next&apos;s serverless functions
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://amazon-clone-dhruv-gursahani-1.vercel.app/">
              https://amazon-clone-dhruv-gursahani-1.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome, Firefox, Edge, Opera, DuckDuckGo</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Fake Store API, Stripe, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/amazon_home.png" alt="Electronica" />
        <WorkImage src="/images/works/amazon_cart.png" alt="Electronica" />
        <WorkImage src="/images/works/amazon_orders.png" alt="Electronica" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
