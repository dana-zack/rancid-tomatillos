import './NotFound.css';

function NotFound({ error }) {
  return (
    <p>{error.message}</p>
  )
}

export default NotFound;