import { Drawer } from 'vaul';

type VaulDrawerProps = {
  drawerContainerRef: React.RefObject<HTMLDivElement>;
};

export default function VaulDrawer({ drawerContainerRef }: VaulDrawerProps) {
  return (
    <Drawer.Root container={drawerContainerRef.current}>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none'>
          <div className='p-4 bg-white'>Hi There, I am drawer</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
