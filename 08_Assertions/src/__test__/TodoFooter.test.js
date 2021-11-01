import { render, screen } from '@testing-library/react';
import TodoFooter from  './../components/TodoFooter/TodoFooter'; 
import { BrowserRouter } from 'react-router-dom';


const MockTodoFooter = ({numberOfIncompletedTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompletedTasks={numberOfIncompletedTasks} />
    </BrowserRouter>
  );
}


it('should render: 5 tasks left', () => {
  render(<MockTodoFooter numberOfIncompletedTasks={5}/>);
  const paragraphElement = screen.getByText("5 tasks left");
  expect(paragraphElement).toBeInTheDocument();
});


it('should render: 1 task left', async () => {
  render(<MockTodoFooter numberOfIncompletedTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).tobeTruthy()
});

it('should render visible : 1 task left', async () => {
  render(<MockTodoFooter numberOfIncompletedTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).tobeVisible()
});

it('should content a p tag : 1 task left', async () => {
  render(<MockTodoFooter numberOfIncompletedTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContentHTML("p")
});

it('should have text content  : 1 task left', async () => {
  render(<MockTodoFooter numberOfIncompletedTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toHaveTextContent("1 task left")
});

it('should no to be falsy  : 1 task left', async () => {
  render(<MockTodoFooter numberOfIncompletedTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).not.toBeFalsy();
});

it('should no to be falsy  : 1 task left', async () => {
  render(<MockTodoFooter numberOfIncompletedTasks={1}/>);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement.textContent).toBe("1 task left");
});
