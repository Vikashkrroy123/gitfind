export default function Repo  ({detail}){
    return(
        <div className="repo">
            <ul>
                {detail.map((singleRepo, idx)=>{
return(
<li key={idx}>
<a href={singleRepo.html_url} target="blank">
{singleRepo.name}
</a>
</li>
)
})}
            <li>Repo 1</li>
            <li>Repo 2</li>
        </ul>
        </div>
    )
}