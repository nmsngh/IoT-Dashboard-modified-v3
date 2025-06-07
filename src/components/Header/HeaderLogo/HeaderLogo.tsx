import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex gap-5">
      <Image src="/images/header/logo.png" width={256} height={88} alt="logo" />
      <Image
        src="/images/header/logo2.png"
        width={150}
        height={87}
        alt="logo2"
      />
    </Link>
  );
}
