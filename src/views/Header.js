import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'

const HeaderWrapper = styled.header`
  ${tw`mt-16 lg:mt-0`};
  justify-content: start;
  display: flex;
  height: '20px';
  position: relative;
  top: 10px;
  width: 100%;
`

class Header extends React.Component {
  state = {
    fixed: false
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    return (
        <HeaderWrapper className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <div className="logo">
              <img src="/logo-white.png"  />
            </div>
          </Link>
        </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
