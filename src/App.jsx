import { getPeselData } from "./methods/getPeselData"

function App() {
    return (
    <>
      <p>Hello world!</p>
      <p>Temp</p>
      {console.log(getPeselData('94111366519'))}
      {console.log(getPeselData('23300428543'))}
      {console.log(getPeselData('9411h366529'))}
      {console.log(getPeselData('9411h366529s'))}
    </>
  )
}

export default App
