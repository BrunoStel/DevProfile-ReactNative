/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FlatList } from 'react-native';
import { ListStyle } from './styles';

interface IData {
  data: any[];
  renderItem: any;
}

export const List = ({ data, renderItem }: IData) => {
  return (
    <ListStyle.ContainerFlat>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
    </ListStyle.ContainerFlat>
  );
};
