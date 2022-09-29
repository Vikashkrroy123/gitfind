import { useRef } from "react";
export default function Search ({searchedUsername}) {
    const inputRef =useRef()
    const searched =e =>{
      e.preventDefault();
      const searchKeyword=inputRef.current.value;
      searchedUsername(searchKeyword)
      console.log(inputRef.current.value)
    }
    return( 
        <div className="search">
           <form onSubmit={searched}>
           <h1>Serach for user bname</h1>
<input type="text" ref={inputRef}/>
<button>Search</button>
           </form>
     </div>
    )
}