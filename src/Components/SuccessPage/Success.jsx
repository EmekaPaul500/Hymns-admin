import "./Success.css";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <main className="success_main">
      <div className="success_card">
        <div className="success_icon">
          <img src="/Images/success.png" alt="Success" />
        </div>

        <h3>Hymn Saved Successfully</h3>
        <p>
          Your hymn has been added to the collection. You can view it in the
          hymn list or add another one.
        </p>

        <button onClick={() => navigate("/")}>Go to Hymn List</button>
      </div>
    </main>
  );
};

export default SuccessPage;
