

import { BrowserRouter as Router, Route, Routes, useActionData, Link } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
   
    <div>
      <header>
        <Link href="./">Old Book</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        
      </main>
    </div>
    </Router>
  );
}

export default App;
