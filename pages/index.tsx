import type { NextPage } from 'next'
import Container from '../components/Container'
import NextLink from 'next/link'
import { Badge } from '@chakra-ui/react'
import { tagList } from '../constants'
import type { TagItem } from '../constants'


const PostItem = ({ path, title, tags }: any) => {

  return (
    <div>
      <NextLink href={`/blogs/${path}`}>
      <span className="flex items-center mb-2 cursor-pointer">
        <span className="mr-2 text-lg text-gary-900 dark:text-gray-100">{ title }</span>
        {
          tags.map((name: string) => {
            const { fullName, color } = tagList.find(tag => tag.name === name) as TagItem
            return (
              <Badge className="mr-2" variant='solid' colorScheme={color}>{fullName}</Badge>
            )
          })
        }
      </span>
      </NextLink>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <div className="mb-4 text-5xl font-bold text-black dark:text-white">Blog</div>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          一些工作、学习相关的 blog 记录，供自己回顾或者大家参考，如有不正确的地方，欢迎大家邮件（775106512@qq.com）和我交流。
        </p>
      </div>
      <PostItem path="vue_lifecycle" title="When Vue beforeDestroy trigger" tags={['Vue2', 'JS', 'React']}/>
      <PostItem path="test" title="this is a blog title 1" tags={['JS', 'React']}/>
      <PostItem path="post1" title="this is a blog title 2" tags={['CSS']}/>
    </Container>
  )
}

export default Home
