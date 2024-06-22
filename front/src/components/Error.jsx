import { Link } from "react-router-dom";

export default function Error() {
  return <div>
    <h1>An error occured</h1>
    <Link to="/">Go back to the home page</Link>
  </div>;
}
