import {Container, Box} from '@mui/material'
import Input from '../../atoms/Input';
import {Search} from '@mui/icons-material';
import Card from '../../organisms/Card';
import Typography from '../../atoms/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import theme from '../../../Themes/main'
import Banner1 from '../../molecules/Banner1';
import React from 'react';

const useStyles = makeStyles({
    input: {
        margin: `${theme.spacing(5)} 0px`,
        height: theme.spacing(6),
        width: '100%',
        maxWidth: '658px',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    heading: {
        fontWeight: '700',
        marginTop: '75px',
        display:'flex',
        jusstifyContent:'start',
        color:"#03314B",
        fontSize:'24px'
    },
    main: {
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'center'
    }
});


const EntrepreneurComp = ({books, setBooks, data, setData, library, setLibrary, ...props}:any)=>{
    const classes = useStyles();
    const checkInLibrary = (bookId:any)=>{
        let checker = (curr:any) => {
            for(let currData of curr){
                if(currData.id === bookId){
                    return {status: true, progress : currData.progress};
                }
            }
            return {status: false};
        }
        let inCurrRead = checker(library.currentlyReading)
        return inCurrRead.status ? inCurrRead : checker(library.finishedBook);
    }

    const libraryHandler = async (bookId:any, setBookStatus:any) => {
        
            library.currentlyReading.push({
                "id" : bookId,
                "progress" : 0
            });
            setLibrary(library);
            setBookStatus(true);
            let res = await  fetch("http://localhost:8000/library/", {
              method: "PUT",
              body: JSON.stringify(library),
              headers: {
                "Content-Type": "application/json"
              }
            });
            return await res.json();
          
    }
    // let currData={
    //     "id": 109,
    //     "name": "Eat Better, Feel Better",
    //     "url": "/assets/book.png",
    //     "timeRead": "13-minute read",
    //     "progress": 100,
    //     "writerName": "Giada De Laurentiis"
    // }

    const renderCategories =()=>{
        return data.categories.map((curr:any)=>{
            if(curr.heading === 'Just Added'){

            }
            console.log("in map")
            return <Box data-testid='container' key={curr.heading}>
                <Typography variant="heading3" className={classes.heading} sx={{}}>
                    {curr.heading}
                </Typography>
                <Box className={classes.main} >
                   
                    {  
                        
                        !library ?
                         <CircularProgress data-testid='circular-progress' /> :
                            curr.books.map((currData:any) => {
                                console.log(currData)
                                 
                                const inLibrary = checkInLibrary(currData.id)
                                return <React.Fragment key={currData.id}>
                                    <Card 
                                    cardId={currData.id}
                                    key={currData.id}
                                    imgHeight= {240}
                                    url= {currData.url}  
                                    bookName= {currData.name}
                                    writerName= {currData.writerName}
                                    timeRead= {currData.timeRead}
                                    readsNo={currData.readsNo}
                                    width= {280}
                                    inLibrary= {inLibrary.status}
                                    progress={inLibrary.progress}
                                    libraryHandler={libraryHandler}
                                />
                                </React.Fragment>
                            })
                    } 
                                   
                </Box>
            </Box>
        })
    }
    return (
        <Container sx={{marginBottom:'100px'}}>
           
            <Banner1/>
            <Input className={classes.input} startIcon={<Search />} placeholder="Search by title or author" sx={{display:'flex',jusstifyContent:'start'}} />
            <Box>
            {
                    renderCategories()
                }
            </Box>
        </Container>
    );
}

export default EntrepreneurComp;