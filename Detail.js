const Detail =({detail}) =>{
    return(
        <div className="detail">
            <img src ={detail.avatar_url} alt="profile"/>
        <h3>{detail.name}</h3>
        <h3>{detail.login}</h3>
        <p>{detail.created_at}</p>
        <div className="but">
            <button>{detail.public_repos} <spam>Number of repo.
           </spam></button>
           <button>{detail.followers} <spam>Followers
           </spam></button>
           <button>{detail.following} <spam>Followings
           </spam></button>
        </div>
        </div>
    )
}
export default Detail