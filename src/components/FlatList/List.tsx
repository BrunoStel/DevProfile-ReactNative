/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Alert } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskList } from '../../store/taskList/taskListActions';
import { taskListSelector } from '../../store/taskList/taskListSelectors';
import { Task } from '../../store/taskList/taskListTypes';
import { ListStyle } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IData {
  data: any[];
  renderItem: any;
  isUsingStorage: boolean;
}

export const List = ({ data, renderItem, isUsingStorage }: IData) => {
  const dispatch = useDispatch();
  const taskList = useSelector(taskListSelector) as Task[];

  const removeItem = async (index: number) => {
    const newTaskList = taskList.filter((item, indice) => indice != index);
    if (isUsingStorage) {
      await AsyncStorage.setItem('@taskList', JSON.stringify(newTaskList));
    }
    dispatch(addTaskList(newTaskList));
  };

  const deleteItem = (index: number) => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeItem(index),
      },
    ]);
  };

  const ListaItemSwipe = (props: any) => {
    return (
      <ListStyle.ListaItemSwipe onPress={() => deleteItem(props.index)}>
        <ListStyle.IconDelete name={'trash-2'} />
      </ListStyle.ListaItemSwipe>
    );
  };

  return (
    <ListStyle.ContainerFlat>
      <SwipeListView
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => renderItem(item)}
        leftOpenValue={50}
        renderHiddenItem={({ index }) => <ListaItemSwipe index={index} />}
        disableLeftSwipe={true}
      />
    </ListStyle.ContainerFlat>
  );
};
