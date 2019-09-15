import * as React from 'react';
import ClickableIcon from './ClickableIcon';

const CircleIcon = require('../svg/CircleIcon.svg') as string;

interface StatusOpenProps {
  onClick: () => void;
}

const StatusOpen: React.FC<StatusOpenProps> = ({ onClick }) => <ClickableIcon icon={CircleIcon} onClick={onClick} />;

export default StatusOpen;
