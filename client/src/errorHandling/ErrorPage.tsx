import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage(): React.ReactElement {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="ErrorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}