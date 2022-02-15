import React from 'react';
import { IconCheck, ContainerItem, TextFlat } from './styles';

interface IItem {
  id: string;
  name: string;
  done: boolean;
  toggleDone: (id: string) => void;
}

export const Item = (props: any) => {
  console.log(props);
  return null;
  /*return (
    <ContainerItem onPress={() => console.log(toggleDone(id))}>
      {name && <TextFlat>{name}</TextFlat>}
      {name && <IconCheck name={done === false ? 'square' : 'check-square'} />}
    </ContainerItem>
  );*/
};
