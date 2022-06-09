import React from 'react'
import { render, screen } from '@testing-library/react';
import Button from '.';
// import renderer from 'react-test-renderer'

describe('Testing the ImageComponent', () =>
{it('renders Button', () => {
  render(<Button children="Hello" />);
  const typoElement = screen.getByRole('button');
  expect(typoElement).toMatchSnapshot();
})});

// describe('Testing the ImageComponent', () => {
//   it('render ImageComponent', () => {
//     const image = renderer.create(<Button children="Hello" />).toJSON();
//     expect(image).toMatchSnapshot();
//   });