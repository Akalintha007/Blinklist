import React from 'react';
import MyLibrary from '../pages/MyLibrary/index';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { Box } from '@mui/system';
import {useState, useEffect} from 'react';



    
function LibraryTemplate() {
  
    
    // const [books, setBooks] = useState<any>(null);
    // useEffect(() => {
    //     const processor = async () => {
            
    //         let response = await fetch('http://localhost:8000/book');
    //         let books1 = await response.json();
    //         setBooks(books1);
    //     };
    //     processor();
    // }, []);

  return (
    <div>
        {/* (!books) 
        
        <MyLibrary books={books} setBooks={setBooks} />
        <Box>
            <Header 
                    url= '/assets/logo.png'
                    name= 'Blinkist'
                    books={books}
                    
                />
                <Box sx={{position: 'absolute', top: '93px', width: '100%'}}>
                    <MyLibrary books={books} setBooks={setBooks} />
                       <Footer  />
                </Box>
          </Box> */}
    </div>
  );
}


