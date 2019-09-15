import * as React from 'react';

const style: React.CSSProperties = {
  width: '1.5em',
  height: '1.5em',
  paddingTop: 5,
  cursor: 'pointer'
};

interface ClickableIconProps {
  icon: string;
  onClick: () => void;
}

const ClickableIcon: React.FC<ClickableIconProps> = ({ icon, onClick }) => (
  <img src={icon} onClick={onClick} style={style} />
);

export default ClickableIcon;
