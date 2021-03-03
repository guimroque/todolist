import React, {useState, useEffect} from 'react';

//material-ui
import EditIcon from '@material-ui/icons/Edit';
import SubjectIcon from '@material-ui/icons/Subject';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Button from '@material-ui/core/Button';
import PopupEdit from '../partials/PopupEdit';


//my components
import DialogEdit from '../partials/DialogEdit'

//importing styles
import styles from '../../assets/styles/cardsAtv';
import { makeStyles } from "@material-ui/core/styles";



function CardsTo(props) {
  //set styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  //set consts
  const [openPopUpEdit, setOpenPopUpEdit] = useState(false)
  
  
  const {title, description, endTime, coments, id, tam} = props
  

  return(
    <div className={classes.list}>
      <div className={classes.cardTitle}>
        <div>{title}</div>
        <div onClick={()=>{setOpenPopUpEdit(true)}}><EditIcon className={classes.icon}/></div>
      </div>
      <div className={classes.description}>
           {description}
      </div>
      <div className={classes.rodapeAtv}>
              <Button
                className={classes.dateDanger} 
                style={{width:'auto', fontSize:'0.75em'}}>
                <AccessTimeIcon className={classes.timeIcon}/> 
                {endTime?<p>Prazo {endTime}</p>:<p>Não estipulado</p>}
              </Button>
              <input type="hidden"
                      value={id}></input>
            
      <Button>
        <SubjectIcon className={classes.iconComent}/>
      </Button>
    </div>
    <PopupEdit
        openPopup = {openPopUpEdit}
        setOpenPopup = {setOpenPopUpEdit}
        id={id}
        edit={props}
      >
        <DialogEdit/>
      </PopupEdit>
     
    </div>
  );
}

export default CardsTo;