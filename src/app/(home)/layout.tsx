import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-auto mb-12 mt-12 max-w-[1800px] w-full px-4">
        {children} 
      </main>
    </>
  );
}