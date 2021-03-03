const styles = {
    input:{
        border: '0',
        borderBottom: '2px solid white',
        width:'95%',
        borderRadius:'5px',
        height:'2em',
        color:'#fff',
        background:'#242C33',
        outline: 'none',
        fontSize: '16px',
        marginBottom:'1.5em',
        transition: 'all .3s ease-out',
        padding:'0.1em 0.4em',
        "&:focus":{
            background:"rgba(255, 255, 255, 0.2)"
        }
    },
    title:{
        width:'100%',
        borderBottom:'1px solid white',
        margin:'0.2em 0px 1em 0px'
    },
    inputFile:{
        display:'none',
    },
    label:{
        backgroundColor: 'background:"rgba(255, 255, 255, 0.9)',
        width:'30%',
        borderRadius: '5px',
        border:'2px solid white',
        color: '#fff',
        fontSize:'0.75em',
        cursor: 'pointer',
        padding: '0.5em',
        "&:hover,&:focus": {
            filter: "brightness(130%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "400ms",
          },
      },
      btnConfirm:{
        backgroundColor: '#4caf50',
        width:'30%',
        borderRadius: '5px',
        border:'2px solid #4caf50',
        color: 'white',
        fontSize:'0.75em',
        margin:'0em 0.5em',
        cursor: 'pointer',
        padding: '0.5em',
        "&:hover,&:focus": {
            filter: "brightness(130%)",
            transform: "translateY(-2px)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "400ms",
            color:'#4caf50',
            fontWeight:'bold'
          },
      },
      btnCancel:{
        backgroundColor: '#ffc400',
        width:'30%',
        borderRadius: '5px',
        border:'2px solid #ffc400',
        color: 'white',
        fontSize:'0.75em',
        margin:'0em 0.5em',
        cursor: 'pointer',
        padding: '0.5em',
        "&:hover,&:focus": {
            filter: "brightness(130%)",
            transform: "translateY(-2px)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "400ms",
            color:'#ffc400',
            fontWeight:'bold'
          },
      },
      btnDelete:{
        backgroundColor: '#ff1744',
        width:'30%',
        borderRadius: '5px',
        border:'2px solid #ff1744',
        color: 'white',
        fontSize:'0.75em',
        margin:'0em 0.5em',
        cursor: 'pointer',
        padding: '0.5em',
        "&:hover,&:focus": {
            filter: "brightness(130%)",
            transform: "translateY(-2px)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "400ms",
            color:'#ff1744',
            fontWeight:'bold'
          },
      },
      divInputFile:{
          display:'flex',
          alignItems:'flex-end',
          justifyContent:'space-between',
          height:'2em',
          paddingBottom:'1.5em',
          width:'100%'
      },
      inputDescription:{
            border: '2px solid white',
            color:'white',
            width:'95%',
            borderRadius:'5px',
            height:'5em',
            background:'#242C33',
            outline: 'none',
            fontSize: '16px',
            marginBottom:'1.5em',
            transition: 'all .3s ease-out',
            padding:'0.7em 0.4em',
            "&:focus":{
                background:"rgba(255, 255, 255, 0.2)"
            }
    },
    footerAdd:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        color:'black',
        padding:'1.5em 0.5em 1em 0.5em'
    },
    inputLabelUI:{
        fontWeight:'bold', 
        fontSize:'1.5em',
        color:'white', 
        paddingTop:'0.3em'
    },
    selectLabelUI:{
        minWidth:'10em', 
        margin:'1em 0.4em', 
        color:'white',
        "&:hover":{
            background:"rgba(255, 255, 255, 0.2)"
        },
    }
}

export default styles;