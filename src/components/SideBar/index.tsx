import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />

        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Tiago Freitas" nickname="@tiagfp" />,
              <FollowSuggestion name="Diego Fernandes" nickname="@dieguinho" />,
              <FollowSuggestion
                name="Anderson Fernandes"
                nickname="@dersinfodinhatotal"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
