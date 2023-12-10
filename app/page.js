import Coursebar from '@/components/coursebar';

export const revalidate  = 0;
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export default function Home() {
  return (
    <body>
        <Coursebar/>
    </body>
  );
}