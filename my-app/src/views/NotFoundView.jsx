import { Link } from "react-router-dom";

export const NotFoundView = () => {
  return (
    <div>
      This page doesn't exist. Go to the <Link to='/'>home page</Link>
    </div>
  )
}