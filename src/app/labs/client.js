import axios from 'axios';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || 'http://localhost:4000';
const LAB5_API = `${HTTP_SERVER}/lab5`;

console.log('Lab5 API URL:', LAB5_API);

// Welcome
export const fetchWelcomeMessage = async () => {
  try {
    console.log('Fetching welcome from:', `${LAB5_API}/welcome`);
    const { data } = await axios.get(`${LAB5_API}/welcome`);
    console.log('Welcome response:', data);
    return data;
  } catch (error) {
    console.error('Welcome fetch error:', error.message);
    console.error('Error details:', error.response?.data || error);
    throw error;
  }
};

// Path Parameters
export const addPathParams = async (a, b) => {
  try {
    console.log('Calling add:', `${LAB5_API}/add/${a}/${b}`);
    const { data } = await axios.get(`${LAB5_API}/add/${a}/${b}`);
    console.log('Add response:', data);
    return data;
  } catch (error) {
    console.error('Add error:', error.message);
    console.error('Error response:', error.response?.data);
    console.error('Error status:', error.response?.status);
    throw error;
  }
};

export const subtractPathParams = async (a, b) => {
  try {
    console.log('Calling subtract:', `${LAB5_API}/subtract/${a}/${b}`);
    const { data } = await axios.get(`${LAB5_API}/subtract/${a}/${b}`);
    console.log('Subtract response:', data);
    return data;
  } catch (error) {
    console.error('Subtract error:', error.message);
    throw error;
  }
};

export const multiplyPathParams = async (a, b) => {
  try {
    console.log('Calling multiply:', `${LAB5_API}/multiply/${a}/${b}`);
    const { data } = await axios.get(`${LAB5_API}/multiply/${a}/${b}`);
    console.log('Multiply response:', data);
    return data;
  } catch (error) {
    console.error('Multiply error:', error.message);
    throw error;
  }
};

export const dividePathParams = async (a, b) => {
  try {
    console.log('Calling divide:', `${LAB5_API}/divide/${a}/${b}`);
    const { data } = await axios.get(`${LAB5_API}/divide/${a}/${b}`);
    console.log('Divide response:', data);
    return data;
  } catch (error) {
    console.error('Divide error:', error.message);
    throw error;
  }
};

// Query Parameters
export const calculator = async (a, b, operation) => {
  try {
    console.log('Calling calculator:', `${LAB5_API}/calculator?a=${a}&b=${b}&operation=${operation}`);
    const { data } = await axios.get(`${LAB5_API}/calculator`, {
      params: { a, b, operation }
    });
    console.log('Calculator response:', data);
    return data;
  } catch (error) {
    console.error('Calculator error:', error.message);
    throw error;
  }
};

// Working with Objects
export const fetchAssignment = async () => {
  const { data } = await axios.get(`${LAB5_API}/assignment`);
  return data;
};

export const fetchAssignmentTitle = async () => {
  const { data } = await axios.get(`${LAB5_API}/assignment/title`);
  return data;
};

export const updateAssignmentTitle = async (title) => {
  const { data } = await axios.get(`${LAB5_API}/assignment/title/${title}`);
  return data;
};

export const fetchModule = async () => {
  const { data } = await axios.get(`${LAB5_API}/module`);
  return data;
};

export const fetchModuleName = async () => {
  const { data } = await axios.get(`${LAB5_API}/module/name`);
  return data;
};

// Working with Arrays
export const fetchTodos = async () => {
  const { data } = await axios.get(`${LAB5_API}/todos`);
  return data;
};

export const fetchTodoById = async (id) => {
  const { data } = await axios.get(`${LAB5_API}/todos/${id}`);
  return data;
};

export const fetchCompletedTodos = async () => {
  const { data } = await axios.get(`${LAB5_API}/todos/completed`);
  return data;
};

export const createTodo = async () => {
  const { data } = await axios.get(`${LAB5_API}/todos/create`);
  return data;
};

export const deleteTodoById = async (id) => {
  const { data } = await axios.get(`${LAB5_API}/todos/${id}/delete`);
  return data;
};

export const updateTodoTitle = async (id, title) => {
  const { data } = await axios.get(`${LAB5_API}/todos/${id}/title/${title}`);
  return data;
};

// POST/PUT/DELETE
export const postTodo = async (todo) => {
  const { data } = await axios.post(`${LAB5_API}/todos`, todo);
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${LAB5_API}/todos/${id}`);
  return data;
};

export const putTodo = async (id, todo) => {
  const { data } = await axios.put(`${LAB5_API}/todos/${id}`, todo);
  return data;
};
