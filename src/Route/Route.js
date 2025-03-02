

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil  from "../pages/Accueil";

function MyRoute(){

return(

    <Routes>
             <Route path="/" element={<Acceuil />} />
    </Routes>
);

}

export default MyRoute;