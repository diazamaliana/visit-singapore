import './App.scss';
import Layout from './components/layout';
import Maps from "components/maps";
import { markers } from 'data/markers';


function App() {
  return (
    <div className="App">
      <Layout>
        <div className="App-main">
            <Maps data={markers}/>
        </div>
      </Layout>
    </div>
  );
}

export default App;
