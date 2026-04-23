import { useParams } from "react-router-dom"

function PostDetails({id}){
    let params = useParams();
    return(
        <div>
            <p>{params.id}</p>
        </div>
    )
}
export default PostDetails;