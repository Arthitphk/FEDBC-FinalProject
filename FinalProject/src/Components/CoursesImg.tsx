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
      case 5:
        return "src/Images/uiux_text_2.jpg";
      case 6:
        return "src/Images/AppDevelopment.jpg";
      case 7:
        return "src/Images/business-data-analysis.jpg";
      case 8:
        return "src/Images/DevOps.jpg";
      case 9:
        return "src/Images/typescript.jpeg";
      default:
        return "";
    }
  };
  
  export default CourseImg;