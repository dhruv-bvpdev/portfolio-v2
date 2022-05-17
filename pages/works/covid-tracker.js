import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Covid Tracker">
      <Container>
        <Title>
          Covid Tracker <Badge>2022</Badge>
        </Title>
        <P>
          A simple and east to understand Covid-19 Tracker built using React.js,
          CSS. The data is fetched from disease.sh(lmao.covid.ninja) API. The
          site has a world map and line graph to better understand data.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://covid-nineteen-dashboard.netlify.app/">
              https://covid-nineteen-dashboard.netlify.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Chrome, Firefox, Edge, Opera, DuckDuckGo</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, disease.sh(lmao.covid.ninja) API, MUI Library</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/cov_home.png" alt="Electronica" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
