import React, { useState } from 'react';
import "./Sidebar.css"
import MessagingNav from './MessagingNav';
import Search from './Search';
import Chats from './Chats'

function Sidebar() {
    const [ searchedUser, setSearchedUser ] = useState()
    const [ error, setError ] = useState(false)
    const [ searchUserInput, setSearchUserInput ] = useState("")

    return (
        <div className='sidebar'>
            <MessagingNav />
            <Search searchUserInput={searchUserInput} setSearchUserInput={setSearchUserInput} setSearchedUser={setSearchedUser} setError={setError}/>
            <Chats error={error} searchedUser={searchedUser} setSearchedUser={setSearchedUser} setSearchUserInput={setSearchUserInput}/>
        </div>
    );
}

export default Sidebar;