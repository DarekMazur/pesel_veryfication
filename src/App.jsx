import { getPeselData } from "./methods/getPeselData"

function App() {
    return (
    <>
      <p>Hello world!</p>
      <p>Temp</p>
      {getPeselData('87050707477')}
    </>
  )
}

export default App
