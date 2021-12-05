import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";


import Sidebar from "../../components/Partials/Sidebar";
import Profile from '../../components/User/Profile';
import Index from '../../components/Index';


interface Props {
  
}

const ProfilePage: React.FC<Props> = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
      return currentYear;
  };


  const { loggedInUser } = useContext(AuthContext);

  const router = useRouter();

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
    <Index />
  ) : (
    <>
      <Sidebar />
      <div className="profile__page">
        {
          !loggedInUser ?
            <section className="user__profile__info">
            <div className="user__media__info">
              <div className="user__cover">
                <img src="https://wallpapercave.com/wp/wp3703397.jpg" alt="" />
              </div>
              <div className="user__profile">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1620702350/Swizce/icons/test_roevfj.jpg" alt="" />
              </div>
            </div>
            <div className="user__name">
              <h2>Add Profile</h2>
            </div>
          </section>
          :
          <Profile user={loggedInUser} />
        }

        <section className="user__profile__navigation">
          <div className="navigation__tabs">
            <h1>Navigation</h1>
          </div>
        </section>
        <section className="user__scream__post">
          <div className="user__activity__list">
            <h2>My Activities</h2>
            <div className="user__activity__item">
              <ul>
                <li>
                  <a href="#">
                    <i className="ti-shopping-cart-full" />
                    Go Shopping
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-flag" />
                    Work From Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-cut" />
                    Feed Pets
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-heart" />
                    Go For Walk
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-eraser" />
                    Read Book
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-home" />
                    Learn Cooking
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-car" />
                    Study Spainish
                  </a>
                </li> 
              </ul>
            </div>

            <div className="copy__right__component">
              <h5>Term of Service, Privacy Policy, <br /> Cookie Policy, Ads info more... </h5>
              <p>&copy;{getYear()} {" "}| Swizce Inc,</p>
            </div>
          </div>
          
          <div className="user__owner_scream">
            <div className="user__scream__list">
              <div className="user__scream__item">
                <div className="user__profile__scream">
                  <div className="user__profile__scream__container">
                    {/* design scream images template */}
                    <div className="user__profile__scream__media">
                      <img src="https://wallpapercave.com/wp/wp3703429.jpg" />
                    </div>

                    {/* More functionality */}
                    <ul className="side__icons">
                      <span>
                        <i className="ti-heart" />
                      </span>
                      <span>
                        <i className="ti-comment" />
                      </span>
                      <span>
                        <i className="ti-rss-alt" />
                      </span>
                    </ul>

                    {/* Scream Contents */}
                    <div className="user__profile__scream__content">
                      <h2 onClick={() => router.push(`/user/$`)}>
                        @<strong>Loki Rixnickz</strong>{" "}
                      </h2>
                      <span className="public_time">3 hours ago</span>
                      <p>the world has changed from your</p>
                    </div>

                    {/* Scream functionality */}
                    <div className="user__profile__play__scream">
                      <i
                        className="ti-control-play"
                        onClick={() => router.push(`/Screams/v/_id=?$`)}
                      />
                    </div>
                  </div>
                </div>
              </div><br />
              <div className="user__scream__item">
                <div className="user__profile__scream">
                  <div className="user__profile__scream__container">
                    {/* design scream images template */}
                    <div className="user__profile__scream__media">
                      <img src="https://wallpapercave.com/wp/wp3703429.jpg" />
                    </div>

                    {/* More functionality */}
                    <ul className="side__icons">
                      <span>
                        <i className="ti-heart" />
                      </span>
                      <span>
                        <i className="ti-comment" />
                      </span>
                      <span>
                        <i className="ti-rss-alt" />
                      </span>
                    </ul>

                    {/* Scream Contents */}
                    <div className="user__profile__scream__content">
                      <h2 onClick={() => router.push(`/user/$`)}>
                        @<strong>Loki Rixnickz</strong>{" "}
                      </h2>
                      <span className="public_time">3 hours ago</span>
                      <p>the world has changed from your</p>
                    </div>

                    {/* Scream functionality */}
                    <div className="user__profile__play__scream">
                      <i
                        className="ti-control-play"
                        onClick={() => router.push(`/Screams/v/_id=?$`)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user__more__actions">
            <div className="user__subscriber__action">
              <div className="user__subscriber__action__item">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-heart" />
                      Followers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-comment" />
                      Talks
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-rss-alt" />
                      Shares
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="user__base__information">
              <div className="user__base__information__item">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-shopping-cart-full" />
                      Market Place
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-flag" />
                      Cars Modifier
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-cut" />
                      Electrict Repair
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-heart" />
                      Salons Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-eraser" />
                      House Sweaper
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-home" />
                      Houses Rent
                    </a>
                  </li> 
                  <li>
                    <a href="#">
                      <i className="ti-car" />
                      Cars Rent
                    </a>
                  </li> 
                </ul>
              </div>
            </div>
            <div className="user__friends__list">
              <div className="user__friends__list__item">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-shopping-cart-full" />
                      Market Place
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-flag" />
                      Cars Modifier
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-cut" />
                      Electrict Repair
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-heart" />
                      Salons Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-eraser" />
                      House Sweaper
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-home" />
                      Houses Rent
                    </a>
                  </li> 
                  <li>
                    <a href="#">
                      <i className="ti-car" />
                      Cars Rent
                    </a>
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProfilePage;
