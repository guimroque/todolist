import React from 'react';

import  {makeStyles}  from "@material-ui/core/styles";
//importing styles
import styles from '../assets/styles/background'

//importing my components
import Header from './partials/Header'
import ContainerAtv from './partials/ContainerAtv'


export default function Index() {
    
    const useStyles = makeStyles(styles);
    const classes = useStyles();

  return(
    <div className={classes.containerBg}>
        <Header/>
        <ContainerAtv/>
    </div>
  );
}
