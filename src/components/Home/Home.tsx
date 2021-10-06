import React from "react";
import { Scream } from "../../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Props {
  scream: Scream
}

const Home: React.FC<Props> = ({ scream }) => {
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
              scream.user.profile ? 
              <img src={scream.user.profile.profileUrl} alt="" />
              :
              <img src="http://www.thejungleadventure.com/assets/images/noimage/noimage.png" alt="" />
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
        </div>
      </div>
    </>
  );
};

export default Home;
