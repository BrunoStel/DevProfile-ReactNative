import React, { useState } from 'react';
import { List } from './flatlist';
import { Item } from './item';
import { Container, Input } from './styles';
import { v4 as uuidv4 } from 'uuid';

type TaskList = {
  id: string;
  name: string;
  done: boolean;
};

export const Page = () => {
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

  return (
    <>
      <Container>
        <Input
          value={task}
          returnKeyType="send"
          onChangeText={e => setTask(e)}
          onSubmitEditing={handleSubmit}
        />
      </Container>
      <List renderItem={Item} data={taskList} toggleDone={toggleDone} />
    </>
  );
};
