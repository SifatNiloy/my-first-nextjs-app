import Link from "next/link";

const Post = ({post}) => {
    return (
        <div className="card mt-10 bg-blue-100 shadow-xl">
           
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                {/* <p>{post.body}</p> */}
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                        <button className="btn btn-primary">See details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;