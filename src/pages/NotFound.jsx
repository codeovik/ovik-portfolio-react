import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-20 dark:text-white">
      <h1 className="text-center text-5xl font-bold">404</h1>
      <p className="text-center text-xl mt-5">Page not found.</p>
      <p className="">
        There is no page like <span className="font-mono text-primary">{window.location.href}</span>
      </p>
      {/* <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link> */}
      <Link to='/' className="btn-primary"><span></span><span>Go Home</span><span></span></Link>
    </div>
  )
}
