//This is the Child Component
//Purpose: Post Card will receives data from parent Post list just the button remain here in Child  
//Receives: Each mapped data as per id 
//Returns: button remains here and as button will ever get clicked so the functonality will get triggered from Parent
function PostCard({title, body, likes, onLike, id}){
    return(
        <div>
            <h4><strong>{title}</strong></h4>
            <p>{body}</p>
            <button onClick={()=> onLike(id)}>Like {likes[id] || 0}</button>
        </div>
    )
}
export default PostCard;