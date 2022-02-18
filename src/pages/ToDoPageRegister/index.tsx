/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../../components/FlatList/List';
import { Button } from '../../components/Form/Button';
import { ListPageStyle } from './styles';
import { Task } from '../../store/taskList/taskListTypes';
import { taskListSelector } from '../../store/taskList/taskListSelectors';
import { addTaskList } from '../../store/taskList/taskListActions';

type TaskList = {
  id: string;
  name: string;
  done: boolean;
  deadline: string;
};

export const ToDoPageRegister = () => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const taskList = useSelector(taskListSelector);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const list = [...taskList];
    if (task.trim() && deadline.trim()) {
      list.push({
        id: uuidv4(),
        name: task.trim(),
        done: false,
        deadline: deadline.trim(),
      });
      dispatch(addTaskList(list));
      setTask('');
      setDeadline('');
    }
  };

  const toggleDone = (id: string) => {
    const newTaskList = taskList.map((item: Task) =>
      item.id === id ? { ...item, done: !item.done } : item,
    );
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
      <ListPageStyle.Container>
        <ListPageStyle.Title>Minhas Tarefas</ListPageStyle.Title>
        <ListPageStyle.Input
          value={task}
          returnKeyType="send"
          onChangeText={e => setTask(e)}
          placeholder={'Digite a tarefa'}
        />
        <ListPageStyle.Input
          value={deadline}
          returnKeyType="send"
          onChangeText={e => setDeadline(e)}
          placeholder={'Digite o prazo'}
          onSubmitEditing={handleSubmit}
        />
        <Button
          title="Registrar"
          style={{ width: 250, marginTop: 5 }}
          onPress={handleSubmit}
        />
      </ListPageStyle.Container>
      <List renderItem={Item} data={taskList} />
    </>
  );
};
