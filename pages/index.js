import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Post from "../Components/Post/Post";

export default function Home({posts}) {
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

      <Banner></Banner>
      <div>
        {
          posts.map(post => <div key={post.id} className="card my-10 bg-blue-100 shadow-xl">
           
            <div className="card-body">
                <h2 className="card-title">{post?.title}</h2>
                <p>{post?.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                        <button className="btn btn-primary">See details</button>
                    </Link>
                </div>
            </div>
            
        </div>)
        }
      </div>
      <div className="grid my-5 place-items-center">
        <Link href={`/posts`}>
          <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
            <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="relative">See All Posts</span></button>
          
        </Link>
      </div>
      
    
      <Footer></Footer>


      {/* <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button> */}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4`)
  const data = await res.json()

  return {
    props: {
      posts: data
    }
  }
}
