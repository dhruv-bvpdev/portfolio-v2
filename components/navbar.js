import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import ToggleThemeButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io'
import { BsSpotify } from 'react-icons/bs'
import useSWR from 'swr'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const fetcher = url => fetch(url).then(r => r.json())
  const { data } = useSWR('/api/spotify', fetcher)
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/dhruv-bvpdev/portfolio-v2"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <LinkItem
            _target="_blank"
            href={
              data?.isPlaying
                ? data.songUrl
                : 'https://open.spotify.com/playlist/4bbRmyLN9Zbr4WllN5ucy8?si=878c062b4a074841'
            }
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            {' '}
            <BsSpotify /> -
            {data?.isPlaying ? data.title : 'Spotify - Not Listening'}
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ToggleThemeButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/dhruv-bvpdev/portfolio-v2"
                >
                  View Source
                </MenuItem>
                <MenuItem
                  as={Link}
                  href={
                    data?.isPlaying
                      ? data.songUrl
                      : 'https://open.spotify.com/playlist/4bbRmyLN9Zbr4WllN5ucy8?si=878c062b4a074841'
                  }
                >
                  {data?.isPlaying
                    ? `Spotify - ${data.title}`
                    : 'Spotify - Not Listening'}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
