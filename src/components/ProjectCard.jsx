import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`relative no-underline  px-8 py-8 md:py-24 text-black text-center`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px dashed #eee;
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base pt-4`};
  clear:both;
`

const Title = styled.div`
  ${tw`text-black  text-2xl md:text-2xl xl:text-3xl font-sans`};
`

const LogoImg = styled.img`
  ${tw`h-16 mr-4 float-left`};
`

const ProjectCard = ({ title, link, children, bg, logo, status }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <div>
      <LogoImg src={logo} />
      {title &&
      <Title>{title}</Title>
      }
    </div>
    <Text>{children}</Text>
    {status &&
    <Text>Status: <b>{status}</b></Text>
    }
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
