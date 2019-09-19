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

interface StatusDoneProps {
  onClick: () => void;
}

const StatusDone: React.FC<StatusDoneProps> = ({ onClick }) => (
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
        d="M 49.21875 25 C 49.21875 38.375 38.375 49.21875 25 49.21875 C 11.625 49.21875 0.78125 38.375 0.78125 25 C 0.78125 11.625 11.625 0.78125 25 0.78125 C 38.375 0.78125 49.21875 11.625 49.21875 25 Z M 22.199219 37.824219 L 40.167969 19.855469 C 40.777344 19.246094 40.777344 18.253906 40.167969 17.644531 L 37.957031 15.4375 C 37.347656 14.824219 36.359375 14.824219 35.746094 15.4375 L 21.09375 30.089844 L 14.253906 23.246094 C 13.640625 22.636719 12.652344 22.636719 12.042969 23.246094 L 9.832031 25.457031 C 9.222656 26.066406 9.222656 27.058594 9.832031 27.667969 L 19.988281 37.824219 C 20.597656 38.433594 21.589844 38.433594 22.199219 37.824219 Z M 22.199219 37.824219 "
      />
    </g>
  </svg>
);

export default StatusDone;
