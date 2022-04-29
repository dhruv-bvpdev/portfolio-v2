import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Hyper Bros">
      <Container>
        <Title>
          Hyper Bros Trading Cards <Badge>2022</Badge>
        </Title>
        <P>
          Ever want to relive your childhood? Look no further because HyperBros
          is here. Built with Next.js, Sass, this website is your one stop shop
          for all your Mario Trading Cards. It pulls data from Wordpress CMS and
          uses Snipcart for cart and checkout handling.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://mariocards.netlify.app/">
              https://mariocards.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome, Firefox, Edge, Opera, DuckDuckGo</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Wordpress as CMS, Snipcart</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/hyper_home.png" alt="Hyper Bros" />
        <WorkImage src="/images/works/hyper_product.png" alt="Hyper Bros" />
      </Container>
    </Layout>
  )
}

export default Work
