import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // extracting the classes "expense-item" that we received from outside <Card className="expense-item"> then merge to the default classname "card" of this component
  // className will be "card expense-item"
  return <div className={classes}>{props.children}</div>;
};

export default Card;
