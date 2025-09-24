import React from "react";
import ProfileIcon from "../assets/ProfileIcon.svg";
import MaterialIcon from "../assets/MaterialIcon.svg";
import GaleryIcon from "../assets/GaleryIcon.svg";
import SettingIcon from "../assets/SettingIcon.svg";
import './LeftPanel.css'

const LeftPanel = () => {
    return (
        <div className="leftPanel">
            <div>
            <h3 className="logo">Нескучные потомки</h3>
            <div className="quickMenu">
                <ul>
                    <li>
                        <div className="menuContainer"><img src={ProfileIcon} alt="" className="menuIcon"/></div> <p>Профиль</p>
                    </li>
                    <li>
                        <div className="menuContainer"><img src={MaterialIcon} alt="" className="menuIcon"/></div> <p>Полезные материалы</p>
                    </li>
                    <li>
                        <div className="menuContainer"><img src={GaleryIcon} alt="" className="menuIcon"/></div> <p>Карточки близких</p>
                    </li>
                    <li>
                        <div className="menuContainer"><img src={SettingIcon} alt="" className="menuIcon"/></div> <p>Настройки</p>
                    </li>
                </ul>
            </div>
            <div className="quickTree">
                <h3>Ваши деревья</h3>
                <div>
                <li>
                    <svg className="treeIcon">
                    <rect width="24" height="24" fill="green" rx={6}/>
                    </svg> 
                    <p>Название дерева</p>
                </li>
                <li>
                <svg className="treeIcon">
                    <rect width="24" height="24" fill="green" rx={6}/>
                    </svg> 
                    <p>Название дерева</p>
                </li>
                <li>
                <svg className="treeIcon">
                    <rect width="24" height="24" fill="green" rx={6}/>
                    </svg> 
                    <p>Название дерева</p>
                </li>
                <li>
                <svg className="treeIcon">
                    <rect width="24" height="24" fill="green" rx={6}/>
                    </svg> 
                    <p>Название дерева</p>
                </li>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LeftPanel;