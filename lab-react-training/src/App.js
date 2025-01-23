import './App.css';
import IdCard from './components/IdCard';
import React from 'react';

function App() {
  return (
 
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="Jhon"
        gender="male"
        heigth={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
    
  );
}

export default App;
