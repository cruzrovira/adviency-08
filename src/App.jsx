import {useState, useEffect} from "react"
import {
  Flex,
  VStack,
  Input,
  Button,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import {v4 as uuidv4} from "uuid"

const initRegalos = [
  {id: uuidv4(), name: "Medias", cantidad: 1},
  {id: uuidv4(), name: "caramelos", cantidad: 2},
  {id: uuidv4(), name: "Vitel Tone", cantidad: 3},
]

function App() {
  const [regalos, setRegalos] = useState([])
  const [newRegalo, setNewRegalo] = useState("")
  const [error, setError] = useState("")
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    setRegalos(initRegalos)
  }, [])

  const regaloValidate = () => {
    if (newRegalo.trim() === "") {
      setError("El regalo no puede estar vacio")

      return false
    }
    for (let item of regalos) {
      if (item.name.toLocaleLowerCase() === newRegalo.trim().toLocaleLowerCase()) {
        setError("El regalo ya existe")

        return false
      }
    }
    setError("")

    return true
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (regaloValidate()) {
      setRegalos([...regalos, {id: uuidv4(), name: newRegalo.trim(), cantidad: cantidad}])
    }
    setNewRegalo("")
    setCantidad(1)
  }
  const handlerClear = () => {
    setRegalos([])
    setError("")
    setCantidad(1)
  }
  const handlerDelete = (id) => {
    setRegalos(regalos.filter((regalo) => regalo.id !== id))
    setError("")
    setCantidad(1)
  }

  const regalosRender = regalos.map((item) => (
    <Flex key={item.id} justifyContent="space-between" w="100%">
      <Text>
        {item.name}{" "}
        <Text as="span" fontWeight="bold" marginLeft="4px" marginRight="4px">
          X
        </Text>
        {item.cantidad}
      </Text>
      <Button colorScheme="red" size="xs" onClick={() => handlerDelete(item.id)}>
        x
      </Button>
    </Flex>
  ))

  return (
    <Flex align="center" justify="center" minH="100vh" w="100%">
      <VStack background="white" boxShadow="md" p={4} w="30%">
        <Heading>Regalos:</Heading>
        <Flex as="form" gap={2} justifyContent="flex-start" onSubmit={handlerSubmit}>
          <Input
            placeholder="Regalo"
            value={newRegalo}
            onChange={(e) => setNewRegalo(e.target.value)}
          />
          <NumberInput
            defaultValue={1}
            min={1}
            value={cantidad}
            onChange={(e) => setCantidad(Number(e))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button colorScheme="red" type="submit">
            Agregar
          </Button>
        </Flex>
        <Text color="red">{error}</Text>
        <VStack w="100%">
          {regalos.length !== 0 ? (
            regalosRender
          ) : (
            <Text color="gray.400">No hay regalos Grinch!! agrega uno .</Text>
          )}
        </VStack>
        {regalos.length !== 0 && (
          <Button colorScheme="red" w="100%" onClick={handlerClear}>
            Borrar todo
          </Button>
        )}
      </VStack>
    </Flex>
  )
}

export default App
