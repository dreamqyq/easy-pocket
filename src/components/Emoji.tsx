import React, { ReactNode } from 'react';

type Props = {
  label: string;
  symbol: React.ReactNode;
  onClick?: () => void;
  children?: ReactNode;
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
