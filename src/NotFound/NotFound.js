import './NotFound.css';

function NotFound({ error }) {
  return (
    <p classList="error-text">{error.message}</p>
  )
}

export default NotFound;