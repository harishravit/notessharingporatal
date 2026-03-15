import { Header, Mainbox, Sidebar,Noteswrapper } from "layout";
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <main className="light container">
      <Header />
      <section className="content_box">
        <Sidebar />
        <Mainbox />
      </section>
    </main>
  )
}
export default App;