import React, {useState} from 'react';

//material-ui
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//importing styles
import styles from '../../assets/styles/dialogAdd';
import { makeStyles } from "@material-ui/core/styles";
//import database
function DialogAdd(props){
    //set styles 
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    //set consts
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [endTime, setEndTime] = useState(null);
    const [files, setFiles] = useState('');
    const status = props.status;
    const id = JSON.parse(localStorage.tarefas).length
    const coments = [];

    //functions
    const handleActivity = (e)=>{
        
        e.preventDefault();
        const data = {
            id,
            title,
            status,
            description,
            endTime,
            files,
            coments
        }
        var session = []
        var aux = []
        aux.push(data)
        if(!localStorage.tarefas){
            localStorage.setItem('tarefas',JSON.stringify({
                title:'Tutorial de boas vindas',
                status:1,
                description:'Bem vindo'
            }))
        }
        else{
        session = JSON.parse(localStorage.tarefas)
        session.push(data)
        localStorage.tarefas = JSON.stringify(session)
        }
        props.setOpenPopup(false)
    }

  return(
        <div class="modal">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
            <h2 className={classes.title}>
                Adicionar nova tarefa
            </h2>
            <div className={classes.divInputFile} style={{alignItems:'flex-start'}}>
            <input 
                className={classes.input}
                style={{width:'45%'}}
                onChange={(e)=>{setTitle(e.target.value)}}
                placeholder="Nome da tarefa"/>
            <TextField
                style={{width:'51%', background:"#FFF", borderRadius:'10px'}}
                id="datetime-local"
                type="datetime-local"
                onChange={(e)=>{setEndTime(e.target.value)}}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </div>
            <textarea 
                className={classes.inputDescription}
                onChange={(e)=>{setDescription(e.target.value)}}
                placeholder="Descrição"/>
            <div className={classes.divInputFile}>
                <input
                    className={classes.input}
                    style={{margin:'0px', padding:'0px'}}
                    placeholder="Arquivos selecionados"
                    disabled="true"/>
                
                <label 
                    for='selecao-arquivo'
                    className={classes.label}>
                    Anexar arquivos
                </label>  
                
                <input
                    id='selecao-arquivo'
                    className={classes.inputFile}
                    type="file"
                    placeholder="Nome da tarefa"/>
            </div>    
            <div className={classes.footerAdd}>
                
                <button onClick={()=>{props.setOpenPopup(false)}} className={classes.btnCancel}>
                    Cancelar
                </button>

                <button className={classes.btnConfirm} onClick={handleActivity}>
                    Adicionar
                </button>
            </div>
            </Grid>
           
        </div>
  );
}

export default DialogAdd;