import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Header from '../views/Header'
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Particles from 'react-particles-js'

import HgtvLogo from '../images/brands/hgtv-white.png'
import FNALogo from '../images/brands/fna.png'
import UOBLogo from '../images/brands/uob-white.png'
import AXALogo from '../images/brands/axa-white.png'
import SNILogo from '../images/brands/sni-white.png'
import StarhubLogo from '../images/brands/starhub-white.png'
import StagefluxLogo from '../images/brands/stageflux.png'
import PinderoLogo from '../images/brands/pindero.png'
import GioLogo from '../images/brands/gio.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 0;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-grey pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-2xl xl:text-2xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-sm font-sans text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Col = styled.div`
  ${tw`md:w-1/2 lg:w-1/2`};
  float:left;
`

const SmallLabel = styled.p`
  ${tw`text-xs text-left`};
  color: #666;
`

const MediumLabel = styled.p`
  ${tw`text-sm text-center`};
  color: #999;
  @media (max-width: 900px) {
    margin-bottom:500px;
  }
`

const BrandsWrapper = styled.div`
  ${tw`text-center pt-12 `};
  clear:both;
`
const BrandLogo = styled.img`
  ${tw`h-14`};
`

const ParticlesWrapper = styled.div`
  ${tw`lg:mb-12`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4} >
      <Hero offset={0}>
        <Header />
        <Col>
        <Subtitle>We thrive when coming up with innovative ideas.</Subtitle>
        </Col>
        <Col>
        <ParticlesWrapper>
          <Particles  />
        </ParticlesWrapper>
        </Col>
        <BrandsWrapper>
          <SmallLabel>Some of the brands we've worked with:</SmallLabel>
          <BrandLogo src={HgtvLogo} height="60px" />
          <BrandLogo src={FNALogo} height="60px" />
          <BrandLogo src={UOBLogo} height="60px" />
          <BrandLogo src={AXALogo} height="60px" />
          <BrandLogo src={SNILogo} height="60px" />
          <BrandLogo src={StarhubLogo} height="60px" />
        </BrandsWrapper>
      </Hero>
      <Projects offset={1}>
        <Title>What we are currently working on</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="groundline.io"
            link="https://www.groundline.io"
            bg="#FFF"
            logo={GioLogo}
            status="Alpha"
          >
            Customizable declarative API for back-end connection. This is a set of React JS components that will speed up CMS development by utilizing exsiting UI frameworks and BAAS.
          </ProjectCard>
          <ProjectCard
            link="https://www.stageflux.com"
            logo={StagefluxLogo}
            bg="#FFF"
            status="Beta"
          >
            An events registration platform. This project aims to provide flexibility for events organizers (and developers) by giving them the option of choosing there preferred payment gateway, ui frameworks etc.
          </ProjectCard>
          <ProjectCard
            link="https://pindero.com"
            bg="#FFF"
            logo={PinderoLogo}
          >
            A freelance developer marketplace. The project aims to help individuals and businesses build affordable and high quality web and mobile applications.
          </ProjectCard>
        </ProjectsWrapper>
        <MediumLabel>For complete list of our protfolio, contact us at hello@groundline.ph</MediumLabel>
      </Projects>
      <About offset={2}>
        <Title>Who we are</Title>
        <AboutHero>
          <AboutSub>
            Groundline is an innovative digital team focused on custom-tailored web and mobile solutions.
          </AboutSub>
          <AboutDesc>
            We collaborate with a diverse range of organisation to build the right solutions that enforce brand recognition and intuitive user experience. We act as a strategic partner for businesses and institutions and we utilise the power of the web and mobile technologies to help you achieve your business goals.
          </AboutDesc>
        </AboutHero>
      </About>
      <Contact offset={3}>
        <Inner>
          <Title>For questions and collaborations</Title>
          <ContactText>
            Drop us a line at <a href="hello@groudnline.ph">hello@groundline.ph</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Groundline Software Solutions{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
