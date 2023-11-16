import { FC } from 'react';
import styles from './inventory.module.css';
import Image from 'next/image';

type Props = {
  name: string;
  url: string;
};

export const InventoryCell: FC<Props> = ({ name, url }) => {
  return (
    <div className={styles.inventory_cell}>
      {Boolean(url) && (
        <Image src={url} alt={name} width="64" height="64" sizes="8vh" />
      )}
    </div>
  );
};
