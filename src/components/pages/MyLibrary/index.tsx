import React from 'react';
import {useState} from 'react';
import {Container, Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import Tab from '../../molecules/tabs';
import Card from '../../organisms/Card';
import CircularProgress from '@mui/material/CircularProgress';
import {Theme} from '../../../Themes/theme';
//import { makeStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyle:any = makeStyles({
    cards: {
        display: 'flex', 
        alignItems: 'center', 
        flexWrap: 'wrap'
    }
});

const MyLibrary = ({books, setBooks, library, setLibrary}:any) =>{
    const classes = useStyle();
    let data = library;
    
    const tabData = [
        { 
          'id':501,  
          'value': 'reading',
          'label': 'Currently reading',
        },
        { 
          'id':502,   
          'value': 'finished',
          'label': 'Finished',
        }
    ]
    const mockData={
        "currentlyReading": [
            {
                "id": 100,
                "name": "Bring Your Human to Work",
                "url": "/assets/book.png",
                "timeRead": "13-minute read",
                "progress": 60,
                "writerName": "Erica Keswin"
            }
        ],
        "finishedBook":[
            {
                "id": 109,
                "name": "Eat Better, Feel Better",
                "url": "/assets/book.png",
                "timeRead": "13-minute read",
                "progress": 100,
                "writerName": "Giada De Laurentiis"
            }
        ]}
    ;
    const [currState, setCurrState] = useState(tabData[0].value);
    const handleState = (state:any) => {
        setCurrState(state);
    }

    const generateCards = () => {

        if(books.length === 0){

            return  <CircularProgress  data-testid='circular-progress'/>
        }
        else {
            
           console.log("in generate cards");
            if(currState === tabData[0].value){
                // console.log("in currently reading")
                // console.log(books.currentlyReading[0])
                return data.currentlyReading.map((curr:any) => {
                    
                    let id=Number.parseInt(curr.id)
                    
                    let currData = books.currentlyReading[id];
                   
                    for (let entry of books.currentlyReading) {
                        if(entry.id===id){
                            currData = entry
                        }
                    }
                    
                    return currData && <React.Fragment key={currData.id}>
                    {/* return currData && <React.Fragment key={currData.id}></React.Fragment>     */}
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
                        inLibrary= {true}
                        progress= {curr.progress}
                        data-testid='cards-reading'
                       
                    />
                    </React.Fragment>
                })
            }else if(currState === tabData[1].value){
                console.log("in finished ");
                 return data.finishedBook.map((curr:any) => {
                    let id=Number.parseInt(curr.id)
                    let currData = books.finishedBook[id];
                   
                    for (let entry of books.finishedBook) {
                        if(entry.id===id){
                            currData = entry
                        }
                    }
                    return currData && 
                    <React.Fragment key={currData.id}>
                    {/* return currData && <React.Fragment key={currData.id}></React.Fragment>     */}
                    
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
                        inLibrary= {true}
                        progress= {curr.progress}
                        data-testid='cards-finished'
                       
                    />
                    </React.Fragment>
                    
                });
             }
        }
    }
    // let currData={
    //     "id": 109,
    //     "name": "Eat Better, Feel Better",
    //     "url": "/assets/book.png",
    //     "timeRead": "13-minute read",
    //     "progress": 100,
    //     "writerName": "Giada De Laurentiis"
    // }


    

    return (
        <Container sx={{paddingTop: '50px', marginBottom:'100px'}}>
            <Typography variant1="h5" theme={Theme} mb={4}  sx={{display:'flex',justifyContent:'start', color:'#03314B', fontStyle:'Roboto',fontSize:'36px'}}>
                My Library
            </Typography>
            <Tab stateHandler={handleState} tabData={tabData}/>
            <Box className={classes.cards} mt={4}>
                { 
                    generateCards()
                    
                }
                {/* <Card 
                        cardId={currData.id}
                        key={currData.id}
                        imgHeight= {240}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {280}
                        inLibrary= {true}
                        progress= {70}
                       
                    /> */}
            </Box>
        </Container>
    );
}

export default MyLibrary;