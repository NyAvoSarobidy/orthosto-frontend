import React from "react";
import MyRouter from "./Route/Route";


function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/test`)
  //     .then(response => {
  //       setMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données:', error);
  //     });
  // }, []);

  return (
    <div>    
         
    <MyRouter />

 </div> 
  );
}

export default App;
