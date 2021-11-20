import Head from 'next/head'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Footer from 'components/Footer'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router?.asPath === href

  return (
    <NextLink href={href}>
      <a>
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

export default function Container(props) {
  const { children } = props
  const meta = {
    title: 'zc - just a coder',
    description: '',
    image: '',
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <div>
          <nav>
            <a href="#skip" className="skip-nav">
              Skip to content
            </a>
            <div>
              <NavItem href="/" text="Home" />
            </div>
          </nav>
        </div>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
