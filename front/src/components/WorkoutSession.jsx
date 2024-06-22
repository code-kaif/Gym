import React from "react";

const WorkoutSession = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          The Workout Session is a great way to get started with your workout.
          It's a 30-minute session that will help you get started with your workout.
        </p>
        <img src="./img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>One Weak Workout Shedule</h1>
        <div className="bootcamps">
          <div>
            <h4>Monday</h4>
            <p>
              Chest Workout
            </p>
          </div>
          <div>
            <h4>Tuesday</h4>
            <p>
              Back Workout
            </p>
          </div>
          <div>
            <h4>Wednesday</h4>
            <p>
              Biceps & Triceps Workout
            </p>
          </div>
          <div>
            <h4>Thursday</h4>
            <p>
              Shoulder Workout
            </p>
          </div>
          <div>
            <h4>Friday</h4>
            <p>
              Legs Workout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSession;
