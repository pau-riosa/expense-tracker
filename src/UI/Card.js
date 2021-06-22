import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // card expenses
  return <div className={classes}>{props.children}</div>;
};

export default Card;
