import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ListOfTodos, { Task } from '../src/ListOfTodos';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '90vh',
    width: 400,
    margin: 10,
    textAlign: 'center',
  },
  pre: {
    margin: 'auto',
    textAlign: 'left',
    width: 'fit-content',
  },
  separator: {
    marginBottom: 20,
  },
};

const mockItems: Task[] = [
  {
    id: '1',
    text: 'Text 1',
  },
  {
    id: '2',
    text: 'Text 2 must to be a long text so we can see if it wrappes when there is not enough place to display it in one line',
    done: true,
  },
];

const emptyHandle = () => {};

export default {
  title: 'ListOfTodos',
  component: ListOfTodos,
} as ComponentMeta<typeof ListOfTodos>;

export const WithEmptyList: ComponentStory<typeof ListOfTodos> = () => (
  <div style={styles.container}>
    <ListOfTodos items={[]} onChange={emptyHandle} />
    <div />
    There is nothig displayed for an empty list.
  </div>
);

export const WithNonEmptyList: ComponentStory<typeof ListOfTodos> = () => {
  const [items, setItems] = React.useState(mockItems);

  const handleChangeStatus = React.useCallback(
    (newItems: Task[]) => {
      setItems(newItems);
      document.getElementById('l')!.innerHTML = JSON.stringify(
        newItems,
        undefined,
        2
      );
    },
    [items]
  );

  return (
    <div style={styles.container}>
      <ListOfTodos items={items} onChange={handleChangeStatus} />
      <div style={styles.separator} />
      Items in list: <pre id="l" style={styles.pre} />
    </div>
  );
};
