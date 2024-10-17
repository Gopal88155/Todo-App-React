import Navbar from "./components/NAVBAR"
import Form from "./components/FORM"
import ListGroup from "./components/ListGroup"

function App() {
    return (
        <>

               <Navbar/>
            <div className="container p-5">

                <Form />
                <ListGroup />

            </div>

        </>
    )
}


export default App