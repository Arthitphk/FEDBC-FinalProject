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
      case 5: 
        return "https://www.youtube.com/watch?v=EcbgbKtOELY"
      case 6: 
        return "https://www.youtube.com/watch?v=yye7rSsiV6k&t=343s"
      case 7: 
        return "https://www.youtube.com/watch?v=SbY1DhAgyGE"
      case 8: 
        return "https://www.youtube.com/watch?v=2D8VkHTbI8o"
      case 9: 
        return "https://www.youtube.com/watch?v=zQnBQ4tB3ZA"  
      default:
        return "";
    }
  };
  
  export default CourseVideo;