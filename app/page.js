"use client";
import Courses from "./components/Courses";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const courses = await response.json();
      setCourses(courses);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Welcome to Web Dev Courses</h1>
      <Search getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
