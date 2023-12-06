import { Link } from 'react-router-dom'
import notfound from '../../assets/notfound.png'

export const NotFound = () => {
  return (
    <div className="book-wrapper">
      <p>404</p>
      <p>Page not found</p>
      <img src={notfound} alt="not-found"></img>
      <Link to="/">Back to home</Link>
    </div>
  )
}
