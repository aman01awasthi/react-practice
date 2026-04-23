import { useNavigate, useParams } from "react-router-dom"

function PostDetails({id}){
    const navigate = useNavigate();
    let params = useParams();
    return(
        <div>
            <p>{params.id}</p>

            <button onClick={() =>navigate('/posts')}>Go back</button>
        </div>
    )
}
export default PostDetails;