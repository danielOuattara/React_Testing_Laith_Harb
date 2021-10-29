import { render, screen } from '@testing-library/react';
import Header from './../components/Header/Header';


test('should render the same text passed in title prop', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should again render the same text passed in title prop', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render the same text passed in title prop', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render the same text passed in title prop', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

it('should get by its role', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByRole("heading", {name: "React Testing Library"});
  expect(headingElement).toBeInTheDocument();
});

it('should get by its title', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByTitle("header");
  expect(headingElement).toBeInTheDocument();
});

it('should get by its id', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});


// FIND BY 


test('should findBy the same text passed in title prop', async () => {
  render(<Header title="My header"/>);
  const headingElement =  await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});


// QUERY BY


test('should output "birds" not to be in the app',() => {
  render(<Header/>);
  const headingElement =  screen.queryByText(/birds/i);
  expect(headingElement).not.toBeInTheDocument();
});

// GET ALL BY


test('should get 2 headers in the app using getAllByRole',() => {
  render(<Header/>);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

test('should get 2 headers in the app using findAllByRole',  async() => {
  render(<Header/>);
  const headingElements = await screen.findAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

test('should get 2 headers in the app using queryAllByRole',() => {
  render(<Header/>);
  const headingElements = screen.queryAllByRole("heading");
  expect(headingElements.length).toBe(2);
});