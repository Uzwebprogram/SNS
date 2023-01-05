import { Suspense } from "react"
import {Routes , Route} from "react-router-dom"
import {RouterData} from "./index-data"
function RouterComponent() {
  return (
    <>
    <Routes>
    {RouterData.map(elem => 
        <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={<h1>Loading...</h1>}>
                {elem.component}
            </Suspense>            
        }/>
        )}
    </Routes>
    </>
  )
}

export default RouterComponent