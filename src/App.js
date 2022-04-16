import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';

function App() {

     const signin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const idTokenResult = (await result.user.getIdTokenResult()).token;

        // axios.post(
        //   "http://localhost:5050/api/create/new/user",
        //   {},
        //   {
        //     headers: {
        //       authtoken: idTokenResult,
        //     },
        //   }
        // );
        // console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      			<button onClick={signin}>Google log</button> 
    </div>
  );
}

export default App;
