import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";


interface Props {}

const Service: React.FC<Props> = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
      return currentYear;
  };

  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat: "", lng: ""}
  })

  const { handleAuthAction } = useContext(AuthContext);

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }
    })
  }

  const onError = (error: any) => {
    setLocation(error,
        // {
        //   loaded: true,
        //   error: {}
        // }
      );
  }



  useEffect(() => {
    if( !("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geo Location not Supported"
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [])
  return (
    <>
      <div className="service__page">
        
        {/* <section className="service__header">
          <h2>I am Here: {location.loaded ? JSON.stringify(location): "Location is not available, allow access location?" }? Open Maps Or Need Helps?</h2>
        </section> */}

        <section className="service__main">
          <div className="service__category__list">
            <div className="__add__service">
              <a onClick={() => handleAuthAction('create-service')}>
                <i className="ti-plus" />
                  ADD NEW SERVICE
              </a>
            </div>
            <h1>Service Categories</h1>
            <hr />
            <div className="service__category__item">
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
                    Cleaner And Sweaper
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-home" />
                    Houses And Land
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-car" />
                    Cars And Bike
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-dribbble" />
                    Taxi And Drivers
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-archive" />
                    Shipping And Delivery
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-drupal" />
                    Hotels and Guesthouse
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-music-alt" />
                    Restaurant And Bars
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-help-alt" />
                    Hospital And Clinic
                  </a>
                </li> 
                <li>
                  <a href="#">
                    <i className="ti-map-alt" />
                    Tourist And Park
                  </a>
                </li> 
              </ul>
            </div>

            <div className="copy__right__component">
              <h5>Term of Service, Privacy Policy, <br /> Cookie Policy, Ads info more...</h5>
              <p>&copy;{getYear()} {" "}| Swizce Inc,</p>
            </div>
          </div>
          
          

          {/* main container */}
          <div className="service__container">
              <ul>
                <li>
                  <a href="">
                    <div className="service__item">
                      <div className="service__head">
                        <img
                          src="https://res.cloudinary.com/swizce/image/upload/v1628930010/Swizce/service/pngtree-professional-car-maintenance-and-repair-poster-image_195257_wkkq97.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service__content">
                        <div className="__body">
                          <h2>Description: </h2>
                          <span>Service Tag:</span>
                          <h3>Contact</h3>
                          <h3>Location: {location.loaded ? JSON.stringify(location): "Location is available" }</h3>
                          <h3>rating: </h3>
                        </div>
                        <div className="__footer">
                          <a href="#">Book Now!</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__item">
                      <div className="service__head">
                        <img
                          src="https://skgmodifiers.com/images/car-modification-company-delhi.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service__content">
                        <div className="__body">
                          <h2>Description: </h2>
                          <span>Service Tag:</span>
                          <h3>Contact</h3>
                          <h3>Location: {location.loaded ? JSON.stringify(location): "Location is available" }</h3>
                          <h3>rating: </h3>
                        </div>
                        <div className="__footer">
                          <a href="#">Book Now!</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__item">
                      <div className="service__head">
                        <img
                          src="https://www.mediashower.com/img/3B36655C-9868-11E8-A9AD-5E41CFEAE2B9/bigstock-Young-Receptionist-With-Clipbo-247239454_600x.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service__content">
                        <div className="__body">
                          <h2>Description: </h2>
                          <span>Service Tag:</span>
                          <h3>Contact</h3>
                          <h3>Location: {location.loaded ? JSON.stringify(location): "Location is available" }</h3>
                          <h3>rating: </h3>
                        </div>
                        <div className="__footer">
                          <a href="#">Book Now!</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__item">
                      <div className="service__head">
                        <img
                          src="https://res.cloudinary.com/swizce/image/upload/v1628930010/Swizce/service/pngtree-professional-car-maintenance-and-repair-poster-image_195257_wkkq97.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service__content">
                        <div className="__body">
                          <h2>Description: </h2>
                          <span>Service Tag:</span>
                          <h3>Contact</h3>
                          <h3>Location: {location.loaded ? JSON.stringify(location): "Location is available" }</h3>
                          <h3>rating: </h3>
                        </div>
                        <div className="__footer">
                          <a href="#">Book Now!</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__item">
                      <div className="service__head">
                        <img
                          src="https://skgmodifiers.com/images/car-modification-company-delhi.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service__content">
                        <div className="__body">
                          <h2>Description: </h2>
                          <span>Service Tag:</span>
                          <h3>Contact</h3>
                          <h3>Location: {location.loaded ? JSON.stringify(location): "Location is available" }</h3>
                          <h3>rating: </h3>
                        </div>
                        <div className="__footer">
                          <a href="#">Book Now!</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__item">
                      <div className="service__head">
                        <img
                          src="https://www.mediashower.com/img/3B36655C-9868-11E8-A9AD-5E41CFEAE2B9/bigstock-Young-Receptionist-With-Clipbo-247239454_600x.jpg"
                          alt=""
                        />
                      </div>
                      <div className="service__content">
                        <div className="__body">
                          <h2>Description: </h2>
                          <span>Service Tag:</span>
                          <h3>Contact</h3>
                          <h3>Location: {location.loaded ? JSON.stringify(location): "Location is available" }</h3>
                          <h3>rating: </h3>
                        </div>
                        <div className="__footer">
                          <a href="#">Book Now!</a>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>          
          </div>
        
          <div className="service__right__tabs">
            <h1>Premium Sponsors</h1>            
            <div className="service__sponsors__container">
              <hr />
              <ul>
                <li>
                  <a href="">
                    <div className="service__sponsors__item">
                      <img src="https://a-static.besthdwallpaper.com/2021-kena-with-beni-saiya-kena-bridge-of-spirits-video-game-wallpaper-75119_L.jpg" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__sponsors__item">
                      <img src="https://assets-prd.ignimgs.com/2021/09/20/kena-bridge-of-spirits-photo-mode-05-1632147335829.jpg" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__sponsors__item">
                      <img src="https://c4.wallpaperflare.com/wallpaper/250/991/734/kena-bridge-of-spirits-4k-game-cg-rot-kena-hd-wallpaper-preview.jpg" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="service__sponsors__item">
                      <img src="https://www.psu.com/wp/wp-content/uploads/2020/10/kena-bridge-of-spirits-ps4-ps5-wallpapers-19.jpg" alt="" />
                    </div>
                  </a>
                </li>
              </ul>              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;

