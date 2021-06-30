import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

const Sidebar = () => {
        //use usestate hook
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>

            <SidebarRow Icon={LocalHospitalIcon} title="COVID 19 INFORMATION CENTER"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon}  title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />

            <footer>
                &copy; 2021 dprincecoder
            </footer>
        </div>
    )
}

export default Sidebar;
