import {Route} from "react-router-dom"
import {todos} from 'components/index'

const App = () => {
  return(<>
  <Route exact path='/' component={todos}/>
  </>)
}

export default App