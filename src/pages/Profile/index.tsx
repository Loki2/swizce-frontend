import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import Loader from "react-loader-spinner";


import Sidebar from "../../components/Partials/Sidebar";
import Profile from '../../components/User/Profile';


interface Props {
  
}

const ProfilePage: React.FC<Props> = () => {
  const { loggedInUser } = useContext(AuthContext);

  const router = useRouter();

  console.log("User Logged in: ", loggedInUser);

  useEffect(() => {
    //Check if user not authentication navigator to home page
    if (!loggedInUser) {
      // alert('Log in to processed...!')
      router.push("/");
    } else {
      router.push("/Profile");
    }
  }, [loggedInUser]);

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
  ) : (
    <>
      {!loggedInUser ? <div></div> : <Sidebar />}
      <Profile />
    </>
  )
}

export default ProfilePage;
