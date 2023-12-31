import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">

<div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/rF79Bx3/yalantis-interactive-404.gif)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

<Link to='/' >  <button className=" mt-24 btn btn-warning " > Go Home </button> </Link>      

    </div>
  </div>
</div>
   



      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}