import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Container  } from './styles';
//import * as S from './styles';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';


export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos']);
  
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item}
          />
        )}
      />
    </Container>
  );
}