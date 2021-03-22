import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Link} from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";



export const mainListItems = (
    <div>
        <Link to='/main'>
            <ListItem button>
                <ListItemText primary="Главная" />
            </ListItem>
        </Link>
        <Link to='/form'>
            <ListItem button>
                <ListItemText primary="Форма" />
            </ListItem>
        </Link>
    </div>
);
