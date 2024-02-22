const CourseVideo = (courseId: number): string => {


    switch (courseId) {
      case 1:
        return "https://www.youtube.com/watch?v=x7X9w_GIm1s";
      case 2:
        return "https://www.youtube.com/watch?v=lkIFF4maKMU&t=373s";
      case 3:
        return "https://www.youtube.com/watch?v=i8NETqtGHms";
      case 4:
        return "https://www.youtube.com/watch?v=DPAsYtUHkkM";
      default:
        return "";
    }
  };
  
  export default CourseVideo;