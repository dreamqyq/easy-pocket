import React from 'react';

type Props = {
  label: string;
  symbol: React.ReactNode;
  onClick?: () => void;
}
const Emoji: React.FC<Props> = props => (
  <span
    role='img'
    aria-label={props.label}
    aria-hidden={props.label ? 'false' : 'true'}
    onClick={() => props.onClick && props.onClick()}
  >
      {props.symbol} {props.children}
    </span>
);

export { Emoji };
