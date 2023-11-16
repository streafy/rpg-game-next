import { FunctionComponent } from 'react';

type Props = {
  name: string;
  level: number;
  selected: boolean;
  onClick: () => void;
};

export const Character: FunctionComponent<Props> = ({
  name,
  level,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`character ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {name} Level: {level}
    </div>
  );
};
