import Nav from './components/Navbar/Nav'
import Blogs from './components/Blogs/Blogs'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Nav></Nav>
    
        <div className="main-container flex gap-2 w-[1870px] mx-auto">
          <div className="left-container w-[70%]">
            <Blogs></Blogs>
          </div>
          <div className="right-container w-[30%] bg-[#ddd] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea, voluptates laborum nemo quidem officiis laudantium nihil eius distinctio vitae.
          </div>
        </div>
    </>
  )  
}

export default App
