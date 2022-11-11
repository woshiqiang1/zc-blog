import type { NextPage } from 'next'
import Container from '../components/Container'
import NextLink from 'next/link'
import { Badge } from '@chakra-ui/react'




const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <NextLink href="/blogs/test">
          <span className="flex items-center mb-2 cursor-pointer">
            <span className="mr-2 text-lg text-gary-900 dark:text-gray-100">this is a blog title 123</span>
            <Badge variant='solid' colorScheme='yellow'>JavaScript</Badge>
          </span>
        </NextLink>
      </div>
      <div>
        <NextLink href="/blogs/post1">
          <span className="text-lg text-gary-900 dark:text-gray-100">this is a blog title 2</span>
        </NextLink>
      </div>
    </Container>
  )
}

export default Home
