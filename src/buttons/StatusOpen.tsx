import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  path: {
    stroke: 'none',
    fillRule: 'nonzero',
    fill: '#5066F0',
    fillOpacity: 1
  },
  svg: {
    width: '1.5em',
    height: '1.5em',
    paddingTop: 5,
    cursor: 'pointer'
  }
};

interface StatusOpenProps {
  onClick: () => void;
}

const StatusOpen: React.FC<StatusOpenProps> = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50pt"
    height="50pt"
    viewBox="0 0 50 50"
    version="1.1"
    style={styles.svg}
    onClick={onClick}
  >
    <g id="surface1">
      <path
        style={styles.path}
        d="M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 25 44.53125 C 14.210938 44.53125 5.46875 35.789062 5.46875 25 C 5.46875 14.210938 14.210938 5.46875 25 5.46875 C 35.789062 5.46875 44.53125 14.210938 44.53125 25 C 44.53125 35.789062 35.789062 44.53125 25 44.53125 Z M 25 44.53125 "
      />
    </g>
  </svg>
);

export default StatusOpen;
