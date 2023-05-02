import React, { useState } from 'react';
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';


function Form() {
  const [page, setPage] = useState(0);
  const FormTitles = ['Sign Up', 'Personal Infos', 'Other Infos'];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const checkInputs = () => {
    if (page === 0) {
      return formData.email && formData.password && formData.confirmPassword;
    } else if (page === 1) {
      return formData.firstName && formData.lastName && formData.username;
    } else if (page === 2) {
      return formData.nationality && formData.other;
    }
    return false;
  };
  const isNextDisabled = !checkInputs();

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };


  return (
    <div id="form" className="">
      <div id="progressbar" className="h-4 bg-orange-500 flex items-center">
        <div
          style={{
            width:
              page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
          className="h-3 bg-black rounded-r-full"
        ></div>
      </div>
      <div id="form-container" className="">
        <div id="header" className="">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div id="body" className="">
          {PageDisplay()}
        </div>
        <div id="footer" className="">
          <button
            className="border hover:bg-slate-400 m-1 disabled:hidden"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            PREV
          </button>
          <button
            className="border bg-slate-300 hover:bg-slate-400 m-1 disabled:bg-slate-900"
            disabled={isNextDisabled}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
