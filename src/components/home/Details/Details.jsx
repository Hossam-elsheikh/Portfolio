import classes from "./details.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Details = () => {
  const navigate = useNavigate();
  const details = useSelector((data) => data.details.details);
  return (
    <div className={classes.cont}>
      <div className={classes.text}>
        <div>
          <h2>Hossam Elsheikh</h2>
          <p>{details.currentJobTitle}</p>
        </div>
        <img
          className={classes.arrow}
          src="https://i.pinimg.com/originals/44/67/ce/4467ceda95866abb6e9060609fc81360.gif"
        />
        <img
          className={classes.q}
          src="https://media2.giphy.com/media/GpXwVrEZsT2hZaNeM0/giphy.gif?cid=ecf05e47pkd38ucsoe7q3zhxdl67c2t7v8dy8uykmiifxd01&ep=v1_stickers_search&rid=giphy.gif&ct=ts"
        />
        <div className={classes.icons}>
          {details.links && details.links.map((link, index) => {
            return (
              <Link to={link.url} key={index} target="_blank">
                <i className={link.icon}></i>
              </Link>
            );
          })}
        </div>
        <form method="get" action={details.cvLink}>
          <button onClick={() => navigate("/about")}>
            <h3>More Details</h3>
          </button>
          <button type="submit">
            <h3>Download CV</h3>
          </button>
        </form>
      </div>
      <img src={details.picLink} />
    </div>
  );
};

export default Details;
