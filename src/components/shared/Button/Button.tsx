import styles from './button.module.css';
import { FC } from 'react';

type Props = {
  content: string;
};

export const Button: FC<Props> = ({ content }) => {
  return <button className={styles.button}>{content}</button>;
};
