import { useState } from "react";
import "./Style.css";
import Table from "./Table";
import Charts from "./Charts";

function Home() {
  // Using UseState hook create Tabs
  const [view, setView] = useState("");
  const Home = () => {
    // checking the tabs using Id condition
    let output = "";

    if (view === "") {
      output = <Table />;
    } else if (view === "charts") {
      output = <Charts />;
    }
    return output;
  };

  return (
    <div className="container">
      {/* Header and profile deatil [Name, email, contact] */}
      <div className="profile_details">
        <p
          style={{
            marginLeft: "20px",
          }}
        >
          <strong>Name:</strong> Pasam Yedukondalu
        </p>
        <p
          style={{
            marginLeft: "20px",
          }}
        >
          <strong>Contact No:</strong> +91 8328675031
        </p>
        <p
          style={{
            marginLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <strong>Email Id:</strong> kondalu5282@gmail.com
        </p>
      </div>
      {/* Navigation tabs for switching between table and line chart */}
      <div className="tab">
        <button className="tab_button active" onClick={() => setView("")}>
          Table
        </button>
        <button className="tab_button" onClick={() => setView("charts")}>
          Line Chart
        </button>
      </div>
      {/* Table or Line chart  showing*/}
      <div className="content_box">
        <div className="content">{Home()}</div>
      </div>
    </div>
  );
}

export default Home;
