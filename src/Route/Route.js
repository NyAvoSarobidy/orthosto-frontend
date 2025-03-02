

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main  from "../pages/Main";

function MyRoute(){

return(

    <Routes>
             <Route path="/" element={<Main />} />
    </Routes>
);

}

export default MyRoute;