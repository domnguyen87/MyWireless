import React from 'react'

class Header extends React.Component {

    render() {
        return(
            <header className="header fixed clearfix hc-element-visible">
            <div className="container">
              <div className="row">
                <div className="col-md-auto hidden-md-down">
                  {/* {/* <!-- header-first start --> */}
                  <div className="header-first clearfix">
  
                    {/* <!-- logo --> */}
                    <div id="logo" className="logo">
                      <a href="index.html"><img id="logo_img" src="images/logo_light_blue.png" alt="The Project" /></a>
                    </div>
  
                    {/* <!-- name-and-slogan --> */}
                    <div className="site-slogan">
                    </div>
  
                  </div>
                  {/* <!-- header-first end --> */}
  
                </div>
                <div className="col-lg-8 mr-auto">
  
                  {/* <!-- header-second start --> */}
                  {/* <!-- ================ --> */}
                  <div className="header-second clearfix">
                    
                  {/* <!-- main-navigation start --> */}
                  {/* <!-- classNamees: --> */}
                  {/* <!-- "onclick": Makes the dropdowns open on click, this the default bootstrap behavior e.g. className="main-navigation onclick" --> */}
                  {/* <!-- "animated": Enables animations on dropdowns opening e.g. className="main-navigation animated" --> */}
                  {/* <!-- ================ --> */}
                  <div className="main-navigation main-navigation--mega-menu  animated">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                      <div className="navbar-brand clearfix hidden-lg-up">
  
                        {/* <!-- logo --> */}
                        <div id="logo-mobile" className="logo">
                          <a href="index.html"><img id="logo-img-mobile" src="images/logo_light_blue.png" alt="The Project" /></a>
                        </div>
  
                        
  
                      </div>
                      
                      {/* <!-- header dropdown buttons --> */}
                      <div className="header-dropdown-buttons hidden-lg-up p-0 mr-auto ml-3">
                        <div className="btn-group">
                          <button type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" id="header-drop-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search"></i></button>
                          <ul className="dropdown-menu dropdown-menu-right dropdown-animation" aria-labelledby="header-drop-3">
                            <li>
                              <form role="search" className="search-box margin-clear">
                                <div className="form-group has-feedback">
                                  <input type="text" className="form-control" placeholder="Search" />
                                  <i className="fa fa-search form-control-feedback"></i>
                                </div>
                              </form>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" id="header-drop-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-shopping-basket"></i><span className="cart-count default-bg">8</span></button>
                          
                        </div>
                      </div>
                      {/* <!-- header dropdown buttons end --> */}
                      
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
  
                      <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        {/* <!-- main-menu --> */}
                        <ul className="navbar-nav mr-xl-auto">
  
                          {/* <!-- mega-menu start --> */}
                          <li className="nav-item dropdown active mega-menu mega-menu--wide">
                            <a href="/" className="nav-link " >Home</a>
                            {/* <ul className="dropdown-menu" aria-labelledby="first-dropdown">
                              <li>
                                <div className="row">
                                  <div className="col-md-12">
                                    <h4 className="title"><i className="fa fa-laptop pl-2"></i> Demos</h4>
                                    <div className="row">
                                      <div className="col-lg-3">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="index.html"><i className="fa fa-home pl-2"></i>Home Default</a></li>
                                          <li className="active"><a href="index-rtl.html"><i className="fa fa-home pl-2"></i>Home Default - RTL <span className="badge">v1.4</span></a></li>
                                          <li ><a href="index-corporate-1.html"><i className="fa fa-suitcase pl-2"></i>Corporate 1</a></li>
                                          <li ><a href="index-corporate-2.html"><i className="fa fa-suitcase pl-2"></i>Corporate 2</a></li>
                                          <li ><a href="index-corporate-3.html"><i className="fa fa-suitcase pl-2"></i>Corporate 3</a></li>
                                          <li ><a href="index-corporate-4.html"><i className="fa fa-suitcase pl-2"></i>Corporate 4 <span className="badge">v1.2</span></a></li>
                                          <li ><a href="index-corporate-5.html"><i className="fa fa-suitcase pl-2"></i>Corporate 5 (Law Firm) <span className="badge">v1.3</span></a></li>
                                          <li ><a href="index-corporate-6.html"><i className="fa fa-suitcase pl-2"></i>Corporate 6<span className="badge">v2.1</span></a></li>
                                        </ul>
                                      </div>
                                      <div className="col-lg-3">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="index-shop.html"><i className="fa fa-shopping-basket pl-2"></i>Commerce 1</a></li>
                                          <li ><a href="index-shop-2.html"><i className="fa fa-shopping-basket pl-2"></i>Commerce 2</a></li>
                                          <li ><a href="index-portfolio.html"><i className="fa fa-briefcase pl-2"></i>Portfolio/Agency</a></li>
                                          <li ><a href="index-portfolio-2.html"><i className="fa fa-camera pl-2"></i>Portfolio 2 <span className="badge">v1.4</span></a></li>
                                          <li ><a href="index-medical.html"><i className="fa fa-ambulance pl-2"></i>Medical</a></li>
                                          <li ><a href="index-restaurant.html"><i className="fa fa-cutlery pl-2"></i>Restaurant</a></li>
                                          <li ><a href="index-restaurant-2.html"><i className="fa fa-cutlery pl-2"></i>Restaurant 2 <span className="badge">v1.3</span></a></li>
                                          <li ><a href="index-wedding.html"><i className="fa fa-heart pl-2"></i>Wedding</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-lg-3">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="index-landing.html"><i className="fa fa-star pl-2"></i>Landing Page</a></li>
                                          <li ><a href="index-landing-2.html"><i className="fa fa-star pl-2"></i>Landing Page 2 <span className="badge">v1.3</span></a></li>
                                          <li ><a href="page-coming-soon.html"><i className="fa fa-clock-o pl-2"></i>Coming Soon</a></li>
                                          <li ><a href="index-one-page.html"><i className="fa fa-home pl-2"></i>One Page Version</a></li>
                                          <li ><a href="index-construction.html"><i className="fa fa-building pl-2"></i>Construction <span className="badge">v1.1</span></a></li>
                                          <li ><a href="index-education.html"><i className="fa fa-graduation-cap pl-2"></i>Education <span className="badge">v1.1</span></a></li>
                                          <li ><a href="index-hotel.html"><i className="fa fa-bed pl-2"></i>Hotel <span className="badge">v1.1</span></a></li>
                                          <li ><a href="index-blog.html"><i className="fa fa-pencil pl-2"></i>Blog <span className="badge">v1.1</span></a></li>
                                        </ul>
                                      </div>
                                      <div className="col-lg-3">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="index-blog-2.html"><i className="fa fa-pencil pl-2"></i>Blog 2<span className="badge">v1.3</span></a></li>
                                          <li ><a href="index-beauty.html"><i className="fa fa-magic pl-2"></i>Beauty Center <span className="badge">v1.1</span></a></li>
                                          <li ><a href="index-gym.html"><i className="fa fa-heartbeat pl-2"></i>Gym <span className="badge">v1.2</span></a></li>
                                          <li ><a href="index-resume.html"><i className="fa fa-user pl-2"></i>Resume <span className="badge">v1.2</span></a></li>
                                          <li ><a href="index-agency.html"><i className="fa fa-users pl-2"></i>Agency <span className="badge">v1.2</span></a></li>
                                          <li ><a href="index-agency-2.html"><i className="fa fa-users pl-2"></i>Agency 2<span className="badge">v2.1</span></a></li>
                                          <li ><a href="index-logistics.html"><i className="fa fa-truck pl-2"></i>Logistics <span className="badge">v1.2</span></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul> */}
                          </li>
                          {/* <!-- mega-menu end --> */}
                          {/* <!-- mega-menu start --> */}
                          <li className="nav-item dropdown  mega-menu mega-menu--wide">
                          <a href="#footer" className="nav-link ">Repairs</a>
                            {/* <ul className="dropdown-menu" aria-labelledby="second-dropdown">
                              <li>
                                <div className="row">
                                  <div className="col-lg-8">
                                    <h4 className="title">Pages</h4>
                                    <div className="row">
                                      <div className="col-lg-4">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="page-about.html"><i className="fa fa-angle-left"></i>About Us 1</a></li>
                                          <li ><a href="page-about-2.html"><i className="fa fa-angle-left"></i>About Us 2</a></li>
                                          <li ><a href="page-about-3.html"><i className="fa fa-angle-left"></i>About Us 3</a></li>
                                          <li ><a href="page-about-4.html"><i className="fa fa-angle-left"></i>About Us 4</a></li>
                                          <li ><a href="page-about-me.html"><i className="fa fa-angle-left"></i>About Me</a></li>
                                          <li ><a href="page-team.html"><i className="fa fa-angle-left"></i>Our Team - Options 1</a></li>
                                          <li ><a href="page-team-2.html"><i className="fa fa-angle-left"></i>Our Team - Options 2</a></li>
                                          <li ><a href="page-team-3.html"><i className="fa fa-angle-left"></i>Our Team - Options 3</a></li>
                                          <li ><a href="page-coming-soon.html"><i className="fa fa-angle-left"></i>Coming Soon Page</a></li>
                                          <li ><a href="page-faq.html"><i className="fa fa-angle-left"></i>FAQ page</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-lg-4">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="page-services.html"><i className="fa fa-angle-left"></i>Services 1</a></li>
                                          <li ><a href="page-services-2.html"><i className="fa fa-angle-left"></i>Services 2</a></li>
                                          <li ><a href="page-services-3.html"><i className="fa fa-angle-left"></i>Services 3</a></li>
                                          <li ><a href="page-contact.html"><i className="fa fa-angle-left"></i>Contact 1</a></li>
                                          <li ><a href="page-contact-2.html"><i className="fa fa-angle-left"></i>Contact 2</a></li>
                                          <li ><a href="page-contact-3.html"><i className="fa fa-angle-left"></i>Contact 3</a></li>
                                          <li ><a href="page-login.html"><i className="fa fa-angle-left"></i>Login 1</a></li>
                                          <li ><a href="page-login-2.html"><i className="fa fa-angle-left"></i>Login 2 - Fullsreen</a></li>
                                          <li ><a href="page-signup.html"><i className="fa fa-angle-left"></i>Sign Up 1</a></li>
                                          <li ><a href="page-signup-2.html"><i className="fa fa-angle-left"></i>Sign Up 2 - Fullsreen</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-lg-4">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="page-404.html"><i className="fa fa-angle-left"></i>404 error</a></li>
                                          <li ><a href="page-404-2.html"><i className="fa fa-angle-left"></i>404 error - Fullscreen</a></li>
                                          <li ><a href="page-left-sidebar.html"><i className="fa fa-angle-left"></i>Left Sidebar</a></li>
                                          <li ><a href="page-right-sidebar.html"><i className="fa fa-angle-left"></i>Right Sidebar</a></li>
                                          <li ><a href="page-two-sidebars.html"><i className="fa fa-angle-left"></i>Two Sidebars</a></li>
                                          <li ><a href="page-two-sidebars-left.html"><i className="fa fa-angle-left"></i>Two Sidebars Left</a></li>
                                          <li ><a href="page-two-sidebars-right.html"><i className="fa fa-angle-left"></i>Two Sidebars Right</a></li>
                                          <li ><a href="page-no-sidebars.html"><i className="fa fa-angle-left"></i>No Sidebars</a></li>
                                          <li ><a href="page-sitemap.html"><i className="fa fa-angle-left"></i>Sitemap</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-3 hidden-md-down">
                                    <h4 className="title">Premium HTML5 Template</h4>
                                    <p className="mb-2">The Project is perfectly suitable for corporate, business and company webpages.</p>
                                    <img src="images/section-image-3.png" alt="The Project" />
                                  </div>
                                </div>
                              </li>
                            </ul> */}
                          </li>
                          {/* <!-- mega-menu end --> */}
                          <li className="nav-item dropdown ">
                            <a href="/" className="nav-link">Shop</a>
                            {/* <ul className="dropdown-menu" aria-labelledby="third-dropdown">
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Headers <span className="badge">v1.2</span></a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-headers-default.html">Default/Semi-Transparent</a></li>
                                  <li ><a href="features-headers-default-dark.html">Dark/Semi-Transparent</a></li>
                                  <li ><a href="features-headers-gradient-dark.html">Gradient Dark <span className="badge">v1.2</span></a></li>
                                  <li ><a href="features-headers-gradient-light.html">Gradient Light <span className="badge">v1.2</span></a></li>
                                  <li ><a href="features-headers-classNameic.html">ClassNameic Light</a></li>
                                  <li ><a href="features-headers-classNameic-dark.html">ClassNameic Dark</a></li>
                                  <li ><a href="features-headers-colored.html">Colored/Light</a></li>
                                  <li ><a href="features-headers-colored-dark.html">Colored/Dark</a></li>
                                  <li ><a href="features-headers-full-width.html">Full Width</a></li>
                                  <li ><a href="features-headers-offcanvas-left.html">Offcanvas Left Side</a></li>
                                  <li ><a href="features-headers-offcanvas-right.html">Offcanvas Right Side</a></li>
                                  <li ><a href="features-headers-logo-centered.html">Logo Centered</a></li>
                                  <li ><a href="features-headers-slider-top.html">Slider Top</a></li>
                                  <li ><a href="features-headers-simple.html">Simple Static</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Menus <span className="badge">v2.1</span></a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-headers-default.html">Default/On Hover Menu</a></li>
                                  <li ><a href="features-menus-onhover-no-animations.html">On Hover Menu - No Animations</a></li>
                                  <li ><a href="features-menus-onclick.html">On Click Menu - With Animations</a></li>
                                  <li ><a href="features-menus-onclick-no-animations.html">On Click Menu - No Animations</a></li>
                                  <li ><a href="features-menus-style-2.html">Menu Style 2 <span className="badge">v2.1</span></a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Footers <span className="badge">v2.1</span></a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-footers-default.html#footer">Default</a></li>
                                  <li ><a href="features-footers-contact-form.html#footer">Contact Form</a></li>
                                  <li ><a href="features-footers-contact-form-2.html#footer">Contact Form 2 <span className="badge">v1.2</span></a></li>
                                  <li ><a href="features-footers-contact-form-3.html#footer">Contact Form 3 <span className="badge">v2.1</span></a></li>
                                  <li ><a href="features-footers-google-maps.html#footer">Google Maps</a></li>
                                  <li ><a href="features-footers-subscribe.html#footer">Subscribe Form</a></li>
                                  <li ><a href="features-footers-minimal.html#footer">Minimal</a></li>
                                  <li ><a href="features-footers-links.html#footer">Links <span className="badge">v1.1</span></a></li>
                                  <li ><a href="features-footers-full-width.html#footer">Full Width <span className="badge">v1.2</span></a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Main Sliders <span className="badge">v2.1</span></a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-sliders-fullscreen.html">Full Screen</a></li>
                                  <li ><a href="features-sliders-fullscreen-2.html">Full Screen 2 <span className="badge">v2.1</span></a></li>
                                  <li ><a href="features-sliders-fullwidth.html">Full Width</a></li>
                                  <li ><a href="features-sliders-fullwidth-big-height.html">Full Width - Big Height</a></li>
                                  <li ><a href="features-sliders-boxedwidth-light.html">Boxed Width - Light Bg</a></li>
                                  <li ><a href="features-sliders-boxedwidth-dark.html">Boxed Width - Dark Bg</a></li>
                                  <li ><a href="features-sliders-boxedwidth-default.html">Boxed Width - Default Bg</a></li>
                                  <li ><a href="features-sliders-video-background.html">Video Background</a></li>
                                  <li ><a href="features-sliders-text-rotator.html">Text Rotator</a></li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Email Templates <span className="badge">v1.1</span></a>
                                <ul className="dropdown-menu">
                                  <li><a target="_blank" href="email_templates/email_template_blue.html">Blue</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_brown.html">Brown</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_cool_green.html">Cool Green</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_dark_cyan.html">Dark Cyan</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_dark_red.html">Dark Red</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_gold.html">Gold</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_gray.html">Gray</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_green.html">Green</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_light_blue.html">Light Blue</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_orange.html">Orange</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_pink.html">Pink</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_purple.html">Purple</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_red.html">Red</a></li>
                                  <li><a target="_blank" href="email_templates/email_template_vivid_red.html">Vivid Red</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Pricing Tables</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-pricing-tables-1.html">Pricing Tables 1</a></li>
                                  <li ><a href="features-pricing-tables-2.html">Pricing Tables 2</a></li>
                                  <li ><a href="features-pricing-tables-3.html">Pricing Tables 3</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Icons</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-icons-fontawesome.html">Font Awesome</a></li>
                                </ul>
                              </li>
                              <li ><a href="features-dark-page.html">Dark Page</a></li>
                              <li className="dropdown ">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Typography <span className="badge">v2.1</span></a>
                                <ul className="dropdown-menu">
                                  <li ><a href="features-typography.html">Font Scheme 1</a></li>
                                  <li ><a href="features-typography-2.html">Font Scheme 2</a></li>
                                  <li ><a href="features-typography-3.html">Font Scheme 3 <span className="badge">v2.1</span></a></li>
                                  <li ><a href="features-typography-0.html">Font Scheme - OS Default</a></li>
                                </ul>
                              </li>
                              <li ><a href="features-backgrounds.html">Backgrounds</a></li>
                              <li ><a href="features-grid.html">Grid</a></li>
                            </ul> */}
                          </li>
                          {/* <!-- mega-menu start --> */}
                          <li className="nav-item dropdown  mega-menu mega-menu--narrow">
                            <a href="#footer" className="nav-link smooth-scroll moving">Contact Us</a>
                            {/* <ul className="dropdown-menu" aria-labelledby="fourth-dropdown">
                              <li>
                                <div className="row">
                                  <div className="col-md-12">
                                    <h4 className="title"><i className="fa fa-magic pl-2"></i> Components</h4>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="components-social-icons.html"><i className="fa fa-share-alt pl-2"></i>Social Icons</a></li>
                                          <li ><a href="components-buttons.html"><i className="fa fa-flask pl-2"></i>Buttons</a></li>
                                          <li ><a href="components-forms.html"><i className="fa fa-align-justify pl-2"></i>Forms</a></li>
                                          <li ><a href="components-tabs-and-pills.html"><i className=" fa fa-list-ul pl-2"></i>Tabs &amp; Pills</a></li>
                                          <li ><a href="components-accordions.html"><i className="fa fa-bars pl-2"></i>Accordions</a></li>
                                          <li ><a href="components-progress-bars.html"><i className="fa fa-line-chart pl-2"></i>Progress Bars</a></li>
                                          <li ><a href="components-call-to-action.html"><i className="fa fa-comments-o pl-2"></i>Call to Action Blocks</a></li>
                                          <li ><a href="components-alerts-and-callouts.html"><i className="fa fa-info-circle pl-2"></i>Alerts &amp; Callouts</a></li>
                                          <li ><a href="components-content-sliders.html"><i className="fa fa-star pl-2"></i>Content Sliders</a></li>
                                          <li ><a href="components-charts.html"><i className="fa fa-pie-chart pl-2"></i>Charts</a></li>
                                          <li ><a href="components-page-loaders.html"><i className="fa fa-circle-o-notch fa-spin"></i>Page Loaders <span className="badge">v1.1</span></a></li>
                                          <li ><a href="components-icon-boxes.html"><i className="fa fa-picture-o pl-2"></i>Icon Boxes</a></li>
                                        </ul>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="divider"></div>
                                        <ul className="menu">
                                          <li ><a href="components-image-boxes.html"><i className="fa fa-camera pl-2"></i>Image Boxes</a></li>
                                          <li ><a href="components-fullwidth-sections.html"><i className="fa fa-code pl-2"></i>Full Width Sections</a></li>
                                          <li ><a href="components-animations.html"><i className="fa fa-heart pl-2"></i>Animations</a></li>
                                          <li ><a href="components-video-and-audio.html"><i className="fa fa-play pl-2"></i>Video</a></li>
                                          <li ><a href="components-lightbox.html"><i className="fa fa-plus pl-2"></i>Lightbox</a></li>
                                          <li ><a href="components-counters.html"><i className="fa fa-sort-numeric-desc pl-2"></i>Counters</a></li>
                                          <li ><a href="components-modals.html"><i className="fa fa-arrows-alt pl-2"></i>Modals</a></li>
                                          <li ><a href="components-tables.html"><i className="fa fa-table pl-2"></i>Tables</a></li>
                                          <li ><a href="components-text-rotators.html"><i className="fa fa-rotate-left pl-2"></i>Text Rotators</a></li>
                                          <li ><a href="components-announcement-default.html"><i className="fa fa-bullhorn pl-2"></i>Announcements <span className="badge">v1.3</span></a></li>
                                          <li ><a href="components-separators.html"><i className="fa fa-star pl-2"></i>Separators <span className="badge">v1.3</span></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul> */}
                          </li>
                          {/* <!-- mega-menu end --> */}
                          {/* <li className="nav-item dropdown ">
                            <a href="portfolio-grid-2-3-col.html" className="nav-link dropdown-toggle" id="fifth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                            <ul className="dropdown-menu" aria-labelledby="fifth-dropdown">
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 1</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="portfolio-grid-1-2-col.html">2 Column</a></li>
                                  <li ><a href="portfolio-grid-1-3-col.html">3 Column</a></li>
                                  <li ><a href="portfolio-grid-1-4-col.html">4 Column</a></li>
                                  <li ><a href="portfolio-grid-1-sidebar.html">With Sidebar</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 2</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="portfolio-grid-2-2-col.html">2 Column</a></li>
                                  <li ><a href="portfolio-grid-2-3-col.html">3 Column</a></li>
                                  <li ><a href="portfolio-grid-2-4-col.html">4 Column</a></li>
                                  <li ><a href="portfolio-grid-2-sidebar.html">With Sidebar</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 3 - Dark</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="portfolio-grid-3-2-col.html">2 Column</a></li>
                                  <li ><a href="portfolio-grid-3-3-col.html">3 Column</a></li>
                                  <li ><a href="portfolio-grid-3-4-col.html">4 Column</a></li>
                                  <li ><a href="portfolio-grid-3-sidebar.html">With Sidebar</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Fullwidth</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="portfolio-fullwidth-2-col.html">2 Column</a></li>
                                  <li ><a href="portfolio-fullwidth-3-col.html">3 Column</a></li>
                                  <li ><a href="portfolio-fullwidth-4-col.html">4 Column</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio List</a>
                                <ul className="dropdown-menu">
                                  <li ><a href="portfolio-list-1.html">List - Large Images</a></li>
                                  <li ><a href="portfolio-list-2.html">List - Small Images</a></li>
                                  <li ><a href="portfolio-list-sidebar.html">With Sidebar</a></li>
                                </ul>
                              </li>
                              <li ><a href="portfolio-item.html">Single Item 1</a></li>
                              <li ><a href="portfolio-item-2.html">Single Item 2</a></li>
                              <li ><a href="portfolio-item-3.html">Single Item 3</a></li>
                            </ul>
                          </li> */}
                          {/* <li className="nav-item dropdown ">
                            <a href="index-shop.html" className="nav-link dropdown-toggle" id="sixth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="sixth-dropdown">
                              <li ><a href="index-shop.html">Shop Home 1</a></li>
                              <li ><a href="index-shop-2.html">Shop Home 2</a></li>
                              <li ><a href="shop-listing-4col.html">Grid - 4 Columns</a></li>
                              <li ><a href="shop-listing-3col.html">Grid - 3 Columns</a></li>
                              <li ><a href="shop-listing-2col.html">Grid - 2 Columns</a></li>
                              <li ><a href="shop-listing-sidebar.html">Grid - With Sidebar</a></li>
                              <li ><a href="shop-listing-list.html">List</a></li>
                              <li ><a href="shop-product.html">Product Page</a></li>
                              <li ><a href="shop-product-2.html">Product Page 2 <span className="badge">v1.3</span></a></li>
                              <li ><a href="shop-cart.html">Shopping Cart</a></li>
                              <li ><a href="shop-checkout.html">Checkout Page - Step 1</a></li>
                              <li ><a href="shop-checkout-payment.html">Checkout Page - Step 2</a></li>
                              <li ><a href="shop-checkout-review.html">Checkout Page - Step 3</a></li>
                              <li ><a href="shop-invoice.html">Invoice</a></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown ">
                            <a href="blog-large-image-right-sidebar.html" className="nav-link dropdown-toggle" id="seventh-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                            <ul className="dropdown-menu" aria-labelledby="seventh-dropdown">
                              <li ><a href="index-blog.html">Blog Home <span className="badge">v1.1</span></a></li>
                              <li ><a href="index-blog-2.html">Blog Home 2 <span className="badge">v1.3</span></a></li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Large Image</a>
                                <ul className="dropdown-menu to-left">
                                  <li ><a href="blog-large-image-right-sidebar.html">Right Sidebar</a></li>
                                  <li ><a href="blog-large-image-left-sidebar.html">Left Sidebar</a></li>
                                  <li ><a href="blog-large-image-no-sidebar.html">Without Sidebar</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Medium Image</a>
                                <ul className="dropdown-menu to-left">
                                  <li ><a href="blog-medium-image-right-sidebar.html">Right Sidebar</a></li>
                                  <li ><a href="blog-medium-image-left-sidebar.html">Left Sidebar</a></li>
                                  <li ><a href="blog-medium-image-no-sidebar.html">Without Sidebar</a></li>
                                </ul>
                              </li>
                              <li className="dropdown ">
                                <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Masonry</a>
                                <ul className="dropdown-menu to-left">
                                  <li ><a href="blog-masonry-right-sidebar.html">Right Sidebar</a></li>
                                  <li ><a href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                                  <li ><a href="blog-masonry-no-sidebar.html">Without Sidebar</a></li>
                                </ul>
                              </li>
                              <li ><a href="blog-timeline.html">Timeline</a></li>
                              <li ><a href="blog-post.html">Blog Post</a></li>
                            </ul>
                          </li> */}
                        </ul>
                        {/* <!-- main-menu end --> */}
                      </div>
                    </nav>
                  </div>
                  {/* <!-- main-navigation end --> */}
                  </div>
                  {/* <!-- header-second end --> */}
  
                </div>
                <div className="col-auto hidden-md-down">
                  <div className="header-dropdown-buttons">
                    {/* <div className="btn-group">
                      <button type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" id="header-drop-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search"></i></button>
                      <ul className="dropdown-menu dropdown-menu-right dropdown-animation" aria-labelledby="header-drop-1">
                        <li>
                          <form role="search" className="search-box margin-clear">
                            <div className="form-group has-feedback">
                              <input type="text" className="form-control" placeholder="Search" />
                              <i className="fa fa-search form-control-feedback"></i>
                            </div>
                          </form>
                        </li>
                      </ul>
                    </div> */}
                    <div className="btn-group">
                      <button type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" id="header-drop-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-shopping-basket"></i><span className="cart-count default-bg">8</span></button>
                    </div>
                    <div className="btn-group">
                      <a className="nav-link" >(714) 892-8588</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default Header