function ProfileCard({name, role, bio}){
    return(
        <div>
            <ul>
                <li>{name} - {role} - {bio}</li>
            </ul>
        </div>
    )
}

export default ProfileCard;