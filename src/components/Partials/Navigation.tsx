import React, { useContext } from "react";
import { useMutation } from '@apollo/client';
import { AuthContext } from "../../context/AuthContext";
import { isAdmin } from "../../helpers/authHelper";
import { SIGN_OUT } from '../../graphql/User';
import { useRouter } from 'next/router';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  
  const { handleAuthAction, loggedInUser, setAuthUser } = useContext(AuthContext);

  const [signout] = useMutation<{signout: {message: string}}>(SIGN_OUT);

  const router = useRouter();

  
  console.log("User Logged in on Navigation!:", loggedInUser);

  //create call singout function
  const handleSignout = async () => {
    try {
      const response = await signout();

      if(response?.data?.signout?.message){
        //Set Auth user to null
        setAuthUser(null);

        //Sync Signout
        window.localStorage.setItem('signout', Date.now().toString())

        //push user to Signin Page
        router.push('/Signin')
      }
    } catch (error) {
      alert('Sorry can not proceed...!')
    }
  }

  //  console.log("user logged in:", loggedInUser)
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <a href="/">
              <img src="https://res.cloudinary.com/swizce/image/upload/v1620702365/Swizce/icons/swizce_aez2ms.png" height="34px" />
          </a>
        </div>
            {
              loggedInUser && (
                <>
                <div className="wrapper">
                  <div className="avatar">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="https://res.cloudinary.com/swizce/image/upload/v1620702239/Swizce/images/avatar1_c05cmb.png" className="btn" />
                        </a>
                      </li>                      
                    </ul>
                  </div>
                </div>
                <div className="search">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Found Somethings..."
                    />
                </div>
                </>
              )}
              <div className="nav-action">
                {
                  loggedInUser ? 
                  <a style={{ cursor: 'pointer'}}>
                    <img onClick={handleSignout}
                          src="https://res.cloudinary.com/swizce/image/upload/v1622518178/Swizce/images/log-out_aqu0w7.png"
                          width="32px"
                          height="32px"
                    />
                  </a>
                  :
                  <a onClick={() => handleAuthAction('signin')} style={{ cursor: 'pointer'}}>
                    <img
                          src="https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/login_qgoycx.png"
                          width="32px"
                          height="32px"
                        />
                  </a>
                }
                </div>
                {
                  loggedInUser && isAdmin(loggedInUser) && (
                    <div className="navigation">
                      <div className="logo">
                        <a href="/">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1620702365/Swizce/icons/swizce_aez2ms.png" height="34px" />
                        </a>
                      </div>
                      <div className="nav-action">
                      <a href="/admin">Admin</a>
                      </div>

                      <div className="nav-action">
                        <a style={{ cursor: 'pointer'}}>
                          <img
                            onClick={handleSignout}
                            src="https://res.cloudinary.com/swizce/image/upload/v1622518178/Swizce/images/log-out_aqu0w7.png"
                            width="32px"
                            height="32px"
                          />
                        </a>
                      </div>
                    </div>
                  )}
            </div>
          </>
        );
      };

export default Navigation;
