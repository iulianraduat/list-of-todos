import * as React from 'react';
import ClickableIcon from './ClickableIcon';

const CheckedIcon = require('../svg/CheckedIcon.svg') as string;

interface StatusDoneProps {
  onClick: () => void;
}

const StatusDone: React.FC<StatusDoneProps> = ({ onClick }) => <ClickableIcon icon={CheckedIcon} onClick={onClick} />;

export default StatusDone;
