'use client';
import { FC, useState } from 'react';
import { InventoryCell } from './InventoryCell';
import styles from './inventory.module.css';
import { createPortal } from 'react-dom';

type InventoryItem = { name: string; url: string };

const initialInventory: InventoryItem[] = Array(16).fill({ name: '', url: '' });
initialInventory[0] = { name: 'hammer t1', url: '/HammerT1.png' };
initialInventory[1] = { name: 'helmet t1', url: '/HelmetT1.png' };
initialInventory[2] = { name: 'armor t1', url: '/ArmorT1.png' };

type Props = {
  isOpen: boolean;
};

export const Inventory: FC<Props> = ({ isOpen }) => {
  const [inventory, setInventory] = useState(initialInventory);
  return (
    <>
      {isOpen &&
        createPortal(
          <section className={styles.inventory}>
            {inventory.map((item, index) => (
              <InventoryCell key={index} name={item.name} url={item.url} />
            ))}
          </section>,
          document.body
        )}
    </>
  );
};
