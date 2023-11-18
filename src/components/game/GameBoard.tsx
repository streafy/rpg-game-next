'use client';

import { useState } from 'react';
import Creature from './Creature';
import { Inventory } from './inventory/Inventory';
import Image from 'next/image';
import { Button } from '../shared/Button/Button';
import { CombatLog } from './CombatLog/CombatLog';

export const GameBoard = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  return (
    <div>
      <div>
        <Creature name='player' health={100} />
        <Creature name='enemy' health={100} />
      </div>
      <div className='controls'>
        <Button content='Attack' />
        <Button content='Defend' />
      </div>
      <button onClick={() => setIsInventoryOpen(!isInventoryOpen)}>
        <Image src='/Backpack.png' alt='Inventory' width='64' height='64' />
      </button>
      <CombatLog />
      <Inventory isOpen={isInventoryOpen} />
    </div>
  );
};
