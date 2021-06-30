import Header from './Header'
import Sidebar from './Sidebar'
import './App.css';
import Feed from './Feed'
import Widget from './Widget';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  //verify users are logged in before displaying the app
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
        <>
          {/* { header } */}
            <Header/>

          <div className="fb-body">
            {/* sidebar */}
            <Sidebar/>
            
            {/* feed */}
            <Feed/>

            {/* widgets */}
            <Widget/>
          </div>
      </>
    )
    }
    
    </div>
  );
}

export default App;
