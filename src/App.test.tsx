import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import {ThemeProvider, CssBaseline} from '@mui/material';
// import theme from './Themes/main';

// import renderer from 'react-test-renderer';

// test('renders the App Component', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   const component = renderer.create(
//     <ThemeProvider theme={theme}>
//        <CssBaseline />
//       <App/>
//       </ThemeProvider>
//   expect(linkElement).toBeInTheDocument();
// });

test('render the App Component', () => {
  render(<App/>);

});