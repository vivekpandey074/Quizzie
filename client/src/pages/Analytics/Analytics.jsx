import "./index.css";
import sharelogo from "../../assets/share-logo.svg";
import editlogo from "../../assets/edit-logo.svg";
import deletelogo from "../../assets/delete-logo.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

export default function Analytics() {
  return (
    <>
      <div className="main-cont">
        <h1 className="poppin-text heading-1">Quiz Analysis</h1>
        <div className="scroll-wrapper scrollable-element">
          <table id="quiz-table" className="poppin-text">
            <tr>
              <th className="rounded-left">S.No</th>
              <th>Quiz Name</th>
              <th>Created On</th>
              <th>Impression</th>
              <th></th>
              <th className="rounded-right"></th>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="question-text rounded-right ">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
            <tr>
              <td className="rounded-left">1</td>
              <td>Quiz 1</td>
              <td>01 Sep, 2023</td>
              <td>345</td>
              <td className="btn-bar">
                <img src={editlogo} alt="" />
                <img src={deletelogo} alt="" />
                <img src={sharelogo} alt="" />
              </td>
              <td className="rounded-right question-text">
                Question wise Analysis
              </td>
            </tr>
          </table>
        </div>
        <div className="additional-text-box">
          <p className="additional-text poppin-text">
            &#123; more quiz can be added &#125;
          </p>
        </div>
      </div>
      {/* <DeleteModal /> */}
    </>
  );
}
