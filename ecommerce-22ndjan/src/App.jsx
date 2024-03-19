import AddUser from "./components/AddUser"
import AllUsers from "./components/AllUsers"

function App() {
  return (
  <>
    hello react<br/>
    <div className="container">
      <div className="row">
        <AddUser/>
        </div>
<div className="row">
          <AllUsers/>
        </div>
      </div>


  </>
  )
}

export default App
