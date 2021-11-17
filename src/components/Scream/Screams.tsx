import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { VscAccount } from "react-icons/vsc";
import { useRouter } from "next/router";

import { Scream } from "../../types";

interface Props {
  scream: Scream;
}

const Screams: React.FC<Props> = ({ scream }) => {
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
              !scream.user.profile ? 
              <img src="http://www.thejungleadventure.com/assets/images/noimage/noimage.png" alt="" />
              :
              <img src={scream.user.profile.profileUrl} alt="" />
            }            
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
          <div className="scream__content">
            <h2 onClick={() => router.push(`/user/$`)}>
              @<strong>{scream.user.username}</strong>{" "}
            </h2>
            <span className="public_time">{dayjs(scream.createdAt).fromNow()}</span>
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
