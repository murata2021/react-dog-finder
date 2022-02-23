import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom'

it('renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

it('renders with correct elements',()=>{

  const {debug,getByText,queryByText}=render(<MemoryRouter><App/></MemoryRouter>)

  debug()
  let link=getByText('Whiskey')
  expect(getByText('Whiskey loves eating popcorn.', {exact: false})).toBeInTheDocument()
  expect(getByText('Duke believes that ball is life.', {exact: false})).toBeInTheDocument()

  fireEvent.click(link)
  expect(getByText('Whiskey loves eating popcorn', {exact: false})).toBeInTheDocument()
  expect(queryByText('Duke believes that ball is life.', {exact: false})).not.toBeInTheDocument()
  debug()
  
})

it('it redirects to home page when invalid url is given',()=>{

  const {debug,getByText,queryByText}=render(<MemoryRouter initialEntries={['/dogs/blargh']}><App/></MemoryRouter>)
  expect(getByText('Whiskey loves eating popcorn.', {exact: false})).toBeInTheDocument()
  expect(getByText('Duke believes that ball is life.', {exact: false})).toBeInTheDocument()
})

it('redirects when the go to home button is clicked',()=>{

  const {debug,getByText,queryByText}=render(<MemoryRouter initialEntries={['/dogs/Whiskey']}><App/></MemoryRouter>)
  expect(getByText('Whiskey loves eating popcorn.', {exact: false})).toBeInTheDocument()
  expect(queryByText('Duke believes that ball is life.', {exact: false})).not.toBeInTheDocument()
  let button=getByText('Go to main page!')

  fireEvent.click(button)
  expect(getByText('Whiskey loves eating popcorn.', {exact: false})).toBeInTheDocument()
  expect(queryByText('Duke believes that ball is life.', {exact: false})).toBeInTheDocument()
  expect(queryByText('Go to main page!')).not.toBeInTheDocument()
})