import { Box, Button, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { useSelector, useDispatch, Provider, shallowEqual } from "react-redux"

import { store, addToFirst, addToSecond, doNothing, RootState, changeFlag } from "./store"

const DoNothingButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size="xl" onClick={() => dispatch(changeFlag())}>
      Do Nothing
    </Button>
  )
}

const AddToFirstButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size="xl" onClick={() => dispatch(addToFirst())}>
      Add To First
    </Button>
  )
}

const FirstValue = () => {
  const { firstNumber } = useSelector((state: RootState) => state)
  return (
    <Text size="xl" p={5}>
      First value: {firstNumber}
    </Text>
  )
}

const AddToSecondButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size="xl" onClick={() => dispatch(addToSecond())}>
      Add To Second
    </Button>
  )
}

const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber)
  const [name, setName] = useState("choi")
  useEffect(() => {
    console.log("effect!" + secondNumber)
    return () => {
      console.log("clean up!" + secondNumber)
    }
  }, [secondNumber])

  return (
    <Text size="xl" p={5}>
      Second value: {secondNumber}
      <button
        onClick={() => {
          setName("" + Math.random() * 100)
        }}>
        이름 변경
      </button>
    </Text>
  )
}

const NumbersValue = () => {
  const numbers = useSelector((state: RootState) => state.numbers)
  return (
    <Text size="xl" p={5}>
      Numbers: {numbers.join(", ")}
    </Text>
  )
}

function App() {
  const flag = useSelector((state: RootState) => state.flag)
  return (
    <>
      <Box p={10}>
        <Box
          sx={{
            display: "flex",
          }}>
          <DoNothingButton />
        </Box>
        <Box
          mt={10}
          sx={{
            display: "flex",
          }}>
          <AddToFirstButton />
          <FirstValue />
        </Box>
        <Box
          mt={10}
          sx={{
            display: "flex",
          }}>
          <AddToSecondButton />
          {flag ? <SecondValue /> : <div>nope</div>}
          {/* <SecondValue /> */}
        </Box>
      </Box>
      <NumbersValue />
    </>
  )
}

export default App
