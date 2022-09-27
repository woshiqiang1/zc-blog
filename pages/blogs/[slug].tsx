import { MDXRemote } from 'next-mdx-remote'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'
import { mdxToHtml } from '../../libs/mdx'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


function PostPage({ post }) {

  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
        {
          ...MDXComponents
        }
      }
      />
    </BlogLayout>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data, content } = matter(markdownWithMeta)
  const { html, wordCount, readingTime } = await mdxToHtml(content);

  return {
    props: {
      post: {
        title: slug,
        content: html,
        wordCount,
        readingTime,
      }
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
