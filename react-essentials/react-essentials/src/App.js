import './App.css';
import restaurant from "./restaurant.jpg";
import {Home, About, Events, Contact, Services, CompanyHistory, Location} from "./pages";
import { Routes, Route } from 'react-router-dom';
import { Whoops404 } from './pages';


// Props stand for properties
//props is an object that holds properties


//useEffect: manage side effects that are not related to the component's render

//useState: allows a developer to create abnd use states in a React.js application

//useReducer: useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

// https://api.github.com/users/defunkt





function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
          <Route path="/about/services" element={<Services />}/>
          <Route path="/about/history" element={<CompanyHistory />}/>
          <Route path="/about/location" element={<Location />}/>
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Whoops404 />}/>
      </Routes>
    </div>
  )
}


export default App;




















//Fetching with react

// function App({login}) {

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if(!login) return;
//     setLoading(true);

//     fetch(`https://api.github.com/users/${login}`)
//     .then((response) => response.json())
//     .then(setData)
//     .then(() => setLoading(false))
//     .catch(setError);
//   }, [login])

//   if (loading) return  <h1>Loading...</h1>;
//   if(error) 
//     return <pre>{JSON.stringify(error, null, 2)}</pre>
//   if (!data) return null

//     return (
//       <div>
//         <h1>{data.name}</h1>
//         <p>{data.location}</p>
//         <img src={data.avatar_url} alt={data.login}/>
//       </div>
//     );

//   return <div>No User Available</div>


//   return(
//     <div>

//     </div>
//   )
// }
// export default App;
