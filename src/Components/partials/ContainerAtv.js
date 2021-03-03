import React, {useState, useEffect, useLayoutEffect} from 'react';

//import material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grow } from '@material-ui/core';

//importing styles
import styles from '../../assets/styles/ContainerAtv';
import { makeStyles } from "@material-ui/core/styles";

//my components
import CardsTo from './CardsTo';
import CardsDo from './CardsDo';
import CardsFinished from './CardsFinished';
import DialogAdd from './DialogAdd';
import PopupAdd from './PopupAdd';


if(!localStorage.tarefas){
  localStorage.setItem('tarefas',JSON.stringify([{
    title:'Tutorial de boas vindas',
    status:0,
    description:'Bem vindo',
    id:0
  }]))
}

function ContainerAtv() {
  
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [status, setStatus] = useState(null)
  const [openPopUp, setOpenPopUp] = useState(false)
  const [toData, setToData] = useState([]);
  const [doData, setDoData] = useState([]);
  const [finishedData, setFinishedData] = useState([])
  const [edit, setEdit] = useState([]);

  //functions
  const getTarefas = async()=>{
    var res = JSON.parse(localStorage.tarefas)
    var dataTo = []
    var dataDo = []
    var dataFinished = []
    if(localStorage.tarefas){
      res.filter((data)=>{
        if(data.status == 0)
          dataTo.push(data)
        else if(data.status == 1)
          dataDo.push(data)
        else if(data.status == 2)
          dataFinished.push(data)
    })
    }
    setToData(dataTo)
    setDoData(dataDo)
    setFinishedData(dataFinished)
    setEdit(dataDo)
  }

  useLayoutEffect(()=>{
    if(localStorage.tarefas){
      getTarefas()
    }
  },[localStorage.tarefas])

  


  return(
    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.cards}
      >
        {/*To */}
        <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 500 }}
        >
         <Grid item sm={3}>
         <Grid item sm={12} className={classes.cardH}>
           <div className={classes.cardHeader}>
            <p className={classes.title}>A fazer</p>
            <div className={classes.btnOptions}><MoreVertIcon/></div>
           </div>
          </Grid>
          <Grid item sm={12} className={classes.card}>
            {toData.map((data, id)=>{
              return <CardsTo 
                title={data.title}
                description={data.description}
                endTime={data.endTime}
                coments={data.coments}
                id={data.id}
                status={data.status}
                />
          })}
          </Grid>
          <Grid item sm={12}>
            <Grid item sm={12} className={classes.cardF}>
                <div className={classes.add} onClick={()=>{setStatus(0);setOpenPopUp(true)}}>
                  <AddIcon/> Adicionar tarefa
                </div>
            </Grid>
          </Grid>
        </Grid>
        </Grow>

        {/*Do */}
        <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 500 }}
        >
        <Grid item sm={3}>
          <Grid item sm={12} className={classes.cardH}>
            <div className={classes.cardHeader}>
              <p className={classes.title}>Em execução</p>
              <div className={classes.btnOptions}><MoreVertIcon/></div>
            </div>
            </Grid>
          <Grid item sm={12} className={classes.card}>
          {doData.map((data)=>{
              return <CardsDo 
                title={data.title}
                description={data.description}
                endTime={data.endTime}
                coments={data.coments}
                id={data.id}
                status={data.status}/>
          })}
          </Grid>
            <Grid item sm={12}>
              <Grid item sm={12} className={classes.cardF}>
                  <div onClick={()=>{setStatus(1);setOpenPopUp(true)}} className={classes.add}>
                    <AddIcon/> Adicionar tarefa
                  </div>
              </Grid>
            </Grid>
          </Grid>
          </Grow>

        {/*Finished*/}
        <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 500 }}
        >
        <Grid item sm={3}>
          <Grid item sm={12} className={classes.cardH}>
            <div className={classes.cardHeader}>
              <p className={classes.title}>Concluido</p>
              <div className={classes.btnOptions}><MoreVertIcon/></div>
            </div>
            </Grid>
          <Grid item sm={12} className={classes.card}>
          {finishedData.map((data)=>{
              return <CardsFinished 
                title={data.title}
                description={data.description}
                endTime={data.endTime}
                coments={data.coments}
                id={data.id}
                status={data.status}/>
          })}
          </Grid>
            <Grid item sm={12}>
              <Grid item sm={12} className={classes.cardF}>
                  <div onClick={()=>{setStatus(2);setOpenPopUp(true)}} className={classes.add}>
                    <AddIcon/> Adicionar tarefa
                  </div>
              </Grid>
            </Grid>
          </Grid>
      </Grow>
      </Grid>
      <PopupAdd
        openPopup = {openPopUp}
        setOpenPopup = {setOpenPopUp}
        status={status}
      >
        <DialogAdd/>
      </PopupAdd>

      
    </Container>
  );
}

export default ContainerAtv;