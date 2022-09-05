import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row mb-3  text-center">
        <div className="col-md-12">
          <h2 className="text-center">Welcome , Home</h2>
        </div>
        <div className="btnstylecss mt-3">
          <Link to="/about">
            <button className="btnCss">Go to About</button>
          </Link>

          <Link to="/head-tail">
            <button className="btnCss">Go to Head & Tail</button>
          </Link>
        </div>
        <div className="mt-5">
          <p>
            Homework, or a homework assignment, is a set of tasks assigned to
            students by their teachers to be completed outside the classroom.
            Common homework assignments may include required reading, a writing
            or typing project, mathematical exercises to be completed,
            information to be reviewed before a test, or other skills to be
            practiced. The effects of homework are debated. Generally speaking,
            homework does not improve academic performance among young children.
            Homework may improve academic skills among older students,
            especially lower-achieving students. However, homework also creates
            stress for students and parents, and reduces the amount of time that
            students can spend in other activities. Homework, or a homework
            assignment, is a set of tasks assigned to students by their teachers
            to be completed outside the classroom. Common homework assignments
            may include required reading, a writing or typing project,
            mathematical exercises to be completed, information to be reviewed
            before a test, or other skills to be practiced. The effects of
            homework are debated. Generally speaking, homework does not improve
            academic performance among young children. Homework may improve
            academic skills among older students, especially lower-achieving
            students. However, homework also creates stress for students and
            parents, and reduces the amount of time that students can spend in
            other activities. Homework, or a homework assignment, is a set of
            tasks assigned to students by their teachers to be completed outside
            the classroom. Common homework assignments may include required
            reading, a writing or typing project, mathematical exercises to be
            completed, information to be reviewed before a test, or other skills
            to be practiced. The effects of homework are debated. Generally
            speaking,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
