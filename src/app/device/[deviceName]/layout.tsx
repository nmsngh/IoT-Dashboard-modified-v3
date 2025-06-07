import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

export default function DeviceDetailLayout({ children }: Props) {
  return (
    <>
      <Header />
      {/* <main className="mx-auto mb-12 mt-12 w-[1480px]">{children}</main> */}
      <main className="mx-auto mb-12 mt-12 max-w-[1480px] w-full px-4">{children}</main>
    </>
  );
}
