import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import ScrollToTop from '../components/ScrollToTop';

import b1 from '../assets/images/brands/hgtv-white.png';
import b2 from '../assets/images/brands/axa-white.png';
import b3 from '../assets/images/brands/sni-white.png';
import b4 from '../assets/images/brands/uob-white.png';

import logo from '../assets/images/logo.png';
import glio from '../assets/images/brands/gio.png';
import clerkflow from '../assets/images/brands/clerkflow.png';
import stageflux from '../assets/images/brands/stageflux.png';

const IndexPage = () => (
  <Layout>
    

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1"><img className="logo" src={logo} alt="" />{config.heading}</h1>
 {/*       <h5 className="mb-5">
          {config.subHeading}
        </h5>

        <div className="row">
          <div className="col-6 col-lg-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b1} alt="" />
            </span>
          </div>
          <div className="col-6 col-lg-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b2} alt="" />
            </span>
          </div>
          <div className="col-6 col-lg-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b3} alt="" />
            </span>
          </div>
          <div className="col-6 col-lg-3 mb-5 mb-lg-0">
            <span className="rounded-circle mx-auto mb-3">
              <img className="img-fluid" src={b4} alt="" />
            </span>
          </div>
        </div>
*/}
      </div>     
      <div className="overlay"></div>
    </header>
    {/*
    <section className="content-section bg-light pt-5" id="about">
      <div className="container text-left">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="content-section-heading mb-4 text-left">
              <h3 >About Us</h3>
            </div>
            <h5>
              Groundline is an innovative digital team focused on custom-tailored web and mobile solutions.
            </h5>
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
                  AI for Geospatial analysis
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

    <section className="content-section text-dark pt-5" id="portfolio">
      <div className="container text-left">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="content-section-heading mb-4 text-left">
              <h3>Products</h3>
              <p>Some of the stuff we are working on</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11 mx-auto">
          <div className="row no-gutter">
              <div className="col-lg-4">
                <a className="portfolio-item" href="https://www.groundline.io" target="_blank" rel="noopener noreferrer">
                  <span className="caption">
                    <span className="caption-content">
                      <img src={glio} alt="" />
                      <span className="portfolio-title">Groundline.io</span>
                      <p className="mb-0 mt-4">
                      A machine learning driven platform for object detection and annotation of geospatial data.
                      </p>
                      <br />
                      <a href="https://www.groundline.io" target="_blank" className="mt-5" rel="noopener noreferrer">
                        <button type="button" class="btn btn-outline-dark btn-sm">open</button>
                      </a>
                    </span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <a className="portfolio-item" href="https://www.clerkflow.com" target="_blank" rel="noopener noreferrer">
                  <span className="caption">
                    <span className="caption-content">
                      <img src={clerkflow} alt="" height="60" />
                      <span className="portfolio-title">Clerkflow</span>
                      <p className="mb-0 mt-4">
                      Automate data extraction from any documents to improve overall business operations.
                      </p>
                      <br />
                      <a href="https://www.clerkflow.com" target="_blank" className="mt-5" rel="noopener noreferrer">
                        <button type="button" class="btn btn-outline-dark btn-sm">open</button>
                      </a>
                    </span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <a className="portfolio-item" href="/#">
                  <span className="caption">
                    <span className="caption-content">
                      <img src={stageflux} alt="" height="60" />
                      <p className="mb-0 mt-4">
                        Coming soon! We are working on something new here. We will update as soon as we are live.
                      </p>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="content-section bg-dark text-light pt-5 pb-5" id="about">
      <div className="container text-left">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <h2>
              For questions and collaborations
            </h2>
            <p className="lead">Drop us a line at hello@groundline.ph</p>
            <p className="text-muted small mb-0">
              Copyright &copy; Groundline Software Solutions
            </p>
          </div>
        </div>
      </div>
    </section>

*/}

    <ScrollToTop />
  </Layout>
);

export default IndexPage;
