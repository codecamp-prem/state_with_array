import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]
function App() {
  const [array, setArray] = useState(INITIAL_VALUE) 
  const [value, setValue] = useState("")

  function removeFirstElement(){
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }
  function removeSpecificLetter(letter){
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }
  function addLetterAtStart(letter){
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }
  function addLetteraToEnd(letter){
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }
  function updateA2H(letter){
    setArray(currentArray => {
      return currentArray.map(element=>{
        if (element === letter) return 'H'
        return element
      })
    })
  }
  function resetArray(){
    setArray(INITIAL_VALUE)
  }
  function deleteAllElementOfArray(){
    setArray([])
  }
  function addElementAtIndex(letter, index){
    setArray(currentArray=>{
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ]
    })
  }
  return(
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={()=>removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <button onClick={()=>addLetterAtStart("B")}>Add at Start of Array</button>
      <br />
      <button onClick={()=>addLetteraToEnd("B")}>Add at End of Array</button>
      <br />
      <button onClick={deleteAllElementOfArray}>Delete All the array</button>
      <br />
      <br />
      <button onClick={()=>updateA2H("A")}>Update all A to H</button>
      <br />
      <br />
      <button onClick={()=>addElementAtIndex("A", 2)}>Add Element At Index</button>
      <br />
      <br />
      <input value={value} onChange={e=> setValue(e.target.value)} /><label>Value enter in textbox: {value}</label>
      <br />
      <br />
      <button onClick={resetArray}>Reset</button>
      <br />
      {array.join(", ")}
    </div>
  )
}

export default App
