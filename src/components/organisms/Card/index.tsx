
import {Paper, Box} from '@mui/material';
import Image from '../../atoms/Images';
// import {MoreHoriz} from '@mui/icons-material'
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '../../atoms/Typography';
import ProgressBar from '../../atoms/ProgressBar';
import Icon from '../../atoms/Icons';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import theme from '../../../Themes/main'
// import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../../atoms/Button';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/styles';
import ClockSvgIcon from '../../atoms/icons-svg/ClockSvgIcon';
import ReadsSvgIcon from '../../atoms/icons-svg/ReadsSvgIcon';




const styles={
    parent: {
        borderRadius: theme.spacing(1),
        margin: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(3)}`,
    },
    image: {
        borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`
    },
    content: {
        padding: theme.spacing(2)
    },
    rightIcon:{
        fontSize: theme.spacing(5)
    },
    timeIcon: {
        fontSize: theme.spacing(4),
        backGroundColor: theme.palette.textcolor.light,
        marginTop: theme.spacing(0)
    },
    readIcon: {
        alignItem:"right",
        fontSize: theme.spacing(4),
        color: theme.palette.textcolor.light,
        marginTop: theme.spacing(0)
    },
    progress:{
        borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    bookName: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    libraryButton: { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.spacing(6),
        borderTop: '1px solid lightGrey', 
        borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
        width: '100%',
    },
    finished:{
        color:'#0365F2',
        textAlign:'center'

    }

}
const themeProgress = createTheme({
    palette: {
     
      secondary: {
        main: '#E1ECFC',
      },
    },
  });

  

const CardComponent = ({imgHeight, url, bookName, writerName, timeRead = "0-minute read",readsNo, progress, width, inLibrary, libraryHandler,cardId}: any) => {
    const [hoverState, setHoverState] = useState(false);
    const [bookLibraryStatus, setBookLibraryStatus] = useState(inLibrary);
    const  hoverStateHandler = ()=>{
        setHoverState(!hoverState)
    }

    const readsRenderer =(currReads:number)=>{
        if(currReads !== 0){
            return (<React.Fragment>
                <Icon icon={<ReadsSvgIcon />} />
                        <Typography variant1="caption3" 
                        color={theme.palette.textcolor.light}>
                            {readsNo+"k reads"}
                        </Typography>
            </React.Fragment>)
        }
        else{
            return
           
            
            
        }
    }
    return(
        
           
            <Paper  data-testid='card-body' elevation={1} sx={{
                
                width: `${width}px`,
                backgroundColor: `${!inLibrary && hoverState ? theme.palette.primary.light : 'white'}`
            }}
            onMouseEnter={hoverStateHandler} onMouseLeave={hoverStateHandler} style={styles.parent}>
            <Link to={`/book-info/${cardId}`}>
                <Image  height={imgHeight} width={width} alt="blinkist" component="img"  src={url} style={styles.image}/>
            </Link>
             {/* <Image  height={imgHeight} width={width} alt="blinkist" component="img"  src={url} style={styles.image}/> */}
            <Box sx={{
                    backgroundColor: `${!inLibrary && hoverState ? theme.palette.primary.light : 'white'}`
                }} 
                style={styles.content}
                data-testid='card-box'
                
            >
                <Typography variant1="cardHeading" style={styles.bookName} sx={{display:'flex',justifyContent:'start',color:'#03314B'}} >{bookName}</Typography>
                <Typography variant1="cardBody1"  sx={{display:'flex',justifyContent:'start',color:'#6D787E'}} style={{marginTop:'20px'}}>{writerName}</Typography>
                <Box style={styles.flex}  sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex',flexDirection:'row'}} >
                        <Icon icon={<ClockSvgIcon />} />
                        <Typography variant1="caption3" 
                        color={theme.palette.textcolor.light}>
                            {timeRead}
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'row'}} >
                        {
                                    
                                    readsRenderer(Number.parseInt(readsNo))
                        }
                    </Box>
                    
                </Box>
                
                <Box 
                    sx={{display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                {/* {bookLibraryStatus ? <Icon  icon={<MoreHoriz sx={{padding: theme.spacing(0)} } style={styles.rightIcon}/>} /> : ''} */}
                {bookLibraryStatus ? <Button  ><Typography variant="finishedHead"  color={theme.palette.secondary.darker} >Finished</Typography></Button> : ''}
                </Box>
            </Box>
            <Box sx={{ position: 'relative'}}>
                {bookLibraryStatus ? 
                    <ThemeProvider theme={themeProgress}><ProgressBar width={100} value={progress} color='secondary' /> </ThemeProvider>
                    
                    :
                    <Box onClick={e => 
                        libraryHandler(cardId, setBookLibraryStatus)
                    } 
                    data-testid='card-library-handler'
                    sx={{
                        color: `${!hoverState ? '#0365F2' : 'white'}`,
                        backgroundColor: `${hoverState ? '#0365F2' : 'white'}`
                    }} style={styles.libraryButton}>
                        <Icon variant="body1"  icon={<AddIcon />} />
                        <Typography  variant1="body1">
                            Add to library 
                        </Typography>
                    </Box>
                }
            </Box>
        </Paper>
        
       
        
    );
}

export default CardComponent; 