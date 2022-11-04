import classes from "./LinkItems.module.css";

const LinkItems = (props) => {
  return (
    <div className={classes["link-item"]}>
      <a href={props.link} id={props.id}>
        {props.name}
        <br />
        <sub>{props.sub}</sub>
      </a>
    </div>
  );
};

export default LinkItems;
