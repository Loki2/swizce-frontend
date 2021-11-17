import React, { useContext, useEffect } from 'react'
import Messager from '../../components/Messager/Messager';
import { useRouter } from 'next/router';
import Loader from "react-loader-spinner";

import { AuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Partials/Sidebar';
import Rightbar from '../../components/Partials/Rightbar';

interface Props {
  
}

const MessagerPage = (props: Props) => {
  const { loggedInUser } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if(!loggedInUser){
      router.push('/');
    }else{
      router.push('/Messagers')
    }
  },[loggedInUser])
  return !loggedInUser ? (
    <div className="display__page">
      <section className="main">
        <Loader
          type="Oval"
          color="teal"
          height={50}
          width={50}
          timeout={30000}
        />
      </section>
    </div>
  ):(
    <>
      {!loggedInUser ? <div></div> : <Sidebar />}
        <div className="messager__page">
          <Messager />
        </div>
      {!loggedInUser ? <div></div> : <Rightbar profile={loggedInUser}/>}
    </>
  )
}

export default MessagerPage;
