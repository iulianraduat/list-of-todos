import * as React from 'react';

export interface ListOfTodosProps extends React.Props<ListOfTodos> {
  items: Task[];
  onChange: (items: Task[], item: Task) => void;
  styleItem?: React.CSSProperties;
  styleList?: React.CSSProperties;
}

export interface Task {
  done?: boolean;
  id: string;
  text: string;
}

declare class ListOfTodos extends React.Component<ListOfTodosProps> {}

declare module 'editable-dnd-list' {}

export default ListOfTodos;
