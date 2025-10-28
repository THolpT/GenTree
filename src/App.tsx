import React, { useState, useEffect } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import OrgTree from './components/Trees/orgTree';
import { getPersonsFx } from './stores/personStore';
import type { Person } from './types';
import RadialTree from './components/Trees/radialTree';

function App() {
  const [nds, setNds] = useState<{id: string; pid?: string; name: string; img?: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPersons() {
      const persons: Person[] = await getPersonsFx();

      const nodes = persons.map(person => ({
        id: person.id,
        pid: person.childId?.toString(),
        name: person.name,
        img: person.img || undefined
      }));

      setNds(nodes);
      setLoading(false);
    }

    fetchPersons();
  }, []);

  return (
    <div className='app'>
      <LeftPanel />
      {!loading && nds.length > 0 ? (
        <RadialTree data={nds} />
      ) : (
        <p>Загрузка дерева...</p>
      )}
    </div>
  );
}

export default App;
