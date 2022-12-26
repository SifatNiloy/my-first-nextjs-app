import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello next js</h1>
      <Link href="/blog">
        <button>Blog</button>
      </Link>
      <br /> <br /><br /><br /><br />
      <Image src="/nature.jpg" width={600} height={400}></Image> */}


      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </div>
  )
}
