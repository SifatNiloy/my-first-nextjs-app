import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div className="grid h-screen place-items-center">
            <Image src="/error.png" width={400} height={400} ></Image>
            <Link href="/">
                <button className="btn btn-secondary">Back to homepage</button>
            </Link>
        </div>
        
    );
};

export default Error;