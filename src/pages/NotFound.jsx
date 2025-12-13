import App from '../App'
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <App >
    <div id="error-page" className="w-1/2 h-[20vh] bg-white rounded-md text-red-500  mx-auto my-7  text-center p-5 list-none">
      <h1>Oops!</h1>
      <p>Sorry page not found.</p>
      <p>
        <li>
            <Link to="/" style={{color: "black"}}> Back to Home</Link>
        </li>
      </p>
    </div>
    </App>
  ); 
  
}