import Head from 'next/head';
import { Interview } from '../src/components/interview';

export default function Home() {
  return (
    <div className="container">
      <Interview />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
