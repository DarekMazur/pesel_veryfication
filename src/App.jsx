import { getPeselData } from "./methods/getPeselData"

function App() {
    return (
    <>
      <p>Hello world!</p>
      <p>Temp</p>
      {getPeselData('94111366519')}
      {getPeselData('23300428543')}
    </>
  )
}

export default App
