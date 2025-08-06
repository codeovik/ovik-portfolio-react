import { Link } from 'react-router-dom';

export default function Thanks() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-20 dark:text-white">
        <h1 className="text-center text-5xl font-bold">Thank You!</h1>
        <p className="text-center text-xl mt-5">Your message has been sent successfully. We will get back to you as soon as possible.</p>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    </>
  )
}