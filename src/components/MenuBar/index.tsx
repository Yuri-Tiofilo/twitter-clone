import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButtons>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtons>

        <MenuButtons>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtons>

        <MenuButtons>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButtons>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Yuri Silva</strong>

          <span>@yurizito</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
