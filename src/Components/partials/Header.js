import React from 'react';

//material-ui components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


//material-ui icons
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

//importing styles
import styles from '../../assets/styles/header'

export default function Header() {
    
    const useStyles = makeStyles(styles);
    const classes = useStyles();
  return(
      <div>
          <div className={classes.header}>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4} style={{display:'flex',justifyContent:'center'}}>
          <a href="#" className={classes.link}>TO-DO</a>
        </Grid>
        <Grid item xs={4} className={classes.options}>
            <div className={classes.icons}>
              <AddIcon className={classes.icon}/>
            </div>
            <div className={classes.icons}>
              <InfoIcon className={classes.icon}/>
            </div>
            <div className={classes.icons}>
              <PersonIcon className={classes.icon}/>
            </div>
        </Grid>
        </Grid>
        </div>
      </div>
  );
}
