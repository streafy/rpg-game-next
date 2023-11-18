'use client';

import { useState } from 'react';
import styles from './combatlog.module.css';

const initialCombatLog: string[] = [
  'Player did 10 damage to Enemy',
  'Player did 10 damage to Enemy',
  'Player did 10 damage to Enemy',
  'Player did 10 damage to Enemy',
  'Player did 10 damage to Enemy',
];

export const CombatLog = () => {
  const [combatLog, setCombatLog] = useState(initialCombatLog);

  return (
    <ul className={styles.combatlog}>
      {combatLog.length > 0 &&
        combatLog.map((entry, i) => <li key={i}>{entry}</li>)}
    </ul>
  );
};
