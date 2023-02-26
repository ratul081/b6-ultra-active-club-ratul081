import React from "react";

const Activities = ({ activity, handelAddToForm }) => {
  const { name, img, about, age, time } = activity;
  return (
    <div className="col">
      <div className="card" style={{ height: "650px" }}>
        <img style={{ height: '200px', borderRadius: '25px' }} src={img} className="p-2 " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text overflow-hidden" style={{ height: "185px" }}>{about}</p>
          <p>For age : <b>{age}</b></p>
          <p>Time required : <b>{time}min</b></p>
          <div className="text-center">
            <a onClick={() => { handelAddToForm(activity) }} type="button" style={{ padding: "10px 90px" }} className="btn btn-primary">Add to list</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities; 
