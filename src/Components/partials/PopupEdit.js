import React from 'react';
import DialogEdit from './DialogEdit';
import DialogEd from '@material-ui/core/Dialog';
import DialogContentEd from '@material-ui/core/DialogContent';

// import { Container } from './styles';

function PopupEdit(props) {
    const {openPopup, setOpenPopup, edit} = props;
    return(
    <DialogEd
        open={openPopup}
        onClose={()=>{setOpenPopup(false)}}
      >
        <DialogContentEd 
            style={{background:'#242C33',color:'white',borderRadius:'5px'}}
            dividers>
            <DialogEdit openPopup={openPopup} setOpenPopup={setOpenPopup} edit={edit}/>
        </DialogContentEd>
        
      </DialogEd>
  );
}

export default PopupEdit;