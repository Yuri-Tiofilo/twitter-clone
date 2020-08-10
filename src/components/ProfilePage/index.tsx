import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Yuri Silva</h1>
        <h2>@yurizito</h2>

        <p>Developer Fullstack JavaScript</p>

        <ul>
          <li>
            <LocationIcon />
            Franca, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 21 de agosto de 2020
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo
            <strong> 1200 </strong>
          </span>
          <span>
            <strong>1200 </strong>
            Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
