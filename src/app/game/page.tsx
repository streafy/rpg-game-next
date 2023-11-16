import { GameBoard } from '@/components/game/GameBoard';
import { Inventory } from '@/components/game/inventory/Inventory';
import Image from 'next/image';
import Link from 'next/link';

export const Page = () => {
  return (
    <>
      <h1>Game Page</h1>
      <button>
        <Link href={'/'}>
          <Image src="/X.png" alt={'Exit'} width="64" height="64" sizes="8vh" />
        </Link>
      </button>
      <GameBoard />
    </>
  );
};

export default Page;
