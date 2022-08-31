import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDoubleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const VideoEditSection = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [activeTabs, setActiveTabs] = useState({});

  const toggleSideNav = () => {
    setSideNavOpen(true);
  };

  const toggleActiveTab = (tab) => {
    const tabName = tab;
    console.log(tabName);

    const allTabs = {
      layout: false,
      elements: false,
      graphics: false,
      text: false,
      photos: false,
      music: false,
      video: false,
      background: false,
      files: false,
      more: false,
    };

    allTabs[tabName] = true;
    setSideNavOpen(false);
    setActiveTabs(allTabs);
  };

  useEffect(() => {
    toggleActiveTab('layout');
  }, []);

  return (
    <section className="video-editing-main-sec">
      <div className="container-fluid ms-0 me-0">
        <div className="video-editing-main">
          <div className="menuSidebar">
            <div className="sideBarMenuInner">
              {/* <!-- ======= side navbar======= --> */}
              <div className="sideNavtabSection">
                <div className="d-flex align-items-start">
                  <div className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button
                      className={`nav-link navTab ${activeTabs.layout && 'active'}`}
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#layout"
                      data-tab="layout"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                      onClick={() => toggleActiveTab('layout')}
                    >
                      <span>
                        <img src="/images/layout-icon.png" alt="" />
                      </span>
                      <p>Layout</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.elements && 'active'}`}
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#elements"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('elements')}
                    >
                      <span>
                        <img src="/images/elements.png" alt="" />
                      </span>
                      <p>Elements</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.graphics && 'active'}`}
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#graphics"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('graphics')}
                    >
                      <span>
                        <img src="/images/gaphic.png" alt="" />
                      </span>
                      <p>Graphics</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.text && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#text"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('text')}
                    >
                      <span>
                        <img src="/images/text-icon.png" alt="" />
                      </span>
                      <p>Text</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.photos && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#photos"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('photos')}
                    >
                      <span>
                        <img src="/images/image.png" alt="" />
                      </span>
                      <p>Photos</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.music && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#music"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('music')}
                    >
                      <span>
                        <img src="/images/music.png" alt="" />
                      </span>
                      <p>Music</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.video && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#video"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('video')}
                    >
                      <span>
                        <img src="/images/video.png" alt="" />
                      </span>
                      <p>Video</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.background && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#background"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('background')}
                    >
                      <span>
                        <img src="/images/backgroud.png" alt="" />
                      </span>
                      <p>Background</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.files && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#files"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('files')}
                    >
                      <span>
                        <img src="/images/file.png" alt="" />
                      </span>
                      <p>Files</p>
                    </button>
                    <button
                      className={`nav-link navTab ${activeTabs.more && 'active'}`}
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#more"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                      onClick={() => toggleActiveTab('more')}
                    >
                      <span>
                        <img src="/images/more.png" alt="" />
                      </span>
                      <p>More</p>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- ======= video-template======== --> */}
              <div className={`videoTemplate ${sideNavOpen && 'active'}`} id="videoTemp">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className={`tab-pane ${activeTabs.layout ? 'show active' : 'fade'}`} id="layout" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="video-edit-main">
                        <div className="video-bnr-box">
                          <div className="image-box">
                            <img src="/images/layout-template-1.jpg" alt="" />
                          </div>
                          <div className="image-box">
                            <img src="/images/layout-template-2.jpg" alt="" />
                          </div>
                          <div className="image-box">
                            <img src="/images/layout-template-3.jpg" alt="" />
                          </div>
                          <div className="image-box">
                            <img src="/images/layout-template-4.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${activeTabs.elements ? 'show active' : 'fade'}`}
                    id="elements"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="shapesGroup">
                        <ul>
                          <li className="sapesGroupItem">Line</li>
                          <li className="sapesGroupItem">Squre</li>
                          <li className="sapesGroupItem">Arrow</li>
                          <li className="sapesGroupItem">Cercle</li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Lines & Shapes</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/squre-shape.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/round-shape.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/line.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/rectangle.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== graphic======= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Graphics</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/gold.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/leaf.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/cap.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== photos ========= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Photos</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/photos-1.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/photos-2.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/photos-3.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== videos  -========== --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Videos</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <video poster="assets/video/video1.png" controls>
                                  <source src="assets/video/video1.mp4" type="video/mp4" />
                                </video>
                              </li>
                              <li>
                                <video poster="assets/video/video1.png" controls>
                                  <source src="assets/video/video1.mp4" type="video/mp4" />
                                </video>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${activeTabs.graphics ? 'show active' : 'fade'}`}
                    id="graphics"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="shapesGroup">
                        <ul>
                          <li className="sapesGroupItem">Line</li>
                          <li className="sapesGroupItem">Squre</li>
                          <li className="sapesGroupItem">Arrow</li>
                          <li className="sapesGroupItem">Cercle</li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Recently Used</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/gold.png" alt="" />
                              </li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== Feature======= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Featured </a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/ball-shape.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/star-shape.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/butterfly-shape.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== gradient ======= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Gradient</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/gradient-1.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/gradient-2.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/gradient-3.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== Sticker -========== --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Sticker</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/laptop-sticker.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/sticker-2.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/sticker-3.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTabs.text ? 'show active' : 'fade'}`} id="text" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="headingGroups">
                        <p>Click page to add text</p>
                        <ul>
                          <li className="headingBtn heading1">
                            <button>Add A Heading</button>
                          </li>
                          <li className="headingBtn heading2">
                            <button>Add A Heading</button>
                          </li>
                          <li className="headingBtn heading3">
                            <button>Add A Heading</button>
                          </li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Font Combination</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/text-1.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/text-2.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== Feature======= --> */}
                        <div className="shapes-section mt-4">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/text-3.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== gradient ======= --> */}
                        <div className="shapes-section mt-4">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/text-4.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/text-5.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== Sticker -========== --> */}
                        <div className="shapes-section mt-4">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/text-6.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTabs.photos ? 'show active' : 'fade'}`} id="photos" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="shapesGroup">
                        <ul>
                          <li className="sapesGroupItem">Spring</li>
                          <li className="sapesGroupItem">Background</li>
                          <li className="sapesGroupItem">Flower</li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/photo-1.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/photo-2.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== graphic======= --> */}
                        <div className="shapes-section mt-2">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/photo-3.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/photo-4.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== photos ========= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head"></div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/photo-5.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/photo-6.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== videos  -========== --> */}
                        <div className="shapes-section mt-4">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/photo-7.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/photo-8.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTabs.music ? 'show active' : 'fade'}`} id="music" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="shapesGroup">
                        <ul>
                          <li className="sapesGroupItem">Pop</li>
                          <li className="sapesGroupItem">Upbeat</li>
                          <li className="sapesGroupItem">Hip-Hop</li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Pop</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul className="musicBox mt-2">
                              <li className="musicThumb">
                                <span>
                                  <img src="/images/music-icon.png" alt="" />
                                </span>
                              </li>
                              <li className="musicTitle">
                                <p>Feel So Lucky (Instrumental Version)</p>
                              </li>
                            </ul>
                            <ul className="musicBox mt-2">
                              <li className="musicThumb">
                                <span>
                                  <img src="/images/music-icon.png" alt="" />
                                </span>
                              </li>
                              <li className="musicTitle">
                                <p>Feel So Lucky (Instrumental Version)</p>
                              </li>
                            </ul>
                            <ul className="musicBox mt-2">
                              <li className="musicThumb">
                                <span>
                                  <img src="/images/music-thumb.png" alt="" />
                                </span>
                              </li>
                              <li className="musicTitle">
                                <p>Feel So Lucky (Instrumental Version)</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== graphic======= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Upbeat</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <div className="videoSapes">
                              <ul className="musicBox mt-2">
                                <li className="musicThumb">
                                  <span>
                                    <img src="/images/music-icon.png" alt="" />
                                  </span>
                                </li>
                                <li className="musicTitle">
                                  <p>Feel So Lucky (Instrumental Version)</p>
                                </li>
                              </ul>
                              <ul className="musicBox mt-2">
                                <li className="musicThumb">
                                  <span>
                                    <img src="/images/music-icon.png" alt="" />
                                  </span>
                                </li>
                                <li className="musicTitle">
                                  <p>Feel So Lucky (Instrumental Version)</p>
                                </li>
                              </ul>
                              <ul className="musicBox mt-2">
                                <li className="musicThumb">
                                  <span>
                                    <img src="/images/music-thumb.png" alt="" />
                                  </span>
                                </li>
                                <li className="musicTitle">
                                  <p>Feel So Lucky (Instrumental Version)</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ======== photos ========= --> */}
                        <div className="shapes-section mt-4">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Hip-Hop</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul className="musicBox mt-2">
                              <li className="musicThumb">
                                <span>
                                  <img src="/images/music-icon.png" alt="" />
                                </span>
                              </li>
                              <li className="musicTitle">
                                <p>Feel So Lucky (Instrumental Version)</p>
                              </li>
                            </ul>
                            <ul className="musicBox mt-2">
                              <li className="musicThumb">
                                <span>
                                  <img src="/images/music-icon.png" alt="" />
                                </span>
                              </li>
                              <li className="musicTitle">
                                <p>Feel So Lucky (Instrumental Version)</p>
                              </li>
                            </ul>
                            <ul className="musicBox mt-2">
                              <li className="musicThumb">
                                <span>
                                  <img src="/images/music-thumb.png" alt="" />
                                </span>
                              </li>
                              <li className="musicTitle">
                                <p>Feel So Lucky (Instrumental Version)</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTabs.video ? 'show active' : 'fade'}`} id="video" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="shapesGroup">
                        <ul>
                          <li className="sapesGroupItem">Women</li>
                          <li className="sapesGroupItem">Nature</li>
                          <li className="sapesGroupItem"> Beach</li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Women</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <video poster="assets/video/video2.png" controls>
                                  <source src="assets/video/video2.mp4" type="video/mp4" />
                                </video>
                              </li>
                              <li>
                                <video poster="assets/video/video2.png" controls>
                                  <source src="assets/video/video2.mp4" type="video/mp4" />
                                </video>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== graphic======= --> */}
                        <div className="shapes-section mt-2">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Nature</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <video poster="assets/video/video2.png" controls>
                                  <source src="assets/video/video2.mp4" type="video/mp4" />
                                </video>
                              </li>
                              <li>
                                <video poster="assets/video/video2.png" controls>
                                  <source src="assets/video/video2.mp4" type="video/mp4" />
                                </video>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== photos ========= --> */}
                        <div className="shapes-section mt-2">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Beach</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <video poster="assets/video/video2.png" controls>
                                  <source src="assets/video/video2.mp4" type="video/mp4" />
                                </video>
                              </li>
                              <li>
                                <video poster="assets/video/video2.png" controls>
                                  <source src="assets/video/video2.mp4" type="video/mp4" />
                                </video>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== videos  -========== --> */}
                        <div className="shapes-section mt-2">
                          <div className="shapes-head">
                            <ul>
                              <li>
                                <a href="#">Money</a>
                              </li>
                              <li>
                                <a href="#">See All</a>
                              </li>
                            </ul>
                          </div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <video poster="assets/video/video1.png" controls>
                                  <source src="assets/video/video1.mp4" type="video/mp4" />
                                </video>
                              </li>
                              <li>
                                <video poster="assets/video/video1.png" controls>
                                  <source src="assets/video/video1.mp4" type="video/mp4" />
                                </video>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${activeTabs.background ? 'show active' : 'fade'}`}
                    id="background"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="shapesGroup">
                        <ul>
                          <li className="sapesGroupItem">Black</li>
                          <li className="sapesGroupItem">Blue</li>
                          <li className="sapesGroupItem">Yellow</li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <div className="shapes-section">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-1.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-2.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ========== graphic======= --> */}
                        <div className="shapes-section mt-2">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-3.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-9.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== photos ========= --> */}
                        <div className="shapes-section mt-2">
                          <div className="shapes-head"></div>
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-4.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-5.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- ======== videos  -========== --> */}
                        <div className="shapes-section mt-2">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-6.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-4.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="shapes-section mt-2">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-3.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-9.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="shapes-section mt-2">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-3.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-9.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="shapes-section mt-2">
                          <div className="videoSapes">
                            <ul>
                              <li>
                                <img src="/images/background-3.png" alt="" />
                              </li>
                              <li>
                                <img src="/images/background-9.png" alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTabs.files ? 'show active' : 'fade'}`} id="files" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection foldersEC">
                        <p>Folder</p>
                      </div>
                      <div className="fileBody">
                        <a href="#">
                          <ul className="fileBox">
                            <li className="fileThumb">
                              <span>
                                <img src="/images/download-icon.png" alt="" />
                              </span>
                            </li>
                            <li className="fileContent">
                              <p>Purchased</p>
                            </li>
                          </ul>
                        </a>
                      </div>
                      <div className="fileBody">
                        <a href="#">
                          <ul className="fileBox">
                            <li className="fileThumb">
                              <span>
                                <img src="/images/star-icon.png" alt="" />
                              </span>
                            </li>
                            <li className="fileContent">
                              <p>Starred</p>
                            </li>
                          </ul>
                        </a>
                      </div>
                      <div className="fileBody">
                        <a href="#">
                          <ul className="fileBox">
                            <li className="fileThumb">
                              <span>
                                <img src="/images/plush-icon.png" alt="" />
                              </span>
                            </li>
                            <li className="fileContent">
                              <p>Create Folder</p>
                            </li>
                          </ul>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane ${activeTabs.more ? 'show active' : 'fade'}`} id="more" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="layout-section">
                      <div className="searchBoxSection">
                        <form action="">
                          <div className="searchMainBox">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Template" />
                            <button className="sr-icon">
                              <span>
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>

                      <div className="video-edit-main">
                        <ul className="moreIconBox">
                          <li>
                            <a href="#">
                              <img src="/images/style-icon.png" alt="" />
                              <p>Style</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/video-icon.png" alt="" />
                              <p>video</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/audio-icon.png" alt="" />
                              <p>audio</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="video-edit-main">
                        <ul className="moreIconBox">
                          <li>
                            <a href="#">
                              <img src="/images/photo-icon.png" alt="" />
                              <p>Photo</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/background-icon.png" alt="" />
                              <p>Bg</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="/images/graphic-icon.png" alt="" />
                              <p>Graphic</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="tempCollapse" id="tempCollapseMenu" onClick={toggleSideNav}>
                  <span>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    {/* <i className="fa-solid fa-angles-left"></i> */}
                  </span>
                </button>
              </div>
              <div className="videorightInfo videorightInfotablet">
                <div className="videoInfoHeader">
                  <div className="infoHeaderBtn text-center">
                    <button>All Changes Saved</button>
                  </div>
                </div>
                <div className="videoInfoBody">
                  <div className="btn-box">
                    <button className="slidesBtn active">Slides</button>
                    <button className="slidesBtn">Comments</button>
                  </div>
                  <div className="nexpageBtn text-center  ">
                    <button>
                      <span>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                      New Page
                    </button>
                  </div>
                  {/* <!-- ======== video info template===== --> */}
                  <div className="videoInfoTemp">
                    <div className="tempBox">
                      <img src="/images/layout-video-template.jpg" alt="" />
                    </div>
                    <div className="tempBox">
                      <img src="/images/layout-video-template.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="videoInfoFooter">
                  <div className="footerBtn">
                    <button>Download</button>
                    <button>Share</button>
                  </div>
                </div>
              </div>
              <div className="videoEditingSoftware" style={{ width: sideNavOpen ? '72%' : '50%' }}>
                <div className="videoEditingSoftwareHeader">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-2 video-edit-hd-area">
                      <div className="videoTitle">
                        <button className="title-btn">Untitled</button>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 video-edit-hd-area">
                      <div className="video-tool">
                        <ul>
                          <li className="ruler">
                            <span>Ruler</span>
                          </li>
                          <li className="toolBtn">
                            {' '}
                            <span>
                              <img src="/images/left-arrow.png" alt="" />
                            </span>{' '}
                          </li>
                          <li className="toolBtn">
                            {' '}
                            <span>
                              <img src="/images/down-arrow.png" alt="" />
                            </span>{' '}
                          </li>
                          <li className="toolBtn">
                            <span>
                              <img src="/images/right-arrow.png" alt="" />
                            </span>
                          </li>
                          <li className="toolBtn">
                            {' '}
                            <span>
                              <img src="/images/down-arrow.png" alt="" />{' '}
                            </span>
                          </li>
                          <li className="toolBtn">
                            <span>
                              <img src="/images/play-icon.png" alt="" />
                            </span>
                          </li>
                          <li className="toolBtn">
                            <span className="percent-btn">- 100% +</span>
                          </li>
                          <li className="toolBtn">
                            <span>
                              <img src="/images/play-button.png" alt="" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 video-edit-hd-area">
                      <div className="upgrade-sec">
                        <ul className="upgrade-list">
                          <li className="upgrade-btn">
                            <a href="" className="">
                              Upgrade
                            </a>
                          </li>
                          <li className="present-btn">
                            <a href="" className="">
                              Present
                            </a>
                          </li>
                          <li className="editing-humbergbtn">
                            <button>
                              <FontAwesomeIcon icon={faBars} />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="video-editing-ar">
                  <div className="video-edit-sec">
                    <img src="/images/layout-video-template.jpg" alt="" />
                  </div>
                </div>
                <div className="video-editing-timeline">
                  <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-11 col-md-11">
                      <div className="timelineSection">
                        <ul className="timelineItems">
                          <li className="videoTimeline">
                            <span>
                              <img src="/images/layout-video-template.jpg" alt="" />
                            </span>
                          </li>
                          <li className="videoTimeline">
                            <span>
                              <img src="/images/layout-video-template.jpg" alt="" />
                            </span>
                          </li>
                          <li className="videoTimeline">
                            <button className="addVideBtn">
                              <span>
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            </button>
                          </li>
                        </ul>
                        {/* <!-- ========== timeline range======= --> */}
                        <div className="videoTimelineRange">
                          <div className="ranger-slider">
                            <span id="sldvalue"></span>
                          </div>
                          <div className="rangeField">
                            <input type="range" name="" id="slideRange" value="0" onChange={() => console.log('hel')} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="videorightInfo videorightInfoDesktop">
                <div className="videoInfoHeader">
                  <div className="infoHeaderBtn text-center">
                    <button>All Changes Saved</button>
                  </div>
                </div>
                <div className="videoInfoBody">
                  <div className="btn-box">
                    <button className="slidesBtn active">Slides</button>
                    <button className="slidesBtn">Comments</button>
                  </div>
                  <div className="nexpageBtn text-center  ">
                    <button>
                      <span>
                        <i className="fa-solid fa-plus"></i>
                      </span>
                      New Page
                    </button>
                  </div>
                  {/* <!-- ======== video info template===== --> */}
                  <div className="videoInfoTemp">
                    <div className="tempBox">
                      <img src="/images/layout-video-template.jpg" alt="" />
                    </div>
                    <div className="tempBox">
                      <img src="/images/layout-video-template.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="videoInfoFooter">
                  <div className="footerBtn">
                    <button>Download</button>
                    <button>Share</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditSection;
