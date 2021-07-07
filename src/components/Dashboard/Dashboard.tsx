import React from 'react';
import my_image from '../../assets/images/babybrandon.jpg'
import not_my_image from '../../assets/images/inameyoukevin.png'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Paper} from '@material-ui/core';
import { DataTable } from '../../components/DataTable';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${my_image});`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4ef3b4',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_a: {
        color: '#4ef3b4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
})

export const Dashboard = () => {
    const classes = useStyles(); // this is a silly place pls explain

    return (
        <main className={classes.main}>
            {/* why does useStyles() work and we still have to write 'classes' */}
        <div className={useStyles().text}> 
            <h1>Look at your fancy instruments</h1>
            <p>I stole a meme from <a href="https://www.instagram.com/bandmemes666/">@bandmemes666</a> but now I can't make it fit with all this table content so now it is at the signin page</p>
            <h3 className={`${classes.logo}`}>
                <Link to='/' className={`${ classes.logo_a } ${ classes.logo_navigation }`}>Brandon Brand Click <p className={`${ classes.h3 }`}>Here</p> to return home</Link>
            </h3>
            <h5>Styling this is TERRIBLE</h5>
            <h4>a NIGHTMARE</h4>
            <p className={`${ classes.h3 }`}>I was being dramatic I figured it out</p>
            {/* <Paper variant="outlined">
            <img src={`${not_my_image}`} alt="band meme"/>
            </Paper> */}
            <DataTable /> 
        </div>
        </main>
    )
}