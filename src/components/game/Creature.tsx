import { FC } from 'react';
import styles from './game.module.css';

type Props = {
  name: string;
  health: number;
};

export const Creature: FC<Props> = ({ name, health }) => {
  return (
    <div className={styles.creature}>
      <span>{name}</span>
      <div className={styles.health_bar_border}>
        <div className={styles.health_bar}>
          <span>{health}</span>
        </div>
      </div>
    </div>
  );
};

export default Creature;
