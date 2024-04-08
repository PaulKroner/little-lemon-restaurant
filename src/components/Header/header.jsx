

const Header = ( props ) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h1>{props.pic}</h1>
      <h1>{props.buttonText}</h1>
    </header>
  );
};

export default Header;