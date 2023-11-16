'use client';

import { useState } from 'react';
import Creature from './Creature';
import { Inventory } from './inventory/Inventory';
import Image from 'next/image';

export const GameBoard = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  return (
    <div>
      <div>
        <Creature name="player" health={100} />
        <Creature name="enemy" health={100} />
      </div>
      <button onClick={() => setIsInventoryOpen(!isInventoryOpen)}>
        <Image src="/Backpack.png" alt="Inventory" width="64" height="64" />
      </button>
      <Inventory isOpen={isInventoryOpen} />
    </div>
  );
};
