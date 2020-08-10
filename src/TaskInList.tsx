import * as React from 'react';
import StatusDone from './buttons/StatusDone';
import StatusOpen from './buttons/StatusOpen';
import { getStyle } from './Util';
import { Task } from './ListOfTodos';

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    border: 'solid 1px #444444',
    margin: 10,
    padding: 10,
  },
  text: {
    textAlign: 'left',
  },
};

interface TaskInListProps {
  className?: string;
  item: Task;
  onChange: (item: Task) => void;
  style?: React.CSSProperties;
}

const TaskInList: React.FC<TaskInListProps> = ({ className, item, onChange, style }) => {
  const handleChangeToOpen = React.useCallback(() => {
    onChange({ ...item, done: false });
  }, [item, onChange]);

  const handleChangeToDone = React.useCallback(() => {
    onChange({ ...item, done: true });
  }, [item, onChange]);

  return (
    <div className={className} style={getStyle(styles.container, style)}>
      <div style={styles.button}>
        {item.done ? <StatusDone onClick={handleChangeToOpen} /> : <StatusOpen onClick={handleChangeToDone} />}
      </div>
      <div style={styles.text}>{item.text}</div>
    </div>
  );
};

export default TaskInList;
