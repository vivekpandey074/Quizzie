import "./index.css";
import notfoundimg from "../../assets/404notfound.png";

export default function Notfound() {
  return (
    <div className="not-found-cont">
      <img src={notfoundimg} alt="" className="not-found-img" />
    </div>
  );
}
