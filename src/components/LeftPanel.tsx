import React, { useEffect } from "react";
import ProfileIcon from "../assets/ProfileIcon.svg";
import MaterialIcon from "../assets/MaterialIcon.svg";
import GaleryIcon from "../assets/GaleryIcon.svg";
import SettingIcon from "../assets/SettingIcon.svg";
import './LeftPanel.css'
import { NavLink } from "react-router-dom";
import { useUnit } from "effector-react";
import { $currentUser } from "../stores/userStore";
import { createTreeFx, getTreesFx, $trees } from "../stores/treeStore";
import type { Tree } from "../types";

const LeftPanel = () => {
    const curUser = useUnit($currentUser);
    const trees = useUnit($trees);
    const createTree = useUnit(createTreeFx);
    const fetchTrees = useUnit(getTreesFx);

    useEffect(() => {
        fetchTrees();
    }, [fetchTrees]);

    const filteredTree = trees.filter(
        (trees: Tree) => trees.authorId.toString() === curUser?.id
      );

    return (
        <div className="leftPanel">
            <div>
                <h3 className="logo">Нескучные потомки</h3>
                <div className="quickMenu">
                    <ul>
                        <NavLink to="/persons" className="li">
                            <div className="menuContainer"><img src={GaleryIcon} alt="" className="menuIcon" /></div> <p>Карточки близких</p>
                        </NavLink>
                    </ul>
                </div>
                <div className="quickTree">
                    <h3>Ваши деревья</h3>
                    <div>
                        {filteredTree.map(tree => (
                            <NavLink to={`/editor?id=${tree.id}`} className="li" key={tree.id}>
                                <svg className="treeIcon">
                                    <rect width="24" height="24" fill="green" rx={6} />
                                </svg>
                                <p>{tree.name}</p>
                            </NavLink>
                        ))}
                        {curUser &&
                            <div
                                className="li"
                                onClick={() => createTree({ authorId: curUser.id })}
                            >
                                <span>+</span> Создать новое
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;
