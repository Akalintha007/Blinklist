// import React, {useState} from 'react';
// import MyLibHeading from '../../Components/atoms/mylibrary/mylibrary-heading/MyLibHeading';
// import ToolBarHeader from '../../Components/organisms/header/toolbar-header/ToolBarHeader';
// import ReadingTabs from '../../Components/organisms/tabs/ReadingTabs';

// import book1 from "./Components/atoms/assets/book1.png";
// import book2 from "./Components/atoms/assets/book2.png";
// import book3 from "./Components/atoms/assets/book3.png";
// import book4 from "./Components/atoms/assets/book4.png";
// import book5 from "./Components/atoms/assets/book5.png";
// import book6 from "./Components/atoms/assets/book6.png";
// import book7 from "./Components/atoms/assets/book7.png";
// import book8 from "./Components/atoms/assets/book8.png";
// import book9 from "./Components/atoms/assets/book9.png";
// import bookimage from "./Components/atoms/assets/bookImage.png"
// import FooterMain from '../../Components/molecules/footer/footer-main/FooterMain';
// import { ExploreMenu } from "../../Components/molecules/explore-items/explore-grid/ExploreMenu";
// import { BrowserRouter , Route , Routes } from "react-router-dom";
// import { MainBanner } from "../../Components/molecules/banner-items/mainbanner/MainBanner";
// import { MainSearch } from "../../Components/organisms/main/MainSearch";
// import { Heading } from "../../Components/atoms/heading/Heading";
// import { EnterprenurReading } from "../../Components/templates/enterprenur-book/EnterprenurReading";
// import { KeyIdeas } from "../../Components/atoms/keyideas/KeyIdeas";
// import { BookDetailsGrid } from "../../Components/organisms/bookdetailsgrid/BookDetailsGrid";
// import { BookDetailsTabs } from "../../Components/molecules/bookdetailstabs/BookDetailsTabs";



// let readingBooks = [
  
//   {
//     image: bookimage,
//     name: "Beyond Entrepreneurship 2.0",
//     author: "Jim Collins & Bill Lazer",
//     time: "13-minute read",
//     finished: false,
//   },
//   {
//     image: book1,
//     name: "Bring Your Human to Work",
//     author: "Erica Keswin",
//     time: "13-minute read",
//     finished: false,
//   },
//   {
//     image: book2,
//     name: "Employee to Entrepreneur",
//     author: "Steve Glaveski",
//     time: "15-minute read",
//     finished: false,
//   },
//   {
//     image: book3,
//     name: "Doesn't Hurt to Ask",
//     author: "Trey Gowdy",
//     time: "13-minute read",
//     finished: false,
//   },
//   {
//     image: book4,
//     name: "The Fate of Food",
//     author: "Amanda Little",
//     time: "12-minute read",
//     finished: false,
//   }, 
//   {
//     image: book5,
//     name: "Lives of the Stoics",
//     author: "Ryan Holiday, Stephen Hansel",
//     time: "13-minute read",
//     finished: false,
//   },
// ];

// let finishedBooks = [
//   {
//     image: book6,
//     name: "Loving Your Business",
//     author: "Debbie King",
//     time: "13-minute read",
//     finished: true,
//   },
//   {
//     image: book7,
//     name: "The Lonely Century",
//     author: "Norena Hertz",
//     time: "15-minute read",
//     finished: true,
//   },
//   {
//     image: book8,
//     name: "Eat Better, Feel Better",
//     author: "Giada De Laurentiis",
//     time: "13-minute read",
//     finished: true,
//   },
//   {
//     image: book9,
//     name: "Dropshipping",
//     author: "James Moore",
//     time: "12-minute read",
//     finished: true,
//   },
// ];

// const bookList = [
//   "Beyond Entrepreneurship 2.0",
//   "Bring Your Human to Work",
//   "Employee to Entrepreneur",
//   "Doesn't Hurt to Ask",
//   "The Fate of Food",
//   "Lives of Stoics",
//   "Loving Your Business",
//   "The Lonely Century",
//   "Eat Better, Feel Better",
//   "Dropshipping",
// ];

// function App() {
//   const [btn, setBtn] = useState(false);

//   const handleFinish = (item: string) => {
//     if(bookList.includes(item)) {
//       let temp;
//       temp = readingBooks.find((e) => e.name === item);
//       if(temp === undefined) {
//         temp = { image: "", name: "", author: "", time: "", finished: false};
//       }
//       temp.finished = true;
//       const a = readingBooks.filter((e) => e.name !== item);
//       readingBooks = a;
//       finishedBooks.push(temp);
//       setBtn(!btn); 
//     }
//   };

//   const handleReadAgain = (item: string) => {
//     if(bookList.includes(item)) {
//       let temp;
//       temp = finishedBooks.find((e) => e.name === item);
//       if( temp === undefined) {
//         temp = { image: "", name: "", author: "", time: "", finished: false};
//       }
//       temp.finished = false;
//       const a = finishedBooks.filter((e) => e.name !== item);
//       finishedBooks = a;
//       readingBooks.push(temp);
//       setBtn(!btn);
//     }
//   };

//   const [search,setsearch] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [icon, setIcon] = useState(false);

//   const handleChange = () => {
//     setVisible(!visible);
//     setIcon(!icon);
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <ToolBarHeader icon={icon} handleChange={handleChange} />
//         {visible ? <ExploreMenu handleChange={handleChange} /> : undefined}
//         <Routes>
//         <Route 
//           path="/bookdetails"
//           element={
//             <>
//               <KeyIdeas/>
//               <BookDetailsGrid btn={btn} handleFinish={handleFinish}/>
//               <BookDetailsTabs />
//             </>
//           }>
//         </Route>
//         <Route
//           path="/explore"
//           element={
//             <>
//               <MainBanner />
//               <MainSearch search={setsearch}/>
//               <Heading />
//               <EnterprenurReading value={search}/>
//             </>
//           }>
//         </Route>
//         <Route 
//           path="/"
//           element={
//             <>
//               <MyLibHeading />
//               <ReadingTabs
//                 currentReading={readingBooks}
//                 finishedReading={finishedBooks}
//                 handleReadAgain={handleReadAgain}
//                 handleFinish={handleFinish}
//               />
//             </>
//           }>
//         </Route>
//         </Routes>
//         <FooterMain />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




















































import {ThemeProvider, CssBaseline} from '@mui/material';
import React from 'react';
import './App.css';
import  Template  from './components/Template/TemplateComponent';
import theme from './Themes/main';



// eslint-disable-next-line @typescript-eslint/no-unused-vars



function App() {
  return (
    <div data-testid="App1" className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Template />
    </ThemeProvider>

    </div>
  );
}

export default App;





































// import {ThemeProvider, CssBaseline} from '@mui/material';
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import './App.css';
// // import LibraryTemplate from './components/Template/LibraryTemplate';
// // import MyLibrary from './components/pages/MyLibrary';
//  import  Template  from './components/Template/TemplateComponent';
// import theme from './Themes/main';


// function App() {
//   return (
//     <Router >
//         <div  className="App">
//           <ThemeProvider theme={theme}>
//           <CssBaseline />
//             <Template />
//             {/* <LibraryTemplate/> */}
//           </ThemeProvider>

//         </div>
      
//     </Router>
//   );
// }

// export default App;





