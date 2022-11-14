import Container from '../components/Container'

export default function BlogLayout({children, post}: any) {
  const { title, date, wordCount, readingTime } = post

  return (
    <Container title={`${title} - ZC`}>
      <div className="w-full mt-4 prose dark:prose-dark max-w-none">
        { children }
      </div>
    </Container>
  )
}
