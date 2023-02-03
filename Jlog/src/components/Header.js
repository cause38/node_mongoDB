import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="inner">
        <h1>
          <Link to="/">Jlog</Link>
        </h1>
        <div></div>
      </div>
    </StyledHeader>
  );
};

export default Header;
