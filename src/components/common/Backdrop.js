import React from 'react';
import classes from './Backdrop.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { sidebarActions } from '../../store/sidebar-slice';
const Backdrop = () => {
    const dispatch = useDispatch();
    const showSidebar = useSelector(state => state.sidebar.sidebar); 
    const toggleHandler = () => {
        dispatch(sidebarActions.toggleSidebar())
    }
    return (
        <div className={!showSidebar && classes.backdrop} onClick={toggleHandler}>
            
        </div>
    );
};

export default Backdrop;