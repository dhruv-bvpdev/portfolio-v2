import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { sanityClient, urlFor } from '../../sanity'

const Work = ({ project }) => {
  return (
    <Layout title={project.title}>
      <Container>
        <Title>
          {project.name} <Badge>{project.year}</Badge>
        </Title>
        <P>{project.description}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={project.link}>
              {project.link} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>{project.platforms}</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{project.stack}</span>
          </ListItem>
          <ListItem>
            <Meta>Github Repo</Meta>
            <Link href={project.github_link}>
              {project.github_link} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        {project.gallery.map(projectImage => (
          <WorkImage
            key={project._id}
            src={urlFor(projectImage)?.url()}
            alt={project.name}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default Work

export const getStaticPaths = async () => {
  const query = `
    *[_type == "works"] {
      _id,
      slug {
          current
      }
     }
    `

  const works = await sanityClient.fetch(query)
  const paths = works.map(work => ({
    params: {
      slug: work.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const query = `
  *[_type == "works" && slug.current == $slug][0] {
    _id,
    name,
    description,
    link,
    github_link,
    year,
    stack,
    gallery,
    slug,
    platforms
     }
    `

  const project = await sanityClient.fetch(query, {
    slug: params?.slug
  })

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    }
  }
}
