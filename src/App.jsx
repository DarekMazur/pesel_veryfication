import { getPeselData } from "./methods/getPeselData"
import { getBirthDay } from "./methods/getBirthday.js";
import { getSex } from "./methods/getSex.js";
import { useState } from "react";
import { Wrapper } from './components/Wrapper/Wrapper.styles.js'
import FormField from "./components/FormField/FormField.jsx";
import { Form } from "./components/Form/Form.styles.js";
import {Button} from "./components/Button/Button.styles.js";
import {Result} from "./components/Result/Result.styles.js";

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
        <Form onSubmit={handleSubmit}>
          <FormField onChange={handleInputChange} name='pesel' id='pesel' label='PESEL number' value={pesel} />
          <Button type='submit' disabled={false}>Check</Button>
        </Form>

        <Wrapper>
          <Result isValid={getPeselData(input) === true}>
            {input ? (
              <>
                {input}: <span>{getPeselData(input) === true ? 'PESEL is valid' : getPeselData(input)}</span>
              </>
            ) : initialState.validationStatus}
          </Result>
          <Result>{input && getPeselData(input) === true ? `Day of birth: ${getBirthDay(input.split('').slice(0, 6).join(''))}` : initialState.birthday}</Result>
          <Result>{input && getPeselData(input) === true ? `Gender: ${getSex(input.split('')[input.split('').length - 2])}` : initialState.sex}</Result>
        </Wrapper>
      </Wrapper>
    </>
  )
}

export default App
