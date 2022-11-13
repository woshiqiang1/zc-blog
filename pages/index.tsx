import type { NextPage } from 'next'
import Container from '../components/Container'
import NextLink from 'next/link'
import { Badge } from '@chakra-ui/react'




const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <div className="mb-4 text-5xl font-bold text-black dark:text-white">Blog</div>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          一些工作、学习相关的 blog 记录，供自己回顾或者大家参考，如有不正确的地方，欢迎大家邮件（775106512@qq.com）和我交流。
        </p>
      </div>
      <div>
        <NextLink href="/blogs/test">
          <span className="flex items-center mb-2 cursor-pointer">
            <span className="mr-2 text-lg text-gary-900 dark:text-gray-100">this is a blog title 1</span>
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
