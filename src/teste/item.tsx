import React, { useState } from 'react';
import { IconCheck, ContainerItem, TextFlat } from './styles';

interface IItem {
  id: string;
  name: string;
  done: boolean;
}

interface IItemQualquerCoisa {
  item: IItem;
  toggleDone: (id: string) => void;
}

export const Item = ({ item, toggleDone }: IItemQualquerCoisa) => {
  return (
    <ContainerItem onPress={() => toggleDone(item.id)}>
      {item.name && <TextFlat>{item.name}</TextFlat>}
      {item.name && (
        <IconCheck name={item.done === false ? 'square' : 'check-square'} />
      )}
    </ContainerItem>
  );
};
