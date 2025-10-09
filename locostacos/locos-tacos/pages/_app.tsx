import type { AppProps } from 'next/app';
import Image from 'next/image';
import '../styles/globals.css'; // Import global styles (Tailwind CSS)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Fixed logo in the top-left, visible on all pages */}
      <div className="fixed top-3 left-3 z-50 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none">
        <Image src="/locostacos1.svg" alt="Loco's Tacos" width={80} height={80} priority />
      </div>

      <Component {...pageProps} />
    </>
  );
}