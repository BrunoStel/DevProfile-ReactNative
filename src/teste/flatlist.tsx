/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FlatList } from 'react-native';
import { ContainerFlat } from './styles';

interface IData {
  data: any[];
  renderItem: any;
  toggleDone: (id: string) => void;
}

export const List = ({ data, renderItem, toggleDone }: IData) => {
  return (
    <ContainerFlat>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item, toggleDone)}
      />
    </ContainerFlat>
  );
};
