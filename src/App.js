import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import ClickCounterTwo from './ClickCounterTwo'
import HoverCounterTwo from './HoverCounterTwo'
import User from './User'
import Counter from './Counter'
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';

function App() {
  return (
    <div className="App">
        {/* <ClickCounter name="Zeeshan"></ClickCounter>
        <HoverCounter name="Zeeshan"></HoverCounter> */}
        {/* <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo> */}
        {/* <Counter render={ (count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo> }></Counter>
        <Counter render={ (count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo> }></Counter> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'}></User> */}
        <UserProvider value='Zeeshan Jamshed'>
            <ComponentC></ComponentC>
        </UserProvider>
    </div>
  );
}

export default App;