import Link from 'next/link';
import styles from './shared.module.css';

export const Button = () => {
  return (
    <Link href={'/game'}>
      <button className={styles.button}>Enter Game</button>
    </Link>
  );
};
