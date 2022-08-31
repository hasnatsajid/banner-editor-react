import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <section className="header-top">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* <!-- ======= humburder-menu --> */}
          <div className="col-lg-1 col-md-1">
            <div className="top-menu text-center">
              <button className="humburger-top-menu">
                <a href="https://www-dev.centralhub.com.au/app/dashboards/default">
                  <img src="/images/humburger.png" alt="" />
                </a>
              </button>
            </div>
          </div>
          {/* <!-- =======serce section======== --> */}
          <div className="col-lg-3 top-ser-box">
            <div className="top-search">
              <ul>
                <li className="searchBox">
                  <div className="searchbar-sec">
                    <form action="">
                      <div className="search-box">
                        <input type="search" name="" id="" placeholder="Search" className="form-control" />
                        <button className="search-icon">
                          <span>
                            <FontAwesomeIcon icon={faSearch} />
                            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                          </span>
                        </button>
                        <span className="search-icon">
                          <FontAwesomeIcon icon={faSearch} />
                          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        </span>
                      </div>
                    </form>
                  </div>
                </li>
                <li>
                  <div className="languge-select">
                    <select name="" id="">
                      <option value="eng">Eng</option>
                      <option value="eng">Eng</option>
                      <option value="eng">Eng</option>
                      <option value="eng">Eng</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- ========= logo section --> */}
          <div className="col-lg-5 col-md-6">
            <div className="row align-items-center">
              <div className="col-lg-10 col-md-8">
                <div className="logo-section text-center">
                  <a href="">
                    <img src="/images/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 text-center">
                <a href="#" className="save-btn">
                  Save
                </a>
              </div>
            </div>
          </div>
          {/* <!-- =======header right side ========== --> */}
          <div className="col-lg-3 col-md-5">
            <div className="right-side-menu">
              <ul className="header-rt-side-menu">
                <li>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onChange={() => console.log('hel')} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                  </div>
                </li>
                <li>
                  <a href="">
                    <span className="bell-icon">
                      <img src="/images/bell-icon.png" alt="" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="bell-icon">
                      <img src="/images/more-white-icon.png" alt="" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="bell-icon">
                      <img src="/images/large-size-icon.png" alt="" />
                    </span>
                  </a>
                </li>
                <li>
                  <div className="profile-img-sec">
                    <button>
                      <img src="/images/profile-img.jpg" alt="" />
                    </button>
                    <img src="/images/profile-img.jpg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
