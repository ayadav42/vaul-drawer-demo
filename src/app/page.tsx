'use client';

import { useRef } from 'react';
import VaulDrawer from './vaul-drawer';

export default function Home() {
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex h-screen'>
      <div id='side-panel' className='w-96 bg-blue-200'>
        Side Panel
      </div>
      <div
        id='main-panel'
        className='flex-1 bg-slate-100'
        ref={drawerContainerRef}>
        <VaulDrawer drawerContainerRef={drawerContainerRef} />
      </div>
    </div>
  );
}
