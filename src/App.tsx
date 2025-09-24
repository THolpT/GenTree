import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RadialTree, { type PersonNode } from './components/Trees/circularTree';

const familyData = [
  { id: 1, pids: [2], name: 'Amber McKenzie', gender: 'female', img: 'https://cdn.balkan.app/shared/2.jpg' },
  { id: 2, pids: [1], name: 'Ava Field', gender: 'male', img: 'https://cdn.balkan.app/shared/m30/5.jpg' },
  { id: 5, pids: [6], name: 'Amber McKenzie', gender: 'female', img: 'https://cdn.balkan.app/shared/2.jpg' },
  { id: 6, pids: [5], name: 'Ava Field', gender: 'male', img: 'https://cdn.balkan.app/shared/m30/5.jpg' },
  { id: 3, pids: [4], mid: 5, fid: 6, name: 'Peter Stevens', gender: 'male', img: 'https://cdn.balkan.app/shared/m10/2.jpg' },
  { id: 4, pids: [3], mid: 1, fid: 2, name: 'Savin Stevens', gender: 'female', img: 'https://cdn.balkan.app/shared/m10/1.jpg' },
];

const orgData = [
  { id: 1, name: 'Denny Curtis', title: 'CEO', img: 'https://cdn.balkan.app/shared/2.jpg' },
  { id: 2, pid: 1, name: 'Ashley Barnett', title: 'Sales Manager', img: 'https://cdn.balkan.app/shared/3.jpg' },
  { id: 3, pid: 1, name: 'Caden Ellison', title: 'Dev Manager', img: 'https://cdn.balkan.app/shared/4.jpg' },
  { id: 4, pid: 2, name: 'Elliot Patel', title: 'Sales', img: 'https://cdn.balkan.app/shared/5.jpg' },
  { id: 5, pid: 2, name: 'Lynn Hussain', title: 'Sales', img: 'https://cdn.balkan.app/shared/6.jpg' },
  { id: 6, pid: 3, name: 'Tanner May', title: 'Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
  { id: 7, pid: 3, name: 'Fran Parsons', title: 'Developer', img: 'https://cdn.balkan.app/shared/8.jpg' }
]

const familyTree: PersonNode = {
  id: 'root',
  name: 'Ancestor',
  children: [
    {
      id: 'a',
      name: 'Alice',
      children: [
        { id: 'a1', name: 'Alice Jr.' },
        { id: 'a2', name: 'Alfred' },
      ],
    },
    {
      id: 'b',
      name: 'Bob',
      children: [
        { id: 'b1', name: 'Barbara' },
        {
          id: 'b2',
          name: 'Bill',
          children: [
            { id: 'b21', name: 'Ben' },
            { id: 'b22', name: 'Bella' },
          ],
        },
      ],
    },
    {
      id: 'c',
      name: 'Charlie',
    },
  ],
};



interface AppState {
  treeType: boolean;
  FamilyTreeComponent: React.ComponentType<any> | null;
  Chart: React.ComponentType<any> | null;
}

function App() {
  const [treeType, setTreeType] = useState<boolean>(false);
  const [components, setComponents] = useState<{
    FamilyTree: React.ComponentType<any> | null;
    OrgChart: React.ComponentType<any> | null;
  }>({
    FamilyTree: null,
    OrgChart: null
  });

  // Динамическая загрузка компонентов
  useEffect(() => {
    const loadComponents = async () => {
      if (treeType) {
        // Загружаем FamilyTree только когда он нужен
        const { default: FamilyTree } = await import('./components/Trees/familyTree');
        setComponents(prev => ({ ...prev, FamilyTree }));
      } else {
        // Загружаем OrgChart только когда он нужен
        const { default: Chart } = await import('./components/Trees/orgTree');
        setComponents(prev => ({ ...prev, OrgChart: Chart }));
      }
    };

    loadComponents();
  }, [treeType]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'R' || event.key === 'r') {
      setTreeType(prev => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className='app' tabIndex={0}>
      <LeftPanel />
      
      {treeType && components.FamilyTree ? (
        <components.FamilyTree nodes={familyData} />
      ) : components.OrgChart ? (
        <components.OrgChart nodes={orgData} />
      ) : (
        <div>Loading chart...</div>
      )}

      {/* <RadialTree data={orgData}></RadialTree> */}
    </div>
  );
}

export default App;