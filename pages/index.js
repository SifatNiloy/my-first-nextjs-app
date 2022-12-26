import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello next js</h1>
      <Link href="/blog">
        <button>Blog</button>
      </Link>
    </div>
  )
}
