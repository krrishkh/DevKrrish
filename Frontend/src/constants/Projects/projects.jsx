import TimeSeriesPic from "../../constants/Projects/TimeSeriesPic.png";
import CricketShotPic from "../../constants/Projects/CricketShotPic.avif";
import BackendPic from "../../constants/Projects/BackendPic.webp"

export const PROJECTS = [
    {
      title: "Forecasting Using Time Series",
      image: TimeSeriesPic,
      description: "Developed time series forecasting models (AR, MA, ARMA, ARIMA, SARIMA) using Python, optimizing parameters with grid search. Applied preprocessing techniques like logarithmic transformation and differencing to improve accuracy, ensuring reliable trend predictions.",
      technologies: ["Python", "Pandas", "ARIMA"],
      link: "https://github.com/yourusername/stock-prediction"
    },
    {
      title: "Cricket Shot Intent Inference",
      image: CricketShotPic,
      description: "Developed a system to quantify a batsman's energy by analyzing body movements during shot execution. Used Google ML Kit to process 33 body joints, applied Fourier transformation, acceleration, and angle analysis for improved accuracy. Created comprehensive CSV datasets for machine learning training and testing, enhancing shot classification. Future applications include helping coaches understand a batsman’s intent against specific bowlers in different match scenarios.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      link: "https://yourwebsite.com/alumni-db"
    },
    {
      title: "Video Stream Backend",
      image: BackendPic,
      description: "Developed a secure and scalable backend for a YouTube-like platform using Node.js, Express.js, and MongoDB. Implemented authentication with JWT, integrated Cloudinary for media storage, and hosted on Krutrium, enabling features like video upload, comments, likes, and subscriptions.",
      technologies: ["JavaScript","Express", "Node.js", "MongodB"],
      link: "https://github.com/yourusername/product-management"
    }
  ];
  