import React from "react";
import './users.js'
import './home.css'
import './posts.js'



function Home() {
    return (
        <>
            <div id="main-container">
                <div id="post-container">
                    <div id="heading">
                        <h1>Posts</h1>
                        <button id="post-btn">Click Me to add Posts</button>
                    </div>
                </div>
                <div id="user-container">
                    <div id="heading">
                        <h1>Users</h1>
                        <button>Click Me to add Users</button>
                    </div>
                    <div id=""></div>

                </div>

            </div>
        </>
    )

}

export default Home