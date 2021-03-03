import React, {useEffect, useState} from 'react';

//material-ui
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import { Button, FormControl, InputLabel } from '@material-ui/core';

//importing styles
import styles from '../../assets/styles/dialogAdd';
import { makeStyles } from "@material-ui/core/styles";

function DialogEdit(props) {
    const {openPopup, setOpenPopup, edit} = props;

    //set styles
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    //set consts 
    const [title, setTitle] = useState(props.edit.title)
    const [endTime, setEndTime] = useState(props.edit.endTime)
    const [description, setDescription] = useState(props.edit.description)
    const [status, setStatus] = useState(props.edit.status);
    const [idDelete, setIdDelete] = useState(null);
    const [isDelete, setIsDelete] = useState(false)
    const id = props.edit.id
    const options = [
        {value:0, name:'A fazer'},
        {value:1, name:'Em execução'},
        {value:2, name:'Concluído'}
      ];
    //functions
    const handleEdit = (e)=>{
        e.preventDefault();
        const data={
            title,
            endTime,
            description,
            id,
            status
        }
        const aux = JSON.parse(localStorage.tarefas)
        aux[id].title = data.title
        aux[id].description = data.description
        aux[id].endTime = data.endTime
        aux[id].status = data.status
        localStorage.tarefas = JSON.stringify(aux)
        window.location.href="http://localhost:3000"
    }
    const handleDelete = async()=>{
        const aux = JSON.parse(localStorage.tarefas)
        console.log(id)
        console.log(aux[id])
        await aux.splice(id, 1)
        localStorage.tarefas = JSON.stringify(aux)
        window.location.href="http://localhost:3000"
    }
    
    useEffect(()=>{
        if(isDelete){
            handleDelete()
        }
    },[idDelete])

    return(
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
            <h2 className={classes.title}>Editar Tarefa</h2>
            <input 
                className={classes.input}
                style={{width:'98%'}}
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                placeholder="Nome da tarefa"
                />
            <div className={classes.divInputFile} style={{display:'flex',alignItems:'center'}}>
            <div>
            <FormControl variant="filled" xs={12} sm={12} md={12}>
                        <InputLabel htmlFor="demo-simple-select-filled-label" 
                        className={classes.inputLabelUI}>
                          Status
                        </InputLabel>
                        <Select 
                            className={classes.selectLabelUI}
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={status}
                            onChange={(e)=>{setStatus(e.target.value)}}
                        >
                          {options.map((options) => {
                            return (
                              <MenuItem value={options.value}>
                                {options.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
            </FormControl>
            </div>
            <TextField
                style={{width:'67%', background:"#FFF", borderRadius:'10px'}}
                id="datetime-local"
                type="datetime-local"
                defaultValue={endTime}
                onChange={(e)=>{setEndTime(e.target.value)}}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </div>

            

            <textarea 
                className={classes.inputDescription}
                placeholder="Descrição"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                />
               
            <div className={classes.footerAdd}>
                
                <button onClick={()=>{setOpenPopup(false)}} className={classes.btnCancel}>
                    Cancelar
                </button>

                {id===0?<></>:
                    <button onClick={()=>{setIdDelete(id); setIsDelete(true)}} className={classes.btnDelete}>
                        Excluir
                    </button>
                }

                <button onClick={handleEdit} className={classes.btnConfirm}>
                    Salvar
                </button>
            </div>

            
            </Grid>
           
        </div>
  );
}

export default DialogEdit;