import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {incrementHandler,decrementHandler,resetHandler} from './Redux/Actions';
function App() {
const dispatch=useDispatch ()

const PLUS = ()=> {
      dispatch(incrementHandler () )
}

const MINES = ()=> {
  dispatch(decrementHandler () )
}
const RESET = () => {
  dispatch(resetHandler () )
}
 const count=useSelector ( (state)=>state.counter  )



  return (
    <div className="App">
      <h1>workshop react redux </h1>
      <div className="counter">
        <button onClick={MINES} >-</button>
        <h3>{count}</h3>
        <button onClick={PLUS} >+</button>

      </div>
      <div className="reset">
        <button onClick={RESET} >RESET</button>
      </div>
    </div>
  );
}

export default App;
