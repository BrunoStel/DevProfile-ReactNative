/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../../components/FlatList/List';
import { Button } from '../../components/Form/Button';
import { ListPageStyle } from './styles';
import { Task } from '../../store/taskList/taskListTypes';
import { taskListSelector } from '../../store/taskList/taskListSelectors';
import { addTaskList } from '../../store/taskList/taskListActions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TaskList = {
  id: string;
  name: string;
  done: boolean;
  deadline: string;
};

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const ToDoPageRegister = () => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const taskList = useSelector(taskListSelector);
  const dispatch = useDispatch();

  const { navigate } = useNavigation<ScreenNavigationProp>();

  const getTaskListStorage = async () => {
    const taskListString = await AsyncStorage.getItem('@taskList');
    if (!taskListString) {
      return null;
    }
    const taskList = JSON.parse(taskListString);
    dispatch(addTaskList(taskList));
  };

  useEffect(() => {
    getTaskListStorage();
  }, []);

  const handleSubmit = async () => {
    const list = [...taskList];
    if (task.trim() && deadline.trim()) {
      list.push({
        id: uuidv4(),
        name: task.trim(),
        done: false,
        deadline: deadline.trim(),
      });
      await AsyncStorage.setItem('@taskList', JSON.stringify(list));
      dispatch(addTaskList(list));
      setTask('');
      setDeadline('');
    }
  };

  const toggleDone = async (id: string) => {
    const newTaskList = taskList.map((item: Task) =>
      item.id === id ? { ...item, done: !item.done } : item,
    );
    await AsyncStorage.setItem('@taskList', JSON.stringify(newTaskList));
    dispatch(addTaskList(newTaskList));
  };

  const Item = (item: TaskList) => {
    return (
      <ListPageStyle.TouchableHighlight
        onPress={() => toggleDone(item.id)}
        underlayColor="#DDD"
      >
        <View>
          <ListPageStyle.ContainerItem>
            {item.name && (
              <ListPageStyle.TextFlat>{item.name}</ListPageStyle.TextFlat>
            )}
            {item.name && (
              <ListPageStyle.IconCheck
                name={item.done === false ? 'square' : 'check-square'}
                style={item.done === true ? { color: 'blue' } : null}
              />
            )}
          </ListPageStyle.ContainerItem>
          {item.deadline && (
            <ListPageStyle.Deadline>
              Deadline: {item.deadline}
            </ListPageStyle.Deadline>
          )}
        </View>
      </ListPageStyle.TouchableHighlight>
    );
  };

  return (
    <>
      <ListPageStyle.ContainerHeader>
        <ListPageStyle.Title>Minhas Tarefas</ListPageStyle.Title>
        <ListPageStyle.Input
          value={task}
          returnKeyType="send"
          onChangeText={e => setTask(e)}
          placeholder={'Digite a tarefa'}
          maxLength={60}
        />
        <ListPageStyle.Input
          value={deadline}
          returnKeyType="send"
          onChangeText={e => setDeadline(e)}
          placeholder={'Digite o prazo'}
          onSubmitEditing={handleSubmit}
          keyboardType={'numeric'}
          maxLength={8}
        />
        <Button
          title="Registrar"
          style={{ width: 250, marginTop: 5 }}
          onPress={handleSubmit}
        />
      </ListPageStyle.ContainerHeader>
      <ListPageStyle.Container>
        <List renderItem={Item} data={taskList} isUsingStorage={true} />
        <Button
          title="Voltar"
          style={{ width: '100%', marginTop: 0, borderRadius: 0 }}
          onPress={() => navigate('Home')}
        />
      </ListPageStyle.Container>
    </>
  );
};
