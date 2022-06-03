import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import { sanityClient, urlFor } from '../sanity'

const Works = ({ projects }) => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {projects.map(project => (
            <Section key={project._id} delay={project.delay}>
              <WorkGridItem
                id={project.path.slug.current}
                title={project.name}
                thumbnail={urlFor(project.thumbnail)?.url()}
              >
                {project.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works

export const getStaticProps = async () => {
  const query = `
  *[_type == "works-thumbnail"] {
    _id,
    name,
    description,
    thumbnail,
    path -> {
      slug {
        current
      }
    },
  }
    `

  const projects = await sanityClient.fetch(query)

  if (!projects) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      projects
    }
  }
}
