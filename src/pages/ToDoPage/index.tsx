import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../../components/FlatList/List';
import { ListPageStyle } from './styles';

type TaskList = {
  id: string;
  name: string;
  done: boolean;
};

export const ToDoPage = () => {
  const [taskList, setTaskList] = useState([] as TaskList[]);
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    const list = [...taskList];
    if (task.trim()) {
      list.push({
        id: uuidv4(),
        name: task.trim(),
        done: false,
      });
      setTaskList(list);
      setTask('');
    }
  };

  const toggleDone = (id: string) => {
    const newTaskList = taskList.map(item =>
      item.id === id ? { ...item, done: !item.done } : item,
    );

    setTaskList(newTaskList);
  };

  const Item = (item: TaskList) => {
    return (
      <ListPageStyle.ContainerItem onPress={() => toggleDone(item.id)}>
        {item.name && (
          <ListPageStyle.TextFlat>{item.name}</ListPageStyle.TextFlat>
        )}
        {item.name && (
          <ListPageStyle.IconCheck
            name={item.done === false ? 'square' : 'check-square'}
          />
        )}
      </ListPageStyle.ContainerItem>
    );
  };

  return (
    <>
      <ListPageStyle.Container>
        <ListPageStyle.Input
          value={task}
          returnKeyType="send"
          onChangeText={e => setTask(e)}
          onSubmitEditing={handleSubmit}
        />
      </ListPageStyle.Container>
      <List renderItem={Item} data={taskList} />
    </>
  );
};
