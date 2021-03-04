import React from 'react';
import DialogAdd from './DialogAdd';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

// import { Container } from './styles';

function PopupAdd(props) {
    const {openPopup, setOpenPopup, status} = props;
  return(
    <Dialog
        open={openPopup}
        onClose={()=>{setOpenPopup(false)}}
      >
        <DialogContent 
            style={{background:'#242C33',color:'white',borderRadius:'5px'}}
            dividers>
            <DialogAdd setOpenPopup={setOpenPopup} status={status} />
        </DialogContent>
        
      </Dialog>
  );
}

export default PopupAdd;