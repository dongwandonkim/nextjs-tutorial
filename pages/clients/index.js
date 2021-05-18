import React from 'react';
import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { id: 'don', name: 'dongwan' },
    { id: 'kim', name: 'kim' },
    { id: 'donkim', name: 'dongwankim' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link href={{ pathname: 'clients/[id]', query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
