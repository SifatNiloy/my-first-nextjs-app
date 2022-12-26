import Head from "next/head";
import Link from "next/link";

const blog = () => {
    return (
        <div>
            <Head>
                <title>Blog page</title>
            </Head>
            <h1>This is blog page</h1>
            <Link href="/blog/blog1">
                blog1
            </Link>
        </div>
    );
};

export default blog;