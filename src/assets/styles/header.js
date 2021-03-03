import img from '../img/background.jpg'

const styles = {
    containerBg:{
        backgroundImage:`url(${img})`,
        backgroundPosition:'bottom rigth',
        width:'100%',
        height:'100vh',
    },
    header:{
        width:'99.3%',
        fontSize:'1em',
        height:'3em',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        padding:'0.3em',
    },
    options:{
        display:'flex',
        justifyContent:'flex-end',
        padding:'0px 0.3em',
    },
    icons:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width:'2.3em',
        height:'2.3em',
        color:'white',
        border:'none',
        borderRadius:'5px',
        margin:'0px 0.2em',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer',
        "&:hover,&:focus": {
            transform: "translateY(-3px)",
            filter: "brightness(130%)",
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            transition: "300ms",
          },
    },
    icon:{
        width:'1em',
        height:'1em',
        
    },
    link:{
        cursor:'pointer',
        textDecoration:'none',
        color:'rgba(255, 255, 255, 0.5)',
        "&:hover,&:focus": {
            transform: "translateY(-2px)",
            filter: "brightness(130%)",
            color: 'rgba(255, 255, 255, 0.2)',
            transition: "300ms",
          },
    },
  };


export default styles;