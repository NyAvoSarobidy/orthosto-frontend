import NavBar from "../composant/NavBar";
import Body from './Body'
import Apropos from './Elements/Apropos'

import RendezVous from './Elements/RendezVous'
import Techno from './Elements/Cabinet'

import Techonologie from './Elements/Techno'

import Galerie from './Elements/Galerie'
import Carte from './Elements/Carte'

import Localisation from './Elements/Localisation'

import Footer from '../composant/Footer'
import Header from '../composant/Header'

function Main(){
    return(
    
        <>
            <NavBar/>
            <Body />
            <Carte />
            <Apropos />
            <RendezVous />
            <Techno />
            <Techonologie />
            <Galerie />
            <Localisation />
            <Footer />
            <Header />
        </>

    )

}
export default Main;
