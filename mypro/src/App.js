import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import React from 'react';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
function App() {
  return (
    <>
    <ProfilePhoto />
    <FullName />
    <Address/>
    </>

     ); 
}


export default App;
