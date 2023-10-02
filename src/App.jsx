import { getPeselData } from "./methods/getPeselData"
import {getBirthDay} from "./methods/getBirthday.js";
import {getSex} from "./methods/getSex.js";
import {useState} from "react";
import {Wrapper} from './components/Wrapper/Wrapper.styles.js'

const App = () => {
  const initialState = {
    pesel: '',
    validationStatus: null,
    birthday: null,
    sex: null
  }
  const [pesel, setPesel] = useState('')
  const [input, setInput] = useState('')

  const handleInputChange = (e)=> {
    setPesel(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(pesel)
    setPesel(initialState.pesel)
  }

    return (
      <>
        <h1>Hello world!</h1>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <input id='pesel' name='pesel' value={pesel} onChange={handleInputChange}/>
            <label htmlFor='pesel'>PESEL number</label>
            <button type='submit'>Check</button>
          </form>

          <p>{input ? `${input}: ${getPeselData(input) === true ? 'PESEL is valid' : getPeselData(input)}` : initialState.validationStatus}</p>
          <p>{input && getPeselData(input) === true ? `Day of birth: ${getBirthDay(input.split('').slice(0, 6).join(''))}` : initialState.birthday}</p>
          <p>{input && getPeselData(input) === true ? `Gender: ${getSex(input.split('')[input.split('').length - 2])}` : initialState.sex}</p>
        </Wrapper>
      </>
    )
}

export default App
