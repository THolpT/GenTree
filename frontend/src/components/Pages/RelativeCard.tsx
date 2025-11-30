import React, { useState, useEffect } from 'react';
import LeftPanel from "../LeftPanel";
import styles from "../Pages/RelativeCard.module.css";
import { $persons, getPersonsFx } from '../../stores/personStore';
import { useUnit } from 'effector-react';
import { $currentUser } from '../../stores/userStore';
import { $trees } from '../../stores/treeStore';
import EditUnit from '../updateUnit';

const RelativeCard = () => {
  const curUser = useUnit($currentUser);
  const trees = useUnit($trees).filter(tree => tree.authorId == curUser?.id)
  const persons = useUnit($persons);
  const fetchPersons = useUnit(getPersonsFx);

  const [choosenTree, setChoosenTree] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedPersonId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPersonId(null);
  };

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);  

  const filteredPersons = persons
    .filter((person: any) => person.treeId?.toString() === choosenTree)
    .filter((person: any) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div style={{ display: 'flex', width: '99%' }}>
      <LeftPanel />
      <div style={{ flexGrow: 1, paddingLeft: '20px' }}>
        <div style={{ marginTop: '50px' }}>
          <h2 className="titleWithLine" style={{ marginBottom: '8px' }}>Ваши родственники</h2>
          <p style={{ marginTop: 0, marginBottom: '24px', color: '#666' }}>
            Выберите дерево, чтобы посмотреть информацию о родных
          </p>
          <hr style={{ marginBottom: '20px' }} />
          <select
            className={styles.dropDown}
            style={{ marginBottom: '20px' }}
            value={choosenTree}
            onChange={(e) => setChoosenTree(e.target.value)}
          >
            <option value="" disabled hidden>Выбрать дерево</option>
            {trees.map(tree => (
              <option key={tree.id} value={tree.id}>
                {tree.name}
              </option>
            ))}
          </select>
          <hr style={{ marginBottom: '20px' }} />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <div>
              <b>Всего родственников: {filteredPersons.length}</b>
            </div>

            <div>
              <input
                type="search"
                placeholder="Поиск"
                className={styles.searchBar}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {filteredPersons.map((relative) => (
            <div key={relative.id} className={styles.card}>
              <div className={styles.avatar}></div>
              <div className={styles.cardTextContainer}>
                <div>{relative.name}</div>
                <div>{relative.birthDate}</div>
              </div>
              <button
                className={styles.openBtn}
                onClick={() => openModal(relative.id)}
              >
                Открыть
              </button>
            </div>
          ))}
        </div>
      </div>
      <EditUnit
        isOpen={isModalOpen}
        nodeId={selectedPersonId}
        onClose={closeModal}
      />
    </div>
  );
};

export default RelativeCard;
