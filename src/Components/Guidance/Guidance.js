import React from 'react';
import './Guidance.css';
const Guidance = () => {
  return (
    <div>
      {/* Guidance */}
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto pb-5">
            <h1>Bullying guidance for students</h1>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2">
          <div className="col">
            <div className="d-flex flex-column flex-lg-row">
              <div className="w-100">
                <img
                  className="rounded img-fluid d-block w-100 fit-cover"
                  src={require('../Guidance/1.jpg')}
                />
              </div>
              <div className="py-4 py-lg-0 px-lg-4">
                <a href="https://www.vic.gov.au/im-being-bullied" target="_blank" rel="noreferrer">
                  I'm being bullied
                </a>
                <p>
                  Being bullied can feel awful. There are some important things you should do if you
                  are being bullied.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-lg-row">
              <div className="w-100">
                <img
                  className="rounded img-fluid d-block w-100 fit-cover"
                  src={require('../Guidance/2.jpg')}
                />
              </div>
              <div className="py-4 py-lg-0 px-lg-4">
                <a
                  href="https://www.vic.gov.au/im-being-racially-bullied"
                  target="_blank"
                  rel="noreferrer">
                  I'm being racially bullied
                </a>
                <p>
                  ​​Everyone has a role in stopping racist bullying. Don’t underestimate your
                  ability to make a difference.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-lg-row">
              <div className="w-100">
                <img
                  className="rounded img-fluid d-block w-100 fit-cover"
                  src={require('../Guidance/3.jpg')}
                />
              </div>
              <div className="py-4 py-lg-0 px-lg-4">
                <a
                  href="https://www.vic.gov.au/ive-been-called-bully"
                  target="_blank"
                  rel="noreferrer">
                  I've been called a bully
                </a>
                <p>
                  It doesn't feel good to be called a bully. It means that someone doesn't like the
                  way you behave towards them.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-lg-row">
              <div className="w-100">
                <img
                  className="rounded img-fluid d-block w-100 fit-cover"
                  src={require('../Guidance/4.jpg')}
                />
              </div>
              <div className="py-4 py-lg-0 px-lg-4">
                <a
                  href="https://www.vic.gov.au/i-know-someone-whos-being-bullied"
                  target="_blank"
                  rel="noreferrer">
                  I know someone who's being bullied
                </a>
                <p>
                  If someone you know is being bullied they need your help. Others respect you if
                  you stand up for someone who is being bullied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Guidance */}
    </div>
  );
};

export default Guidance;
