import { useEffect, useState } from "react"
import { Task } from "@monorepo/core"

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:3001/tasks")
      const tasks = await data.json() as Task[]
      setTasks(tasks)
    })()
  }, [])

  return (
    <>
      <h1>Tasks:</h1>
      {
        tasks.map((task) => (
          <>
            <h1>{task.name}</h1>
            <p>{task.id}</p>
            <p>{task.done ? "Feito" : "Á Fazer"}</p>
          </>
        ))
      }
    </>
  )
}

export default App
