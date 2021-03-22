import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import { FormControl } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Products from "../Products/Products";
import Title from "./Title";
import Orders from "./Orders";


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({

    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    formTitle: {
      margin: "0 auto",
    },
    fixedHeight: {
        height: 300,
    },
    productsField: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
}));
function PostForm({formHeading}) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [age, setAge] = React.useState('');
    const [image, setImage] = React.useState('')
    const [state, setState] = React.useState({
        publish: false,
    });

    const handleChangeSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChangeDropdown = (event) => {
        setAge(event.target.value);
    };
    const handleUploadImage = event => {
        setImage(event.target.value)
    }
    return (
        <div>
            <div className={classes.appBarSpacer} />
            <h1>{formHeading}</h1>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3} >
                    <Grid item xs={5} md={8} lg={5}>
                        <Paper className={fixedHeightPaper}>
                            <Title>Form</Title>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Блогер</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChangeDropdown}
                                >
                                    <MenuItem value={1}>Blogger#1</MenuItem>
                                    <MenuItem value={2}>Blogger#2</MenuItem>
                                    <MenuItem value={3}>Blogger#3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <FormControlLabel
                                    control={<Switch color="primary" checked={state.publish} onChange={handleChangeSwitch} name="publish" />}
                                    label="Опубликовать"
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        variant="contained"
                                        сolor="default"
                                        component="span"
                                        className={classes.button}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Загрузить изображение
                                    </Button>
                                </label>
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary">
                                    Отправить
                                </Button>
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Products/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default PostForm;
