import React, {useState} from 'react';

//material-ui
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import SubjectIcon from '@material-ui/icons/Subject';
import PopupEdit from '../partials/PopupEdit';


//my components
import DialogEdit from '../partials/DialogEdit'

//importing styles
import styles from '../../assets/styles/cardsAtv';
import { makeStyles } from "@material-ui/core/styles";


function CardsFinished(props) {
    //set styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  //set consts
  const [openPopUpEdit, setOpenPopUpEdit] = useState(false)
  const {title, description,} = props

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
        
              <Button className={classes.dateSuccess}>
                <div>Concluido</div>
              </Button>
      <div>
        <SubjectIcon className={classes.iconComent}/>
      </div>
    </div>
    <PopupEdit
        openPopup = {openPopUpEdit}
        setOpenPopup = {setOpenPopUpEdit}
        edit={props}
      >
        <DialogEdit/>
      </PopupEdit>
     
    </div>
  );
}

export default CardsFinished;