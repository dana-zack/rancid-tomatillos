import './NotFound.css';

function NotFound({ error }) {
  return (
    <h1>{error.message}</h1>
  )
}

export default NotFound;