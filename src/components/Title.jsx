import logo from "../images/title_logo.png";

function Title() {
  return (
    <div>
      <a className="full_title" href="https://www.sendinblue.com/">
        <img className="title_logo" src={logo} alt="title_logo" />
        <h1 className="title_text">sendinblue</h1>
      </a>
    </div>
  );
}

export default Title;
