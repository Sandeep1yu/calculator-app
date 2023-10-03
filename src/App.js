import { digitButton } from './DigitButton';
import { useReducer } from 'react';
import './App.css';

export const ACTION = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose_operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUTE: 'evalute'
}
function reducer (state, {type, payload}) {
  switch(type) {
    case ACTION.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }
  
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer())

  // dispatch({type: ACTION.ADD_DIGIT, payload: {digit: 1}})
  return (
    <div className="calculator_grid">
    <div className="output">
      <div className="previous_operand">{previousOperand} {operation}</div>
      <div className="current_operand">{currentOperand}</div>
    </div>
      
      <button className="span_two">AC</button>
      <button>DEL</button>
      <button>+</button>
      <digitButton dispatch={dispatch}>1</digitButton>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span_two'>=</button>
    </div>
  );
}

export default App;
