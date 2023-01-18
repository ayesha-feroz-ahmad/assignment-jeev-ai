import Layout from "./pages/Layout";
import { BrowserRouter } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

      <Toaster
        toastOptions={{ duration: 1000 }}
        reverseOrder={false}
        containerClassName="deleteToastClass"
      />
    </>


  );
}

export default App;
