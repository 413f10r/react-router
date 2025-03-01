//import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {

    const { id } = useParams()

    return (
        <div className="mainCont">
            <h1>Singolo post: {id}</h1>
        </div>

    )
}

export default SinglePost;