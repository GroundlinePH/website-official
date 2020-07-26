import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import b1 from '../assets/images/brands/hgtv-white.png';
import b2 from '../assets/images/brands/axa-white.png';
import b3 from '../assets/images/brands/sni-white.png';
import b4 from '../assets/images/brands/uob-white.png';

import logo from '../assets/images/logo.png';
import glio from '../assets/images/brands/gio.png';
//import stageflux from '../assets/images/brands/stageflux.png';

const IndexPage = () => (
  <Layout>
    

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1"><img className="logo" src={logo} alt="" />{config.heading}</h1>
        <h5 className="mb-5">
          {config.subHeading}
        </h5>

        <div className="row">
          <div className="col-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b1} alt="" />
            </span>
          </div>
          <div className="col-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b2} alt="" />
            </span>
          </div>
          <div className="col-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b3} alt="" />
            </span>
          </div>
          <div className="col-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b4} alt="" />
            </span>
          </div>
        </div>

      </div>     
      <div className="overlay"></div>
    </header>
    
    <section className="content-section bg-light pt-5" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>
              Groundline is an innovative digital team focused on custom-tailored web and mobile solutions.
            </h2>
            <p className="lead mb-5">
               We collaborate with a diverse range of organisation to build the right solutions that enforce 
               brand recognition and intuitive user experience. We act as a strategic partner for businesses 
               and institutions and we utilise the power of the web and mobile technologies to help you achieve 
               your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-dark text-light pt-5" id="portfolio">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="portfolio-item">
              <span className="caption">
                <span className="caption-content">
                  <img src={glio} alt="" />
                  <span className="portfolio-title">Groundline.io</span>
                  <h3 className="mb-5 mt-4">
                  Scalable real-time tracking and monitoring API
                  </h3>
                  <a  href="https://www.groundline.io/">
                    <button type="button" class="btn btn-outline-light btn-lg">Check it out</button>
                  </a>
                </span>
              </span>
              </div>
          </div>
        </div>
      </div>
    </section>

{/*}
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h2 className="mb-5">Products & Frameworks</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="https://www.groundline.io/">
              <span className="caption">
                <span className="caption-content">
                  <img src={glio} alt="" />
                  <span className="portfolio-title">Groundline</span>
                  <p className="mb-0 mt-4">
                  A Machine learning driven platform for object detection in aerial images
                  </p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <img src={stageflux} alt="" height="60" />
                  <p className="mb-0 mt-4">
                    Coming soon! 
                  </p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
*/}

    <section className="content-section bg-light pt-5" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>
              For questions and collaborations
            </h2>
            <p className="lead mb-5">Drop us a line at hello@groundline.ph</p>
          </div>
        </div>
      </div>
    </section>


    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
