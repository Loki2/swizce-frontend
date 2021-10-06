import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
// import { useQuery } from '@apollo/client';
// import { QUERY_MYPROFILE } from '../../graphql/User';
// import { Profile } from '../../types';
import { VscAccount, VscMail, VscHeart } from 'react-icons/vsc';
import { MdPhone, MdQuestionAnswer, MdHelpOutline } from "react-icons/md";

interface Props {
  // profile: Profile
}

const Rightbar: React.FC<Props> = () => {
  const { loggedInUser  } = useContext(AuthContext);

  // const {data, loading, error } = useQuery<{ myProfile: Profile }>(QUERY_MYPROFILE, { fetchPolicy: 'network-only'});


  // if(error) console.log("Can not refresh profile");

  // if(loading) console.log("Profile is loading ...");
  
  // console.log("user loggedin profile: ", data);


  return !loggedInUser ? (
    <section className="rightbar">
         {/* Right bar */}
        <div className="rightbar Profile">
          <div className="profile">
            <img src="https://res.cloudinary.com/swizce/image/upload/v1620702350/Swizce/icons/test_roevfj.jpg"  />
          </div>
          <div className="biography">
            <p>@username</p>
            <p>Add Profile</p>
          </div>
          <div className="profile-action">
            <a href="/">
              <VscAccount size={32} color="teal" />
            </a>
            <a href="/">
              <VscMail size={32} color="teal" />
            </a>
            <a href="/">
              <VscHeart size={32} color="teal" />
            </a>
          </div>
          <div className="footer-action">
            <a href="#">
              <MdPhone size={44} color="teal"/>
            </a><br />
            <a href="#">
              <MdQuestionAnswer size={44} color="teal"/>
            </a><br /><br />
            
            <a href="#">
              <MdHelpOutline size={44} color="teal"/>
            </a>
          </div>
        </div>
      </section> 
  ):(
    <section className="rightbar">
         {/* Right bar */}
         <div className="rightbar Profile">
          {/* <div className="coverImage">
            <img src={loggedInUser.profile.coverUrl} width="400px" height="168px" />
          </div> */}
          <div className="profile">
            <img src={loggedInUser.profile.profileUrl}  />
          </div>
          <div className="biography">
            <p>{loggedInUser.profile.firstname} {loggedInUser.profile.lastname}</p>
            {/* <p>the world is not for some one only</p> */}
          </div>
          <div className="profile-action">
            <a href="/">
              <VscAccount size={28} color="white" />
            </a>
            <a href="/">
              <VscMail size={28} color="white" />
            </a>
            <a href="/">
              <VscHeart size={28} color="white" />
            </a>
          </div>
          <div className="footer-action">
            <a href="#">
              <MdPhone size={44} color="white"/>
            </a><br />
            <a href="#">
              <MdQuestionAnswer size={44} color="white"/>
            </a><br /><br />
            
            <a href="#">
              <MdHelpOutline size={44} color="white"/>
            </a>
          </div>
        </div>
      </section> 
  )
}

export default Rightbar;
