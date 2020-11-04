import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.netlify.app/api/react-tabs-project";
function App() {
  /* set variable */
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  /* fetch url */
  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => fetchJobs(), []);

  /* make a render loading */
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  /* set up props for jobs */
  const { id, order, title, date, duties, company } = jobs[value];
  return (
    <div>
      <section className="section">
        {/* title */}
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        {/* button and info */}
        <div className="jobs-center">
          {/* button */}
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => {
                    setValue(index);
                  }}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          {/* desc */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date"></p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
