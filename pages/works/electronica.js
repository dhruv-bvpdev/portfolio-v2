import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Electronica">
      <Container>
        <Title>
          Electronica <Badge>2021</Badge>
        </Title>
        <P>
          E-Commerce Platform for a range of electronics (with an admin panel to
          add, delete and update products, users and orders)
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://electronica-ecom.herokuapp.com/">
              https://electronica-ecom.herokuapp.com/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome, Firefox, Edge, Opera, DuckDuckGo</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>MongoDB, Express.js, React.js, Node.js</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/e_home.png" alt="Electronica" />
        <WorkImage src="/images/works/e_cart.png" alt="Electronica" />
        <WorkImage src="/images/works/e_order.png" alt="Electronica" />
        <WorkImage src="/images/works/e_details.png" alt="Electronica" />
        <WorkImage src="/images/works/e-profile.png" alt="Electronica" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
