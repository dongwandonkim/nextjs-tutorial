import { useRouter } from 'next/router';
import React from 'react';

export default function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    //load data...
    // router.push('/clients/don/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'don', clientprojectid: 'abc' },
    });
  }
  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}
