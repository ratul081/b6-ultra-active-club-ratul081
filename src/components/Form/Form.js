import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import swal from 'sweetalert';

const Form = ({ addedActivity }) => {
  let time = 0;
  const newTime = localStorage.getItem('Brake-Time');
  if (newTime) {
    time = newTime;
  }
  const [brakeTime, setBrakeTime] = useState(time)

  let duration = 0
  for (const items of addedActivity) {
    duration = duration + (items.time * items.quantity)
  }
  const addBrakeTime = (brakeTime) => {
    setBrakeTime(brakeTime)
    localStorage.setItem('Brake-Time', brakeTime);
  }
  const toast = () => {
    swal("Good job!", "Your activity is completed!", "success");
  }

  return (
    <div className='pt-4 sticky-top '>
      <div className='d-flex'>
        <img style={{ height: "55px", width: "85px" }} className='rounded mx-2' src="https://i.postimg.cc/Fs3yywmk/pic-avater.jpg" alt="" />
        <div>
          <p className='p-0 m-0 fw-bolder'>Sara Tesla</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className='m-lg-3 text-lg-start text-center'>
        <div className='py-2 mx-2  rounded d-flex flex-row justify-content-evenly bg-light'>
          <div><span className='fw-bold'>52</span><small>kg</small><br />Weight</div>
          <div><b>5.5</b><br />Height</div>
          <div><span className='fw-bold'>23</span><small>yrs</small><br />Age</div>
        </div>
        <p className='py-2 fs-4 fw-bold'>Add a break</p>
        <div className='d-flex justify-content-evenly bg-light rounded m-2' style={{ fontSize: "15px" }} >
          <p onClick={() => { addBrakeTime(10) }} className='btn bg-info rounded-circle m-2 fw-bold p-2'>10</p>
          <p onClick={() => { addBrakeTime(20) }} className='btn bg-info rounded-circle m-2 fw-bold p-2'>20</p>
          <p onClick={() => { addBrakeTime(30) }} className='btn bg-info rounded-circle m-2 fw-bold p-2'>30</p>
          <p onClick={() => { addBrakeTime(40) }} className='btn bg-info rounded-circle m-2 fw-bold p-2'>40</p>
          <p onClick={() => { addBrakeTime(50) }} className='btn bg-info rounded-circle m-2 fw-bold p-2'>50</p>
        </div>
        <div className='my-2'>
          <p className='fw-bold fs-4 pt-2'>Exercise Details</p>
          <div className='m-2 py-2 px-3 bg-light rounded d-flex justify-content-between'>
            <div className='fw-bold'>Exercise time</div>
            <div><span>{duration}</span> minute</div>
          </div>
          <div className='m-2 py-2 px-3 bg-light rounded d-flex justify-content-between'>
            <div className='fw-bold' >Break time</div>
            <div><span>{brakeTime}</span> minute</div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button onClick={toast} className='btn btn-primary px-5 mb-3'>Activity Complete</button>
      </div>
    </div>
  );
};

export default Form;