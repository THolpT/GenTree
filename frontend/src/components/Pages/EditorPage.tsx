import React, { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';
import { $persons, getPersonsFx } from '../../stores/personStore';
import LeftPanel from '../LeftPanel';
import RadialGenealogy from '../Trees/radialTree';
import FanTree from '../Trees/fanTree';
import OrgTree from '../Trees/orgTree';
import './EditorPage.css';
import { $currentUser } from '../../stores/userStore';
import { useSearchParams } from 'react-router-dom';
import fanTreeIcon from '../../assets/Group 48095343.svg'
import orgTreeIcon from '../../assets/Group 48095341.svg'
import radTreeIcon from '../../assets/Group 48095342.svg'
import { downloadGedcom, type Tree } from '../../types';
import { $trees, getTreeByIdFx, updateTreeFx } from '../../stores/treeStore';

const EditorPage = () => {
  const [params] = useSearchParams();
  const treeId = params.get("id") || "";
  const currentTree = useUnit($trees).find((tree: Tree) => tree.id == treeId)

  const persons = useUnit($persons);
  const fetchPersons = useUnit(getPersonsFx);
  const updateTreeName = useUnit(updateTreeFx);

  const [treeName, setTreeName] = useState(currentTree?.name || "");
  const [treeType, setTreeType] = useState<'radial' | 'fan' | 'org'>('radial');

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  useEffect(() => {
    setTreeName(currentTree?.name || "");
  }, [currentTree]);

  const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTreeName(value);
    updateTreeName({ id: treeId, data: {
      name: value
    } });
  };

  const filteredPersons = persons.filter(
    (person: any) => person.treeId?.toString() === treeId
  );

  const allIds = new Set(filteredPersons.map(p => p.id));

  const nds = filteredPersons
    .filter(person => !person.childId || allIds.has(person.childId))
    .map(person => ({
      id: person.id,
      pid: person.childId || undefined,
      name: person.name,
      img: person.img || undefined,
    }));
  
  const renderTree = () => {
    if (treeId != null && treeId != "")
    switch (treeType) {
      case 'fan':
        return <FanTree data={nds} treeId={treeId}/>;
      case 'org':
        return <OrgTree nodes={nds} treeId={treeId}/>;
      default:
        return <RadialGenealogy data={nds} treeId={treeId}/>;
    }
  };

  return (
    <div className='editor'>
      <LeftPanel />
      <div>
        <input 
          type="text" 
          className="tree-name-input" 
          value={treeName} 
          onChange={handleRename}
        />
        <div className="tree-menu">
          <button onClick={() => setTreeType('org')}><img src={orgTreeIcon} /></button>
          <button onClick={() => setTreeType('radial')}><img src={radTreeIcon} /></button>
          <button onClick={() => setTreeType('fan')}><img src={fanTreeIcon} /></button>
        </div>
      </div>

      <div className="port-container">
        <button onClick={() => downloadGedcom(filteredPersons)}>Export</button>
      </div>

      {renderTree()}
    </div>
  );
};

export default EditorPage;
