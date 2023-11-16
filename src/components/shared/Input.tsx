'use client';

import { FunctionComponent } from 'react';
import styles from './shared.module.css';

type Props = {
  text: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
};

export const Input: FunctionComponent<Props> = ({
  text,
  onTextChange,
  onButtonClick,
}) => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter new character name here!"
        value={text}
        onChange={onTextChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        Create
      </button>
    </div>
  );
};
