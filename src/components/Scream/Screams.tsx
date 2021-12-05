import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";

import { Scream, User } from "../../types";


interface Props {
  scream: Scream;
  user: User
}

const Screams: React.FC<Props> = ({ scream, user }) => {
  dayjs.extend(relativeTime);


  const router = useRouter();


  return (
    <>
      <div className="scream">
        <div className="scream__container">
          {/* design scream images template */}
          <div className="scream__media">
            <img src={scream.imageUrl} />
          </div>

          {/* user profile for who scream */}
          <div className="scream__user__profile">
            {
              !scream.user.images ?
              <img src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png" alt="" />
              :
              <img src={scream.user.images} alt="" />
            }
          </div>
          {/* More functionality */}
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
          
          <div className="scream__user__info">
            <h3 onClick={() => router.push(`/user/${scream.user.id}`)}>
              @{scream.user.username}{" "}
            </h3>
            <h4>
              public: {dayjs(scream.createdAt).fromNow()}
            </h4>
          </div>
          <hr />
          {/* Scream Contents */}
          <div className="scream__content">
            <p>{scream.description}</p>
          </div>

          {/* Scream functionality */}
          <div className="play__scream">
            <i
              className="ti-control-play"
              onClick={() => router.push(`/Screams/v/_id=?$`)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Screams;
