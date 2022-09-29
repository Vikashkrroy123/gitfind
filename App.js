import Detail from './component/Detail';
import Footer from './component/Footer';
import Repo from './component/Repo';
import Search from './component/Search';
import {github} from './utils';
import {useEffect, useState} from 'react';

function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
const [username, setUsername]=useState("");
  useEffect(_ => {
    (async _  => {
      const response = await github.get(`/${username}`);
      console.log(response.data)
      setDetail(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    (async _ => {
      const response = await github.get(`/${username}/repos`);
      setRepoList(response.data);
      console.log(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    (async _=> {
      const response = await github.get(`/${username}/followers`);
      setFollowerList(response.data);
      console.log(response.data);
    })();
  }, [username]);

const searchedUsername =keyword =>{
setUsername(keyword)
}
return (
    
    <div>
<Search searchedUsername={searchedUsername} />
<Detail detail={detail}/>
<Repo detail={repoList}/>
<Footer />
    </div>     
  );
}

export default App;
