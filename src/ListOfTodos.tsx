import * as React from 'react';
import TaskInList from './TaskInList';
import { getStyle } from './Util';

const style: React.CSSProperties = {
  border: 'solid 1px #888888'
};

export interface Task {
  done?: boolean;
  id: string;
  text: string;
}

interface ListOfTodosProps {
  items: Task[];
  onChange: (items: Task[], item: Task) => void;
  styleItem?: React.CSSProperties;
  styleList?: React.CSSProperties;
}

const ListOfTodos: React.FC<ListOfTodosProps> = ({ items, onChange, styleItem, styleList }) => {
  if (items.length === 0) {
    return null;
  }

  const handleChangeTask = (changedItem: Task) => {
    const newItems = items.map((item: Task) => (item.id !== changedItem.id ? item : changedItem));
    onChange(newItems, changedItem);
  };

  const renderItem = (item: Task) => <TaskInList item={item} onChange={handleChangeTask} style={styleItem} />;

  const renderItems = items.map(renderItem);

  return <div style={getStyle(style, styleList)}>{renderItems}</div>;
};

export default ListOfTodos;
