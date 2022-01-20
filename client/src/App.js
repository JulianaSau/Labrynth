import './App.css';
import { theme } from './utils/theme';
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"
import Home from "./pages/Home"
import MessageBoard from './pages/MessageBoard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/message-board" element={<MessageBoard/>} />
          </Routes>
        </Router>
        </Provider>
    </ChakraProvider>
    
  );
}

export default App;
