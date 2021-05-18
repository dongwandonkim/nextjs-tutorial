import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1> hi</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
