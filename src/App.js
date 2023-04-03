import Home from './Components/sections/Home'
import About from './Components/sections/About'
import Advantages from './Components/sections/Advantages'
import Ingredients from './Components/sections/Ingredients'
import Faq from './Components/sections/Faq'
import Footer from './Components/sections/Footer'

import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Home />
      <About />
      <Advantages />
      <Ingredients />
      <Faq />
      <Footer />
    </div>
  )
}

export default App;
