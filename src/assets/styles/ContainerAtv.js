const styles = {
    cards:{
        margin:'3em 0em',
    },
    atividade:{
    },
    
    title:{
        fontSize:'0.97em',
        color:'white',
        fontWeight:'400',
        padding:'0.5em'
    },
    btnOptions:{
        fontSize:'0.97em',
        color:'white',
        fontWeight:'400',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        cursor:'pointer',
        width:'2em',
        height:'2em',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'5px',
        "&:hover,&:focus": {
            transform: "translateY(-3px)",
            filter: "brightness(130%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "300ms",
          },
    },
    add:{
        fontSize:'0.97em',
        color:'white',
        fontWeight:'400',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        cursor:'pointer',
        width:'60%',
        height:'2em',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'5px',
        "&:hover,&:focus": {
            transform: "translateY(-3px)",
            filter: "brightness(130%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "300ms",
          },
    },
    cardHeader:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    
    cardH:{
        margin:'0px 0.5em',
        padding:'0.4em',
        color:'white',
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius:'5px 5px 0px 0px',
        maxHeight:`50vh`
    },
    cardF:{
        display:'flex',
        justifyContent:'flex-end',
        margin:'0px 0.5em',
        padding:'0.7em',
        color:'white',
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius:'0px 0px 5px 5px',
        maxHeight:`50vh`
    },
    dialogAdd:{
        background:'#242C33',
        color:'white',
        borderRadius:'5px',
        border:'none'
    },
    card:{
        margin:'0px 0.5em',
        padding:'0.4em',
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        maxHeight:`65vh`,
        overflowY: 'scroll',
        "&::-webkit-scrollbar":{
            width: "0.5em", 
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius:'5px'   
        },
        "&::-webkit-scrollbar-thumb":{ 
            backgroundColor:'#B5B5B5', 
            borderRadius:'5px'   
    },
}
    
};


export default styles;