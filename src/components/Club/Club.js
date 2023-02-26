import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Form from '../Form/Form';
import './Club.css'
import Pic from '../../Images/Gym.png'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Question from '../Question/Question';

const Club = () => {
  const [activities, setActivities] = useState([]);
  const [addedActivities, setAddedActivities] = useState([]);

  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setActivities(data))
  }, [])
  useEffect(() => {
    const storedActivities = getStoredCart();
    const savedActivities = [];
    for (const id in storedActivities) {
      const addedActivities = activities.find(activity => activity.id === id)
      if (addedActivities) {
        const quantity = storedActivities[id];
        addedActivities.quantity = quantity;
        savedActivities.push(addedActivities);
      }
    }
    setAddedActivities(savedActivities)
  }, [activities])



  const handelAddToForm = (selectedActivities) => {
    let newActivities = [];
    const exists = addedActivities.find(activity => activity.id === selectedActivities.id)
    if (!exists) {
      selectedActivities.quantity = 1;
      newActivities = [...addedActivities, selectedActivities]
    }
    else {
      const rest = addedActivities.filter(activity => activity.id !== selectedActivities.id)
      exists.quantity = exists.quantity + 1;
      newActivities = [...rest, exists]
    }
    setAddedActivities(newActivities)
    addToDb(selectedActivities.id)
  }
  return (
    <div className='Activities-container'>
      <div className='p-5 g-col-6'>
        <div className='d-flex'>
          <img style={{ height: '65px' }} className='mx-2' src={Pic} alt="" />
          <h1 className='text-success'>Ikigai Lifestyle</h1>
        </div>
        <p className='fs-4 mt-3 text-primary'>Select today’s activities</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            activities.map(activity =>
              <Activities
                activity={activity}
                handelAddToForm={handelAddToForm}
                key={activity.id}
              ></Activities>
            )
          }
        </div>
      </div>
      <div className='Form-container'>
        <Form addedActivity={addedActivities}></Form>
      </div>
      <div className='Question-container'>
        <Question></Question>
      </div>
    </div>
  );
};

export default Club;