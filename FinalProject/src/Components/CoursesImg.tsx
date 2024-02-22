const CourseImg = (courseId: number): string => {


    switch (courseId) {
      case 1:
        return "src/Images/pthon.png";
      case 2:
        return "src/Images/javascript.png";
      case 3:
        return "src/Images/TensorFlow.png";
      case 4:
        return "src/Images/datascience-with-r.png";
      default:
        return "";
    }
  };
  
  export default CourseImg;