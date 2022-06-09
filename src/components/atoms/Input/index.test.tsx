
import InputComponent from ".";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// import {Search} from '@mui/icons-material';
import { fireEvent, render, screen } from '@testing-library/react';
// startIcon={<Search/>}

const theme = createTheme({
    palette: {
      success:{
        main: '#eb3464',
      }
    }
});

test('Input Components', () => {
    render(
        <ThemeProvider theme={theme}>
            <InputComponent ></InputComponent>
       </ThemeProvider>
    );
    
});

test('it should render input element', () => {
  render(<InputComponent placeholder="Search by title or author"/>);
  const inputElement = screen.getByPlaceholderText(/Search by title or author/);
  expect(inputElement).toBeInTheDocument();
});


test('should be able to type in input', () => {
    render(<InputComponent placeholder="Search by title or author"/>);
    const inputElement = screen.getByPlaceholderText(/Search by title or author/) ;
    fireEvent.change(inputElement as HTMLInputElement, { target: { value : 'Employee'}})
    expect((inputElement as HTMLInputElement).value).toBe('Employee');
});
