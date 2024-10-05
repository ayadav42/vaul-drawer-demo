'use client';

import { useRef } from 'react';
import VaulDrawer from './vaul-drawer';

export default function Home() {
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex h-screen'>
      <div id='side-panel' className='w-64 bg-blue-200 p-6'>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white'>
          Side Panel
        </h1>
      </div>
      <div
        id='main-panel'
        className='flex-1 bg-slate-100 p-6'
        ref={drawerContainerRef}>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white'>
          Main Panel
        </h1>
        <VaulDrawer drawerContainerRef={drawerContainerRef} />
      </div>
    </div>
  );
}
