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
                                    <li className="text-center" data-transition="crossfade" data-slotamount="default" data-masterspeed="default" data-title="Slide Title" data-delay="12000">

                                        {/* <!-- main image --> */}
                                        <img src="images/slider-fullscreen-slide-1.jpg" alt="slidebg1" data-bgposition="center center" data-bgrepeat="no-repeat" data-bgfit="cover" className="rev-slidebg" />

                                        {/* <!-- Transparent Background --> */}
                                        {/* <div className="tp-caption dark-translucent-bg"
                                            data-x="center"
                                            data-y="center"
                                            data-start="0"
                                            data-transform_idle="o:1;"
                                            data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                                            data-transform_out="o:0;s:600;"
                                            data-width="5000"
                                            data-height="5000">
                                        </div> */}

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
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Free Diagnostics
                                        </div>

                                        {/* <!-- LAYER NR. 2 --> */}
                                        <div className="tp-caption xlarge_white"
                                            data-x="center"
                                            data-y="110"
                                            // data-start="3100"
                                            // data-end="4600"
                                            data-start="3500"
                                            data-end="5000"
                                            data-splitin="chars"
                                            data-splitout="chars"
                                            data-elementdelay="0.1"
                                            data-endelementdelay="0.1"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[-50%];o:0;s:600;e:Power4.easeInOut;"
                                            data-transform_out="x:[-50%];o:0;s:200;e:Power2.easeInOut;"
                                            data-mask_in="x:0;y:0;s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Low Price
                            </div>

                                        {/* <!-- LAYER NR. 3 --> */}
                                        <div className="tp-caption xlarge_white"
                                            data-x="center"
                                            data-y="110"
                                            data-start="5600"
                                            data-end="7100"
                                            data-splitin="chars"
                                            data-splitout="chars"
                                            data-elementdelay="0.1"
                                            data-endelementdelay="0.1"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];o:0;s:600;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:[-50%];o:0;s:200;e:Power2.easeInOut;"
                                            data-mask_in="x:0;y:0;s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Quick Turnaround
                            </div>

                                        {/* <!-- LAYER NR. 4 --> */}
                                        <div className="tp-caption large_white"
                                            data-x="center"
                                            data-y="110"
                                            data-start="9100"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[-100%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:0;s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[-100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"><span className="logo-font">My <span className="text-default">Wireless</span></span> <br /> Cell Phone Repair and Shop</div>


                                        {/* <!-- LAYER NR. 5 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="250"
                                            data-hoffset="-232"
                                            data-start="1000"
                                            data-end="9100"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];y:0;o:0;s:700;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:0;o:0;s:700;e:Power2.easeInOut;"><span className="icon large circle"><i className="circle fa fa-wrench"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 6 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="250"
                                            data-start="3500"
                                            data-end="9100"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[-50%];y:0;o:0;s:700;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:0;o:0;s:700;e:Power2.easeInOut;"><span className="icon large circle"><i className="circle fa fa-usd"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 7 --> */}
                                        <div className="tp-caption"
                                            data-x="center"
                                            data-y="250"
                                            data-hoffset="232"
                                            data-start="5600"
                                            data-end="9100"
                                            data-transform_idle="o:1;"
                                            data-transform_in="x:[50%];y:0;o:0;s:700;e:Power4.easeInOut;"
                                            data-transform_out="x:0;y:0;o:0;s:700;e:Power2.easeInOut;"><span className="icon large circle"><i className="circle fa fa-bolt"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 8 --> */}
                                        <div className="tp-caption tp-resizeme large_white"
                                            data-x="center"
                                            data-y="210"
                                            data-start="9100"
                                            data-end="13000"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[-100%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:0;s:1000;e:Power2.easeInOut;"><div className="separator light"></div>
                                        </div>

                                        {/* <!-- LAYER NR. 9 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="center"
                                            data-y="250"
                                            data-start="9100"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[-50%];sX:1;sY:1;o:0;s:1100;e:Power4.easeInOut;"
                                            data-transform_out="y:0;s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[-50%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Orange County’s #1 Trusted 
                                            Cell Phone Repair Shop</div>

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
                                            <a href="#page-start" className="btn btn-lg moving smooth-scroll"><i className="fa fa-angle-down"></i><i className="fa fa-angle-down"></i><i className="fa fa-angle-down"></i></a>
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
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"><span className="logo-font">My Wireless</span> <br /> Cell Phone Repair, Cases, Screen Protectors, Accessories </div>

                                        {/* <!-- LAYER NR. 2 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="220"
                                            data-speed="500"
                                            data-start="1200"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">LifeTime Warranty <span className="icon default-bg circle small hidden-xs"><i className="fa fa-laptop"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 3 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="340"
                                            data-speed="500"
                                            data-start="1400"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">1 Hour Repair Service <span className="icon default-bg circle small hidden-xs"><i className="fa fa-check"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 4 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="460"
                                            data-speed="500"
                                            data-start="1600"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Repair Experts <span className="icon default-bg circle small hidden-xs"><i className="fa fa-gift"></i></span>
                                        </div>

                                        {/* <!-- LAYER NR. 5 --> */}
                                        <div className="tp-caption medium_white"
                                            data-x="right"
                                            data-y="580"
                                            data-speed="500"
                                            data-start="1800"
                                            data-transform_idle="o:1;"
                                            data-transform_in="y:[100%];sX:1;sY:1;o:0;s:900;e:Power4.easeInOut;"
                                            data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                            data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                            data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Rigorously Verified <span className="icon default-bg circle small hidden-xs"><i className="fa fa-hourglass-half"></i></span>
                                        </div>
                                    </li>
                                    {/* <!-- slide 2 end --> */}
                                </ul>
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
                                <h2 className="text-center mt-4">Fast, Affordable Tablet and Cell Phone <strong>Repair.</strong></h2>
                                <div className="separator"></div>
                                <p className="large text-center">Your gadgets play a major role in your professional, personal and school life. When your phone, tablet, or laptop breaks, you want an expert to handle the repair. That’s where we come in. With over a decade of experience in the electronics repair industry, MyWireless can get the job done quickly and effectively.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                    <span className="icon default-bg circle"><i className="fa fa-check-circle"></i></span>
                                    <h3>LifeTime Warranty</h3>
                                    <div className="separator clearfix"></div>
                                    <p>We offer a LifeTime  warranty on all our repairs. If the original repair fails because of a defect with a part we installed, we will replace the part at no charge.</p>
                                    <a href="page-services.html">Read More <i className="pl-1 fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="150">
                                    <span className="icon default-bg circle"><i className="fa fa-wrench"></i></span>
                                    <h3>Expert Techs</h3>
                                    <div className="separator clearfix"></div>
                                    <p>You only want the best technicians working on your electronic devices. Our highly skilled staff of technicians are true experts and will get your device working like new.</p>
                                    <a href="page-services.html">Read More <i className="pl-1 fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="200">
                                    <span className="icon default-bg circle"><i className="fa fa fa-bolt"></i></span>
                                    <h3>Same Day Repair</h3>
                                    <div className="separator clearfix"></div>
                                    <p>Most repairs can be done same day, while you wait. We know how inconvenient a broken device can be, so we work quickly to fix the issues and get you connected back in.</p>
                                    <a href="page-services.html">Read More <i className="pl-1 fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="pv-30 ph-20 hc-item-box bordered hc-shadow text-center " data-animation-effect="fadeInDownSmall" data-effect-delay="200">
                                    <span className="icon default-bg circle"><i className="fa fa fa-hand-o-right"></i></span>
                                    <h3>Free Diagnostics</h3>
                                    <div className="separator clearfix"></div>
                                    <p>We believe in a hassle free repair process. We diagnose your device for free. Once we determine what is needed for your repair, we will contact you with an obligation free repair quote. You can choose to continue with a repair, or not, the choice is always yours.</p>
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
                                        <div class="col-lg-12">
                                            <h1 class="title">Don't Miss Out Our Offers</h1>
                                            <p>Take Advantage Of This Amazing Deal Before It Is Too Late. Spring 20% off Any Service</p>
                                        </div>
                                        {/* <div class="col-lg-4">
                                            <br />
                                            <p><a href="#" class="btn btn-lg btn-gray-transparent btn-animated">Learn More<i class="fa fa-arrow-right pl-20"></i></a></p>
                                        </div> */}
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
                            <p class="large text-center">MyWireless offers iPhone Repair, iPad Repair, Smartphone Repair Services. Our store carries a range of accessories and protection plans for your gadgets. We carry refurbished smartphones, tablets, and computers. Get prepaid wireless plans to save you money on your wireless bill, pay your bills and refill your prepaid plans with gadget repair experts at MyWireless.com. Come see us today! No Appointment is needed! Most repairs are completed on the spot.</p>
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
                                    {/* <p><a href="page-services.html" class="btn btn-default-transparent btn-animated">Learn More <i class="fa fa-arrow-right pl-10"></i></a></p> */}
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
                                        {/* <p><a href="page-services.html" class="btn btn-default-transparent btn-animated">Learn More <i class="fa fa-arrow-right pl-10"></i></a></p> */}
                                    </div>
                                    <div class="col-lg-6">
                                        <img src="images/section-image-2.png" alt="" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>


                <section class="pv-30">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-6">
                          <h2 class="mt-4">What We <strong>Fix</strong></h2>
                          <div class="separator-2"></div>
                          <p>Don’t let damaged phones or tablets put a damper on your productivity. Here are some of things we fix:</p>
                          <div className='col-lg-6'>
                               <ul class="list-icons ">
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i class="fa fa-check-square-o"></i> Cracked Screen</li>
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="150"><i class="fa fa-check-square-o"></i> Water Damage</li>
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="200"><i class="fa fa-check-square-o"></i> Broken Button</li>
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="250"><i class="fa fa-check-square-o"></i> Camera Repair</li>
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="250"><i class="fa fa-check-square-o"></i> Speaker Not Working.</li>
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="250"><i class="fa fa-check-square-o"></i> No Signal</li>
                          </ul>
                          </div>
                          <div className='col-lg-6'>
                               <ul class="list-icons ">
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i class="fa fa-check-square-o"></i> Motherboard Repair</li>
                            <li data-animation-effect="fadeInUpSmall" data-effect-delay="150"><i class="fa fa-check-square-o"></i> Dead Battery</li>
                          </ul>
                          </div>
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et eius aut nisi dolore ut.</p>
                          <a href="page-about.html" class="btn btn-default-transparent btn-animation btn-animation--slide-horizontal btn-lg"><i class="fa fa-users pr-2"></i>Learn More</a> */}
                        </div>
                        <div class="col-lg-6">
                          <h2 class="mt-4">Devices We <strong>Repair</strong></h2>
                            <div class="separator-2"></div>
                            <p>Whether your device is old or new, we'll get the job done. Some of the most common device we repair are:</p>
                            <ul class="list-icons">
                              <li  data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i class="fa fa-check-square-o"></ i> IPhone Repair: iPhone X, 8, 8 Plus, 7, 7 Plus, 6s, 6s Plus, 6, 6 Plus, SE, 5s, 5c, 5, 4s </li>
                              <li  data-animation-effect="fadeInUpSmall" data-effect-delay="150"><i class="fa fa-check-square-o"></ i> iPad Repair: iPad Pro 12.9" 9.7", iPad Air 2, iPad Air, iPad 2017, iPad Mini 4, iPad Mini 3, iPad Mini 2, iPad Mini, iPad 4, iPad 3, iPad 2</li>
                              <li  data-animation-effect="fadeInUpSmall" data-effect-delay="200"><i class="fa fa-check-square-o"></ i> Samsung Repair: Galaxy S8, S8 Plus, S7, S7 Edge, S6, S6 Edge, S6 Edge Plus, S5, Note 8, Note 5, Note 4</li>
                              <li  data-animation-effect="fadeInUpSmall" data-effect-delay="250"><i class="fa fa-check-square-o"></ i>Many more...</li>
                              
                            </ul>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et   eius aut nisi dolore ut.</p>
                            <a href="page-about.html" class="btn btn-default-transparent btn-animation btn-animation--slide-horizontal btn-lg"><i class="fa   fa-users pr-2"></i>Learn More</a> */}
                          </div>
                      </div>
                    </div>
                    <br />
                </section>

                <section class="pv-30 light-gray-bg padding-bottom-clear">
                    
                    <div class="space-bottom">
                        <div>
                          <div className="container">
                            <div className="row justify-content-md-center">
                              <div className="col-lg-4">
                                <div className="testimonial text-center">
                                  <div className="testimonial-image">
                                    <img src="images/testimonial-1.jpg" alt="Famous Person" title="Famous Person" class="rounded-circle" />
                                  </div>
                                  <h3 className="mt-3">Would highly recommend!</h3>
                                  <div className="separator"></div>
                                  <div className="testimonial-body">
                                    <blockquote>
                                      <p>Heading out of the country for long term and we didn't want to have to pay a network's ridiculous monthly suspension fees. Was able to keep our number  and switch to an easy prepaid plan for when we are back in the states. Excellent customer service. Stayed open later than needed to help my husband out. Would highly recommend.</p>
                                    </blockquote>
                                    <div className="testimonial-info-1">Cindy H</div>
                                  </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial text-center">
                                  <div className="testimonial-image">
                                    <img src="images/testimonial-2.jpg" alt="Famous Person" title="Famous Person" class="rounded-circle" />
                                  </div>
                                  <h3 className="mt-3">Efficient service!</h3>
                                  <div className="separator"></div>
                                  <div className="testimonial-body">
                                    <blockquote>
                                      <p>Really great and efficient service. The owner, Hung, will change your screen at a great price and very fast. He fixed my iPhone 8 screen in 1 hour and I'm very happy I found this place. I have a trustworthy place to go whenever my iPhone screen breaks. I recommend this place to anyone who's looking to get their screen fixed!</p>
                                    </blockquote>
                                    <div className="testimonial-info-1">Dom N</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="testimonial text-center">
                                  <div className="testimonial-image">
                                    <img src="images/testimonial-3.jpg" alt="Famous Person" title="Famous Person" class="rounded-circle" />
                                  </div>
                                  <h3 className="mt-3">Very knowledgeable!</h3>
                                  <div className="separator"></div>
                                  <div className="testimonial-body">
                                    <blockquote>
                                      <p>Hung is very knowledgeable and has great customer service skills. I loved that it was such quick turnaround time. Even though i don't wish shattered screens on anyone, if it happens, i highly recommend bringing your phone here for quick and affordable fix!</p>
                                    </blockquote>
                                    <div className="testimonial-info-1">Lisa N</div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>

                

                {/* <!-- footer start (Add "dark" class to #footer in order to enable dark footer) --> */}
      {/* <!-- ================ --> */}
      <footer id="footer" class="clearfix">

        <div class="footer" style={{backgroundColor: "white"}}>
          <div class="container">
            <div class="footer-inner">
              <div class="row">
                <div class="col-lg-6">
                  <div class="footer-content">
                    <div class="logo-footer"><img id="logo-footer" src="images/logo_light_blue.png" alt="" /></div>
                    <p>Contact Us Today</p>
                    <ul class="list-inline mb-20">
                      <li class="list-inline-item"><i class="text-default fa fa-map-marker pr-1"></i>8892 Bolsa Ave Westminster, CA 92683</li>
                      <li class="list-inline-item"><i class="text-default fa fa-phone pl-10 pr-1"></i> (714) 892-8588</li>
                      <li class="list-inline-item"><a href="#" class="link-dark"><i class="text-default fa fa-envelope-o pl-10 pr-1"></i>hello@MyWireless.com</a></li>
                    </ul>
                    <div class="separator-2"></div>
                    <ul class="social-links circle margin-clear animated-effect-1">
                      <li class="instagram"><a href="https://www.yelp.com/biz/my-wireless-westminster-3" target="_blank"><i class="fa fa-yelp"></i></a></li>
                      <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                      <li class="instagram"><a href="#"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="footer-content">
                    <h2 class="title">Contact Us</h2>
                    <form class="margin-clear" method="POST" action="https://formspree.io/hung@pagetek.com ">
                      <div class="form-group has-feedback mb-10">
                        <label class="sr-only" for="name2">Name</label>
                        <input type="text" class="form-control" id="name2" placeholder="Name" required />
                        <i class="fa fa-user form-control-feedback"></i>
                      </div>
                      <div class="form-group has-feedback mb-10">
                        <label class="sr-only" for="email2">Email address</label>
                        <input type="email" class="form-control" id="email2" placeholder="Enter email" required />
                        <i class="fa fa-envelope form-control-feedback"></i>
                      </div>
                      <div class="form-group has-feedback mb-10">
                        <label class="sr-only" for="message2">Message</label>
                        <textarea class="form-control" rows="4" id="message2" placeholder="Message" required></textarea>
                        <i class="fa fa-pencil form-control-feedback"></i>
                      </div>
                      <input type="submit" value="Send" class="margin-clear submit-button btn btn-default" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

            </React.Fragment>
                        )
                    }
                
                }
                
export default Home