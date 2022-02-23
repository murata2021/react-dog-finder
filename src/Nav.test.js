import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

const initialDogList={
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: "",
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: "",
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

it('renders without crashing',()=>{

    render(<MemoryRouter><Nav dogs={initialDogList.dogs}/></MemoryRouter>)
})

it("matches snapshot", function() {
    const {asFragment} = render(<MemoryRouter><Nav dogs={initialDogList.dogs}/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

it('renders with correct elements',()=>{

    const {debug,getByText,queryByText}=render(<MemoryRouter><Nav dogs={initialDogList.dogs}/></MemoryRouter>)
    expect(getByText('Whiskey')).toBeInTheDocument()
    expect(getByText('Duke')).toBeInTheDocument()
    expect(getByText('Perry')).toBeInTheDocument()
    expect(getByText('Tubby')).toBeInTheDocument()

    expect(queryByText('Snoopy')).not.toBeInTheDocument()

})