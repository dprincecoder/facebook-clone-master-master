import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useStateValue } from './StateProvider';

const Header = () => {
    //use usestate hook
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header-left">
                <FacebookIcon fontSize="large" className="header-logo"/>

                <div className="header-input">
                    <SearchIcon />
                    <input type="text" placeholder="search Facebook"/>
                </div>
            </div>

            <div className="header-center">
                <div className="header-option header-option-active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                {/* icon buttons */}
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
