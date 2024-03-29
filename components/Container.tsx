import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import { Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import avatar from '../public/avatar.png'


interface INavItemProps {
  href: string;
  text: string;
}

function NavItem({ href, text }: INavItemProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}>
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

export default function Container(props: any) {
  const { title } = props
  const meta = {
    title: title || 'ZC - just a coder',
    description: 'frontend developer, ',
    type: 'website',
  }

  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="py-8 grow" style={{ paddingLeft: '18vw', paddingRight: '18vw' }}>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index"></meta>
          <meta name="description" content={meta.description}></meta>
          <meta property="og:type" content={meta.type} />
        </Head>
        <div className="flex justify-between align-middle mb-8">
          <nav className="flex align-middle">
            <Image
              alt="zc avatar"
              className="rounded-full"
              src={avatar}
              width={40}
              height={40}
            />
            <NavItem href="/" text="Blog"/>
            <NavItem href="/links" text="Links"/>
            <NavItem href="/about" text="About"/>
          </nav>
          <div>
            <Button
              height='40px'
              width='40px'
              borderRadius='20px'
              iconSpacing={0}
              leftIcon={ resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }}
            >
            </Button>
          </div>
        </div>
        {props.children}
      </div>
      <footer className="w-full mb-4 text-center text-gray-800 dark:text-gray-200">
        make with NextJS by zc
      </footer>
    </div>
  )
}
