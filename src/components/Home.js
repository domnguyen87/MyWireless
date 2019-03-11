import React from 'react'

class Home extends React.Component {

    render() {
        return (

            <React.Fragment>
                <div className="banner clearfix">

                    {/* <!-- slideshow start -->
                <!-- ================ --> */}
                    <div className="slideshow">

                        {/* <!-- slider revolution start --> */}
                        {/* <!-- ================ --> */}
                        <div className="slider-revolution-5-container">
                            <div id="slider-banner-fullscreen" className="slider-banner-fullscreen rev_slider" data-version="5.0">
                                <ul className="slides">
                                    {/* <!-- slide 1 start --> */}
                                    {/* <!-- ================ --> */}
                                    <li className="text-center" data-transition="crossfade" data-slotamount="default" data-masterspeed="default" data-title="Slide Title">

                                        {/* <!-- main image --> */}
                                        <img src="images/slider-fullscreen-slide-1.jpg" alt="slidebg1" data-bgposition="center center" data-bgrepeat="no-repeat" data-bgfit="cover" className="rev-slidebg" />

                                        {/* <!-- Transparent Background --> */}
                                        <div className="tp-caption dark-translucent-bg"
                                            data-x="center"
                                            data-y="center"
                                            data-start="0"
                                            data-transform_idle="o:1;"
                                            data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                                            data-transform_out="o:0;s:600;"
                                            data-width="5000"
                                            data-height="5000">
                                        </div>

                                        {/* <!-- LAYER NR. 1 --> */}
                                        <div className="tp-caption xlarge_white"
                                            data-x="center"
                                            data-y="110"
                                            data-start="1000"
                                            data-end="2500"
                                            data-splitin="chars"
                                            data-splitout="chars"
                                            data-elementdelay="0.1"
                                            data-endelementdelay="0.1"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];o:0;s:600;e:Power4.easeInOut;"
                                            data-transform_out="x:[-50%];o:0;s:200;e:Power2.easeInOut;"
                                            data-mask_in="x:0;y:0;s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Inspiration
                            </div>

                                        {/* <!-- LAYER NR. 2 --> */}
                                        <div className="tp-caption xlarge_white"
                                            data-x="center"
                                            data-y="110"
                                            data-start="3100"
                                            data-end="4600"
                                            data-splitin="chars"
                                            data-splitout="chars"
                                            data-elementdelay="0.1"
                                            data-endelementdelay="0.1"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[-50%];o:0;s:600;e:Power4.easeInOut;"
                                            data-transform_out="x:[-50%];o:0;s:200;e:Power2.easeInOut;"
                                            data-mask_in="x:0;y:0;s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Innovation
                            </div>

                                        {/* <!-- LAYER NR. 3 --> */}
                                        <div className="tp-caption xlarge_white"
                                            data-x="center"
                                            data-y="110"
                                            data-start="5200"
                                            data-end="6700"
                                            data-splitin="chars"
                                            data-splitout="chars"
                                            data-elementdelay="0.1"
                                            data-endelementdelay="0.1"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];o:0;s:600;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:[-50%];o:0;s:200;e:Power2.easeInOut;"
                                            data-mask_in="x:0;y:0;s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Success
                            </div>

                                        {/* <!-- LAYER NR. 4 --> */}
                                        <div className="tp-caption large_white"
                                            data-x="center"
                                            data-y="110"
                                            data-start="7000"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[-100%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:0;s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[-100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"><span className="logo-font">The <span className="text-default">Project</span></span> <br /> Powerful Bootstrap Template
                            </div>


                                        {/* <!-- LAYER NR. 5 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="250"
                                            data-hoffset="-232"
                                            data-start="1000"
                                            data-end="6200"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];y:0;o:0;s:700;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:0;o:0;s:700;e:Power2.easeInOut;"><span className="icon large circle"><i className="circle fa fa-lightbulb-o"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 6 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="250"
                                            data-start="3100"
                                            data-end="6200"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[-50%];y:0;o:0;s:700;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:0;o:0;s:700;e:Power2.easeInOut;"><span className="icon large circle"><i className="circle fa fa-rotate-left"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 7 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="250"
                                            data-hoffset="232"
                                            data-start="5200"
                                            data-end="6200"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];y:0;o:0;s:700;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:0;o:0;s:700;e:Power2.easeInOut;"><span className="icon large circle"><i className="circle fa fa-line-chart"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 8 --> */}
                                        <div className="tp-caption tp-resizeme large_white"
                                            data-x="center"
                                            data-y="210"
                                            data-start="6400"
                                            data-end="10000"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[-100%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:0;s:1000;e:Power2.easeInOut;"><div className="separator light"></div>
                                        </div>

                                        {/* <!-- LAYER NR. 9 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="center"
                                            data-y="250"
                                            data-start="6800"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[-50%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:0;s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[-50%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nesciunt, maiores, aliquid. Repellat eum numquam aliquid culpa offici, <br /> tenetur fugiat dolorum sapiente eligendi...
                            </div>

                                        {/* <!-- LAYER NR. 10 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="bottom"
                                            data-voffset="100"
                                            data-start="1250"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:2000;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                                            <a href="#page-start" className="btn btn-lg moving smooth-scroll"><i className="fa fa-angle-down"></i><i className="fa fa-angle-down"></i><i className="fa          fa-angle-down"></i></a>
                                        </div>
                                    </li>
                                    {/* <!-- slide 1 end --> */}

                                    {/* <!-- slide 2 start --> */}
                                    {/* <!-- ================ --> */}
                                    <li className="text-right" data-transition="crossfade" data-slotamount="7" data-masterspeed="default" data-title="Premium HTML5 Bootstrap Theme">

                                        {/* <!-- main image --> */}
                                        <img src="images/slider-fullscreen-slide-2.jpg" alt="slidebg2" data-bgposition="center center" data-bgrepeat="no-repeat" data-bgfit="cover" className="rev-slidebg" />

                                        {/* <!-- Transparent Background --> */}
                                        <div className="tp-caption dark-translucent-bg"
                                            data-x="center"
                                            data-y="center"
                                            data-start="0"
                                            data-transform_idle="o:1;"
                                            data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                                            data-transform_out="o:0;s:600;"
                                            data-width="5000"
                                            data-height="5000">
                                        </div>

                                        {/* <!-- LAYER NR. 1 --> */}
                                        <div className="tp-caption large_white"
                                            data-x="right"
                                            data-y="110"
                                            data-start="1000"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"><span className="logo-font">The Project</span> <br /> Premium HTML5 Bootstrap Theme
                        </div>

                                        {/* <!-- LAYER NR. 2 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="240"
                                            data-speed="500"
                                            data-start="1200"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">100% Responsive <span className="icon default-bg circle small hidden-xs"><i className="fa fa-laptop"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 3 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="300"
                                            data-speed="500"
                                            data-start="1400"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Bootstrap Based <span className="icon default-bg circle small hidden-xs"><i className="fa fa-check"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 4 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="360"
                                            data-speed="500"
                                            data-start="1600"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Packed Full of Features <span className="icon default-bg circle small hidden-xs"><i className="fa fa-gift"></i></        span>
                                        </div>

                                        {/* <!-- LAYER NR. 5 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="420"
                                            data-speed="500"
                                            data-start="1800"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Very Elegant Design <span className="icon default-bg circle small hidden-xs"><i className="fa        fa-hourglass-half"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 6 --> */}
                                        <div className="tp-caption small_white"
                                            data-x="right"
                                            data-y="490"
                                            data-speed="500"
                                            data-start="2000"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"><a href="#" className="btn btn-default btn-lg btn-animated">Purchase <i className="fa fa-cart-arrow-down"></i></a>
                                        </div>
                                    </li>
                                    {/* <!-- slide 2 end --> */}
                                </ul>
                                <div className="tp-bannertimer"></div>
                            </div>
                        </div>
                        {/* <!-- slider revolution end --> */}
                    </div>
                    {/* <!-- slideshow end --> */}

                </div>

                <div id="page-start"></div>

                <section className="light-gray-bg pv-30 clearfix">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-8">
                                <h2 className="text-center mt-4">Core <strong>Features</strong></h2>
                                <div className="separator"></div>
                                <p className="large text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptas facere vero ex tempora saepe perspiciatis ducimus sequi hello.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                    <span className="icon default-bg circle"><i className="fa fa-diamond"></i></span>
                                    <h3>asdasdasd &amp; elegant</h3>
                                    <div className="separator clearfix"></div>
                                    <p>Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem ipsum dolor sit amet, consectetur.</p>
                                    <a href="page-services.html">Read More <i className="pl-1 fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="150">
                                    <span className="icon default-bg circle"><i className="fa fa-connectdevelop"></i></span>
                                    <h3>Great Design</h3>
                                    <div className="separator clearfix"></div>
                                    <p>Iure sequi unde hic. Sapiente quaerat sequi inventore veritatis cumque lorem ipsum dolor sit amet, consectetur.</p>
                                    <a href="page-services.html">Read More <i className="pl-1 fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="200">
                                    <span className="icon default-bg circle"><i className="fa fa fa-snowflake-o"></i></span>
                                    <h3>Many Components</h3>
                                    <div className="separator clearfix"></div>
                                    <p>Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet, consectetur.</p>
                                    <a href="page-services.html">Read More <i className="pl-1 fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section default-bg clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="call-to-action text-center">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <h1 class="title">Don't Miss Out Our Offers</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quasi explicabo consequatur consectetur, a atque voluptate officiis eligendi nostrum.</p>
                                        </div>
                                        <div class="col-lg-4">
                                            <br />
                                            <p><a href="#" class="btn btn-lg btn-gray-transparent btn-animated">Learn More<i class="fa fa-arrow-right pl-20"></i></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="pv-30">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-lg-8">
                                <h2 class="text-center mt-4">Why <strong>Choose</strong> Us</h2>
                            <div class="separator"></div>
                            <p class="large text-center">Atque ducimus velit, earum quidem, iusto dolorem. Ex ipsam totam quas blanditiis, pariatur maxime ipsa iste, doloremque neque doloribus, error. Corrupti, tenetur.</p>
                            <br />
                            </div>
                        </div>
                    </div>
                    <div class="slick-carousel content-slider-with-large-controls">
                        <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <img src="images/section-image-1.png" alt="" />
                                </div>
                                <div class="col-lg-6">
                                    <p class="space-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At provident modi nobis dolores ratione, maiores beatae vel iste illoinciduntofficiased id cupiditate quasi excepturi</p>
                                    <div class="media">
                                        <div class="d-flex pr-20">
                                            <a href="#">
                                                <span class="icon circle small default-bg"><i class="fa fa-eye"></i> </span>
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Many Features</h4>
                                            Cras sit amet nibh libero, in gravida nulla. Sollicitudin.
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="d-flex pr-20">
                                            <a href="#">
                                                <span class="icon circle small default-bg"><i class="fa fa-trophy"></i> </span>
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Packed Full Of Features</h4>
                                            Cras sit amet nibh libero. Nulla vel metus scelerisque.
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="d-flex pr-20">
                                            <a href="#">
                                                <span class="icon circle small default-bg"><i class="fa fa-life-ring"></i> </span>
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Great Design</h4>
                                            Cras sit amet nibh libero. Nulla vel metus scelerisque.
                                        </div>
                                    </div>
                                    <p><a href="page-services.html" class="btn btn-default-transparent btn-animated">Learn More <i class="fa fa-arrow-right pl-10"></i></a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 text-right">
                                        <p class="space-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At provident modi nobis dolores ratione, maiores beatae vel iste illoinciduntofficia sed id cupiditate quasi excepturi</p>
                                        <div class="media">
                                            <div class="media-body">
                                                <h4 class="media-heading">Porro ullam volu</h4>
                                                Cras sit amet nibh libero, in gravida nulla. Sollicitudin.
                                            </div>
                                            <div class="d-flex pl-20">
                                                <a href="#">
                                                    <span class="icon circle small default-bg"><i class="fa fa-eye"></i> </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-body">
                                                <h4 class="media-heading">Packed Full Of Features</h4>
                                                Cras sit amet nibh libero. Nulla vel metus scelerisque.
                                            </div>
                                            <div class="d-flex pl-20">
                                                <a href="#">
                                                    <span class="icon circle small default-bg"><i class="fa fa-trophy"></i> </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-body">
                                                <h4 class="media-heading">Great Design</h4>
                                                Cras sit amet nibh libero. Nulla vel metus scelerisque.
                                            </div>
                                            <div class="d-flex pl-20">
                                                <a href="#">
                                                    <span class="icon circle small default-bg"><i class="fa fa-life-ring"></i> </span>
                                                </a>
                                            </div>
                                        </div>
                                        <p><a href="page-services.html" class="btn btn-default-transparent btn-animated">Learn More <i class="fa fa-arrow-right pl-10"></i></a></p>
                                    </div>
                                    <div class="col-lg-6">
                                        <img src="images/section-image-2.png" alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <section class="light-gray-bg pv-20">
                </section>

                <section class="pv-30">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-6">
                          <h2 class="mt-4">What We <strong>Offer</strong></h2>
                          <div class="separator-2"></div>
                          <p>Lorem ipsum dolor sit amet, lotrem <span class="text-default">some colored text</span>. Nulla explicabo <strong>attention to this</strong> blanditiis, ex cupiditate ipsam debitis rem.</p>
                          <ul class="list-icons">
                            <li class="hc-element-invisible" data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i class="fa fa-check-square-o"></i> 27 Predifined Home Pages</li>
                            <li class="hc-element-invisible" data-animation-effect="fadeInUpSmall" data-effect-delay="150"><i class="fa fa-check-square-o"></i> 190+ HTML files</li>
                            <li class="hc-element-invisible" data-animation-effect="fadeInUpSmall" data-effect-delay="200"><i class="fa fa-check-square-o"></i> Great Design</li>
                            <li class="hc-element-invisible" data-animation-effect="fadeInUpSmall" data-effect-delay="250"><i class="fa fa-check-square-o"></i> Many more...</li>
                          </ul>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et eius aut nisi dolore ut.</p>
                          <a href="page-about.html" class="btn btn-default-transparent btn-animation btn-animation--slide-horizontal btn-lg"><i class="fa fa-users pr-2"></i>Learn More</a>
                        </div>
                        <div class="col-lg-6">
                          <br />
                          {/* <!-- Nav tabs --> */}
                          <ul class="nav nav-tabs style-1" role="tablist">
                            <li class="nav-item"><a class="nav-link active" href="#home" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-heart pr-2"></i>We Love</a></li>
                            <li class="nav-item"><a class="nav-link" href="#profile" aria-controls="profile" role="tab" data-toggle="tab">What</a></li>
                            <li class="nav-item"><a class="nav-link" href="#messages" aria-controls="messages" role="tab" data-toggle="tab">We Do</a></li>
                          </ul>

                          {/* <!-- Tab panes --> */}
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade show active" id="home">
                              <div class="overlay-container overlay-visible">
                                <img src="images/section-image-3.jpg" alt="" />
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                  <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis sunt, quae alias impedit ea molestias recusandae.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="profile">
                              <h3>Laudantium voluptas excepturi hic evenie</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente tempore ipsam tenetur molestias eligendi provident! Itaque sapiente neque esse expedita voluptatibus qui officia, fuga          a tempora! Alias voluptate pariatur quo.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptas excepturi hic eveniet deleniti, voluptate fugit quod sapiente ut nulla voluptates neque a rerum! Sed             dolores enim veniam, dolor minus.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quos quidem amet sapiente praesentium unde, vel corrupti, vero dicta velit fuga ut at accusantium expedita inventore fugit           perferendis non reprehenderit.</p>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="messages">
                              <h3>Lorem ipsum dolor sit amet</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptas excepturi hic eveniet deleniti, voluptate fugit quod sapiente ut nulla voluptates neque a rerum! Sed             dolores enim veniam, dolor minus.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quos quidem amet sapiente praesentium unde, vel corrupti, vero dicta velit fuga ut at accusantium expedita inventore fugit           perferendis non reprehenderit.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente tempore ipsam tenetur molestias eligendi provident! Itaque sapiente neque esse expedita voluptatibus qui officia, fuga          a tempora! Alias voluptate pariatur quo.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                </section>

                <section class="pv-30 light-gray-bg padding-bottom-clear">
                    <div class="container">
                      <div class="row justify-content-md-center">
                        <div class="col-lg-8">
                          <h2 class="text-center mt-4">Our <strong>Portfolio</strong></h2>
                          <div class="separator"></div>
                          <p class="large text-center">Atque ducimus velit, earum quidem, iusto dolorem. Ex ipsam totam quas blanditiis, pariatur maxime ipsa iste, doloremque neque doloribus, error. Corrupti, tenetur.</p>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div class="space-bottom">
                      <div class="slick-carousel carousel">
                        <div class="image-box hc-shadow text-center">
                          <div class="overlay-container">
                            <img src="images/portfolio-1.jpg" alt="" />
                            <div class="overlay-top">
                              <div class="text">
                                <h3><a href="portfolio-item.html">Project Title</a></h3>
                                <p class="small">Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div class="overlay-bottom">
                              <div class="links">
                                <a href="portfolio-item.html" class="btn btn-gray-transparent btn-animated">View Details <i class="pl-2 fa fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-box hc-shadow text-center">
                          <div class="overlay-container">
                            <img src="images/portfolio-2.jpg" alt="" />
                            <div class="overlay-top">
                              <div class="text">
                                <h3><a href="portfolio-item.html">Project Title</a></h3>
                                <p class="small">Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div class="overlay-bottom">
                              <div class="links">
                                <a href="portfolio-item.html" class="btn btn-gray-transparent btn-animated">View Details <i class="pl-2 fa fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-box hc-shadow text-center">
                          <div class="overlay-container">
                            <img src="images/portfolio-3.jpg" alt="" />
                            <div class="overlay-top">
                              <div class="text">
                                <h3><a href="portfolio-item.html">Project Title</a></h3>
                                <p class="small">Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div class="overlay-bottom">
                              <div class="links">
                                <a href="portfolio-item.html" class="btn btn-gray-transparent btn-animated">View Details <i class="pl-2 fa fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-box hc-shadow text-center">
                          <div class="overlay-container">
                            <img src="images/portfolio-4.jpg" alt="" />
                            <div class="overlay-top">
                              <div class="text">
                                <h3><a href="portfolio-item.html">Project Title</a></h3>
                                <p class="small">Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div class="overlay-bottom">
                              <div class="links">
                                <a href="portfolio-item.html" class="btn btn-gray-transparent btn-animated">View Details <i class="pl-2 fa fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-box hc-shadow text-center">
                          <div class="overlay-container">
                            <img src="images/portfolio-5.jpg" alt="" />
                            <div class="overlay-top">
                              <div class="text">
                                <h3><a href="portfolio-item.html">Project Title</a></h3>
                                <p class="small">Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div class="overlay-bottom">
                              <div class="links">
                                <a href="portfolio-item.html" class="btn btn-gray-transparent btn-animated">View Details <i class="pl-2 fa fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-box hc-shadow text-center">
                          <div class="overlay-container">
                            <img src="images/portfolio-6.jpg" alt="" />
                            <div class="overlay-top">
                              <div class="text">
                                <h3><a href="portfolio-item.html">Project Title</a></h3>
                                <p class="small">Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div class="overlay-bottom">
                              <div class="links">
                                <a href="portfolio-item.html" class="btn btn-gray-transparent btn-animated">View Details <i class="pl-2 fa fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="slick-carousel content-slider">
                        <div>
                          <div class="container">
                            <div class="row justify-content-md-center">
                              <div class="col-lg-8">
                                <div class="testimonial text-center">
                                  <div class="testimonial-image">
                                    <img src="images/testimonial-1.jpg" alt="Famous Person" title="Famous Person" class="rounded-circle" />
                                  </div>
                                  <h3 class="mt-3">Just Perfect!</h3>
                                  <div class="separator"></div>
                                  <div class="testimonial-body">
                                    <blockquote>
                                      <p>Sed ut perspiciatis unde omnis iste natu error sit voluptatem accusan tium dolore laud antium, totam rem dolor sit amet tristique pulvinar, turpis arcu rutrum nunc, ac laoreet            turpis augue a justo.</p>
                                    </blockquote>
                                    <div class="testimonial-info-1">- Famous Person</div>
                                    <div class="testimonial-info-2">By Company</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="container">
                            <div class="row justify-content-md-center">
                              <div class="col-lg-8">
                                <div class="testimonial text-center">
                                  <div class="testimonial-image">
                                    <img src="images/testimonial-2.jpg" alt="Famous Person" title="Famous Person" class="rounded-circle" />
                                  </div>
                                  <h3 class="mt-3">Amazing!</h3>
                                  <div class="separator"></div>
                                  <div class="testimonial-body">
                                    <blockquote>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cupiditate deleniti ratione in. Expedita nemo, quisquam, fuga adipisci omnis ad mollitia libero culpa nostrum est             quia eos esse vel!</p>
                                    </blockquote>
                                    <div class="testimonial-info-1">- Famous Person</div>
                                    <div class="testimonial-info-2">By Company</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div class="clients-container">
                          <div class="clients">
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="100">
                              <a href="#"><img src="images/client-1.png" alt="" /></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="200">
                              <a href="#"><img src="images/client-2.png" alt="" /></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="300">
                              <a href="#"><img src="images/client-3.png" alt="" /></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="400">
                              <a href="#"><img src="images/client-4.png" alt="" /></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="500">
                              <a href="#"><img src="images/client-5.png" alt="" /></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="600">
                              <a href="#"><img src="images/client-6.png" alt=""/></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="700">
                              <a href="#"><img src="images/client-7.png" alt="" /></a>
                            </div>
                            <div class="client-image" data-animation-effect="fadeIn" data-effect-delay="800">
                              <a href="#"><img src="images/client-8.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>

                <section class="pv-40 stats padding-bottom-clear dark-translucent-bg hovered background-img-7" style={{backgroundposition: "50% 50%"}}>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-lg-3 col-6 text-center">
                          <div class="hc-item-box" data-animation-effect="fadeIn" data-effect-delay="300">
                            <span class="icon dark-bg large circle"><i class="fa fa-diamond"></i></span>
                            <h3><strong>Projects</strong></h3>
                            <span class="counter">1525</span>
                          </div>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                          <div class="hc-item-box " data-animation-effect="fadeIn" data-effect-delay="300">
                            <span class="icon dark-bg large circle"><i class="fa fa-users"></i></span>
                            <h3><strong>Clients</strong></h3>
                            <span class="counter">1225</span>
                          </div>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                          <div class="hc-item-box" data-animation-effect="fadeIn" data-effect-delay="300">
                            <span class="icon dark-bg large circle"><i class="fa fa-cloud-download"></i></span>
                            <h3><strong>Downloads</strong></h3>
                            <span class="counter">6532</span>
                          </div>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                          <div class="hc-item-box" data-animation-effect="fadeIn" data-effect-delay="300">
                            <span class="icon dark-bg large circle"><i class="fa fa-share"></i></span>
                            <h3><strong>Sherot</strong></h3>
                            <span class="counter">15002</span>
                          </div>
                        </div>            
                      </div>
                    </div>
                    {/* <!-- footer top start --> */}
                    {/* <!-- ================ --> */}
                    <div class="footer-top animated-text" style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
                      <div class="container">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="call-to-action text-center">
                              <div class="row">
                                <div class="col-md-8">
                                  <h2 class="mt-4">Powerful Bootstrap Template</h2>
                                  <h2 class="mt-4">Waste no more time</h2>
                                </div>
                                <div class="col-md-4">
                                  <p class="mt-3"><a href="#" class="btn btn-animated btn-lg btn-gray-transparent">Purchase<i class="fa fa-cart-arrow-down pl-20"></i></a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- footer top end --> */}
                </section>

                {/* <!-- footer start (Add "dark" class to #footer in order to enable dark footer) --> */}
      {/* <!-- ================ --> */}
      <footer id="footer" class="clearfix ">

        {/* <!-- .footer start --> */}
        {/* <!-- ================ --> */}
        <div class="footer">
          <div class="container">
            <div class="footer-inner">
              <div class="row">
                <div class="col-lg-3">
                  <div class="footer-content">
                    <div class="logo-footer"><img id="logo-footer" src="images/logo_light_blue.png" alt="" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Ipsa, aut voluptas quaerat... <a href="page-about.html">Learn More<i class="fa fa-long-arrow-right pl-1"></i></a></p>
                    <div class="separator-2"></div>
                    <nav>
                      <ul class="nav flex-column">
                        <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Lorem</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
                        <li class="nav-item"><a class="nav-link" href="page-about.html">About</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="footer-content">
                    <h2 class="title">Latest From Blog</h2>
                    <div class="separator-2"></div>
                    <div class="media margin-clear">
                      <div class="d-flex pr-2">
                        <div class="overlay-container">
                          <img class="media-object" src="images/blog-thumb-1.jpg" alt="blog-thumb" />
                          <a href="blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                        <p class="small margin-clear"><i class="fa fa-calendar pr-2"></i>Mar 23, 2017</p>
                      </div>
                    </div>
                    <hr />
                    <div class="media margin-clear">
                      <div class="d-flex pr-2">
                        <div class="overlay-container">
                          <img class="media-object" src="images/blog-thumb-2.jpg" alt="blog-thumb" />
                          <a href="blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                        <p class="small margin-clear"><i class="fa fa-calendar pr-2"></i>Mar 22, 2017</p>
                      </div>
                    </div>
                    <hr />
                    <div class="media margin-clear">
                      <div class="d-flex pr-2">
                        <div class="overlay-container">
                          <img class="media-object" src="images/blog-thumb-3.jpg" alt="blog-thumb" />
                          <a href="blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                        <p class="small margin-clear"><i class="fa fa-calendar pr-2"></i>Mar 21, 2017</p>
                      </div>
                    </div>
                    <hr />
                    <div class="media margin-clear">
                      <div class="d-flex pr-2">
                        <div class="overlay-container">
                          <img class="media-object" src="images/blog-thumb-4.jpg" alt="blog-thumb" />
                          <a href="blog-post.html" class="overlay-link small"><i class="fa fa-link"></i></a>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                        <p class="small margin-clear"><i class="fa fa-calendar pr-2"></i>Mar 21, 2017</p>
                      </div>
                    </div>
                    <div class="text-right space-top">
                      <a href="blog-large-image-right-sidebar.html" class="link-dark"><i class="fa fa-plus-circle pl-1 pr-1"></i>More</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="footer-content">
                    <h2 class="title">Portfolio Gallery</h2>
                    <div class="separator-2"></div>
                    <div class="row grid-space-10">
                      <div class="col-4 col-lg-6">
                        <div class="overlay-container mb-10">
                          <img src="images/gallery-1.jpg" alt="" />
                          <a href="portfolio-item.html" class="overlay-link small">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-4 col-lg-6">
                        <div class="overlay-container mb-10">
                          <img src="images/gallery-2.jpg" alt="" />
                          <a href="portfolio-item.html" class="overlay-link small">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-4 col-lg-6">
                        <div class="overlay-container mb-10">
                          <img src="images/gallery-3.jpg" alt="" />
                          <a href="portfolio-item.html" class="overlay-link small">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-4 col-lg-6">
                        <div class="overlay-container mb-10">
                          <img src="images/gallery-4.jpg" alt="" />
                          <a href="portfolio-item.html" class="overlay-link small">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-4 col-lg-6">
                        <div class="overlay-container mb-10">
                          <img src="images/gallery-5.jpg" alt="" />
                          <a href="portfolio-item.html" class="overlay-link small">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-4 col-lg-6">
                        <div class="overlay-container mb-10">
                          <img src="images/gallery-6.jpg" alt="" />
                          <a href="portfolio-item.html" class="overlay-link small">
                            <i class="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="text-right space-top">
                      <a href="portfolio-grid-2-3-col.html" class="link-dark"><i class="fa fa-plus-circle pl-1 pr-1"></i>More</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="footer-content">
                    <h2 class="title">Find Us</h2>
                    <div class="separator-2"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odio voluptatem necessitatibus illo vel dolorum soluta.</p>
                    <ul class="social-links circle animated-effect-1">
                      <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                      <li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                      <li class="xing"><a href="#"><i class="fa fa-xing"></i></a></li>
                    </ul>
                    <div class="separator-2"></div>
                    <ul class="list-icons">
                      <li><i class="fa fa-map-marker pr-2 text-default"></i> Street Address No, City</li>
                      <li><i class="fa fa-phone pr-2 text-default"></i> +00 1234567890</li>
                      <li><a href="#"><i class="fa fa-envelope-o pr-2"></i>example@your_domain.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .footer end --> */}

        {/* <!-- .subfoo/ter start --> */}
        {/* <!-- ================ --> */}
        <div class="subfooter">
          <div class="container">
            <div class="subfooter-inner">
              <div class="row">
                <div class="col-md-12">
                  <p class="text-center">Copyright © 2018. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .subfooter end --> */}

      </footer>
      {/* <!-- footer end --></div> */}



                

            </React.Fragment>
                        )
                    }
                
                }
                
export default Home