const styles = {
    list:{
        background:'white',
        margin:'0.2em',
        width:'100%',
        borderRadius:'5px',
        borderBottom:'1px solid #B5B5B5',
        "&:hover,&:focus": {
            transform: 'scaleZ(0.5)',
            filter: "brightness(130%)",
            background: 'rgba(255, 255, 255, 0.3)',
            transition: "500ms",
            border:'none',
            color:'white',
            cursor:'pointer'
          },
    },
    cardTitle:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'85%',
        padding:'0.5em 2em 0.5em 0.5em',
        fontWeight:'300',
    },
    icon:{
        color:'white',
        margin:'0px -1em 0px 0px',
        "&:hover,&:focus": {
            transform: "translateY(-2px)",
            filter: "brightness(130%)",
            transition: "300ms",
            cursor:'pointer'
          },
    },
    iconComent:{
        margin:'0px 0px 0px 0px',
        borderRadius:'5px',
        "&:hover,&:focus": {
            background: 'rgba(255, 255, 255, 0.3)',
            transform: "translateY(-2px)",
            filter: "brightness(130%)",
            transition: "300ms",
            cursor:'pointer'
          },
    },
    description:{
        margin:'0.5em',
        fontWeight:'300',
        fontSize:'0.8em'
    },
    rodapeAtv:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    dateDanger:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:'5px',
        margin:'1em 0.5em',
        height:'2em',
        color:'white',
        background:'#ff1744',
        border:'2px solid #ff1744',
        "&:hover,&:focus": {
            transform: "translateY(-2px)",
            filter: "brightness(130%)",
            transition: "300ms",
            cursor:'pointer'
          },
    },
    dialogAdd:{
        background:'#242C33',
        color:'white',
        borderRadius:'5px',
        border:'none'
    },
    dateSuccess:{
        borderRadius:'5px',
        margin:'1em 0.5em',
        height:'2em',
        background:'#4caf50',
        color:'white',
        border:'2px solid #4caf50',
        "&:hover,&:focus": {
            transform: "translateY(-2px)",
            filter: "brightness(130%)",
            transition: "300ms",
            cursor:'pointer'
          },
    },
    dateWarning:{
        borderRadius:'5px',
        margin:'1em 0.5em',
        height:'2em',
        background:'#ffc400',
        color:'white',
        border:'2px solid #ffc400',
        "&:hover,&:focus": {
            transform: "translateY(-2px)",
            filter: "brightness(130%)",
            transition: "300ms",
            cursor:'pointer'
          },
    },
    timeIcon:{
        width:'0.7em',
        heigth:'0.7em',
        margin:'0px 0.2em 0px 0px'
    }

}

export default styles;