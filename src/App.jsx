import React, {useState,useEffect} from 'react';
import Search from "./components/search.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        authorization: "Bearer " + API_KEY,
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

    }, []);
    return (
       <main>
           <div className= "pattern" />
           <div className= "wrapper">
               <header>

                   <img src="/hero-img.png" alt = "Hero Banner"/>
               <h1>Find <span className="text-gradient">Movies</span> You'll Love Without the Hassle</h1>
                </header>

               <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           </div>
       </main>
    );
};

export default App;