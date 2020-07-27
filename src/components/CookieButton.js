import React from "react";
import styled from "styled-components";
import cookieSrc from "../cookie.svg";

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const CookieButton = (props) => {
  return (
    <Button>
      <Cookie src={cookieSrc} />
    </Button>
  );
};

export default CookieButton;
