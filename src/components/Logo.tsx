import React from "react";
import styled from "styled-components/native";

const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.Image`
  width: 200px;
  height: 200px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage source={require("../../assets/icons/logo-large.png")} />
    </LogoContainer>
  );
};

export default Logo;
