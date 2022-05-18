import RickAndMortyError from "../../assets/RickAndMortyError.png";
import { Button } from "../../components/Button/Button";
import "./styles.css";

export const ErrorPage = () => {
  return (
    <div className="container">
      <img
        className="logo_error"
        src={RickAndMortyError}
        alt="Rick and Morty"
      />
      <h1 className="title_error">Error 404: Page not Found</h1>
      <Button text="Home" route="/" />
    </div>
  );
};