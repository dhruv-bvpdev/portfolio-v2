import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailElectronica from '../public/images/works/e_home.png'
import thumbnailSlick from '../public/images/works/slicks_order.png'
import thumbnailHyper from '../public/images/works/hyper_product.png'
import thumbnailAmazon from '../public/images/works/amazon_orders.png'
import thumbnailCovid from '../public/images/works/cov_home.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="electronica"
            title="Electronica"
            thumbnail={thumbnailElectronica}
          >
            E-Commerce Platform for a range of electronics (with an admin panel
            to add, delete and update products, users and orders)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="slicks-slices"
            title="Slick's Slices"
            thumbnail={thumbnailSlick}
          >
            Local Pizza Joint Website built using Gatsby and Styled Components.
            The data is stored and fetched from Sanity (a headless node.js CMS
            built for structured content)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="hyper-bros"
            title="Hyper Bro's"
            thumbnail={thumbnailHyper}
          >
            Ever want to relive your childhood? Look no further because
            HyperBros is here. Built with Next.js, Sass, this website is your
            one stop shop for all your Mario Trading Cards. It pulls data from
            Wordpress CMS and uses Snipcart for cart and checkout handling.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="amazon-clone"
            title="Amazon 2.0"
            thumbnail={thumbnailAmazon}
          >
            Clone of famous E-Commerce shopping Platform 'Amazon' built using
            Next.js, TailwindCSS. It fetches the product data from FakeStore API
            (a free to use demo product REST API). The checkout process is
            handled by Stripe through Next's serverless functions
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="covid-tracker"
            title="Covid Tracker"
            thumbnail={thumbnailCovid}
          >
            A simple and east to understand Covid-19 Tracker built using
            React.js, CSS. The data is fetched from disease.sh(lmao.covid.ninja)
            API. The site has a world map and line graph to better understand
            data.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
