import React from "react";
import { Scream, User } from "../../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Props {
  scream: Scream,
  user: User
}

const Home: React.FC<Props> = ({ scream, user }) => {
  dayjs.extend(relativeTime);
  return (
    <>
      <div className="home__scream">
        <div className="home__scream__container">

          <div className="home__scream__media">
            <img src={scream.imageUrl} />
          </div>
          

          {/* user profile for who scream */}
          <div className="home__user__profile">
            {
              !scream.user.images ? 
              <img src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png" alt="" />
              :
              <img src={scream.user.images} alt="" />
            }
              
          </div>

          <div className="__scream__content">
            <h2>
              @<strong>{scream.user.username}</strong>
            </h2>
            <span className="public_time">{dayjs(scream.createdAt).fromNow()}</span>
            <p>
             {scream.description}
            </p>
          </div>
          <div className="play__scream">
            <i className="ti-control-play" />
          </div>
          {
            user && user.id === scream.user.id ? (
              <ul className="side__icons">
                <span>
                  <i className="ti-settings" />
                </span><br />
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-comment" />
                </span>
                <span>
                  <i className="ti-rss-alt" />
                </span>
                <span>
                  <i className="ti-close" />
                </span>
              </ul>
            ):(
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
            )
          }
          
        </div>
      </div>
    </>
  );
};

export default Home;
