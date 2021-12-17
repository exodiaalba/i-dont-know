import React from 'react';
import './App.css';
import Adress from './Component/Profile/adrees';
import Fullname from './Component/Profile/fullname';
import Introductions from './Component/Profile/introductions';
import Pp from './Component/Pp';
import Exo from "./Component/Profile/exo.js";
import Git from "./Component/Profile/git";
import Fb from "./Component/Profile/fb";
import Insta from "./Component/Profile/insta";

const App = () => (
    <div className="container"> 
<div>
  
  <Insta/>
  <Fb/>
<Git/>
  <Fullname/>
    <Adress/>
    <Introductions/>
      <Pp/>
      <Exo/>
     

     </div>
       </div> 
    )

export default App;
