import React from 'react'

import List from './Components/List'

import './index.css'

function App() {
    return (
        <div >
            <header>
                <h1>My Todo App</h1>
            </header>

            <div id="content">
                <List />
            </div>
        </div>
    )
}


export default App