const Post = ({post}) => {
    return (
        <div className="card mt-10 bg-blue-100 shadow-xl">
           
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See details</button>
                </div>
            </div>
        </div>
    );
};

export default Post;