import React from "react";
import {
  Container,
  ActionMenuContainer,
  ProfileButton,
  Icon,
  RightSection,
  IconButton,
  SlIcon,
  Username,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ActionMenuContainer>
        <ProfileButton>
          <Icon name="user" />
        </ProfileButton>
        <RightSection>
          <IconButton>
            <Icon name="eye" />
          </IconButton>
          <IconButton>
            <SlIcon name="question" />
          </IconButton>
          <IconButton>
            <Icon name="mail" />
          </IconButton>
        </RightSection>
      </ActionMenuContainer>
      <Username>Olá, Pedro</Username>
    </Container>
  );
};

export default Header;
