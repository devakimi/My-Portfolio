import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        <div className="loader">
          <div className="spinner">
            <div className="inner-spinner"></div>
          </div>
        </div>
        <div className="progress-text">{progress.toFixed(0)}% loaded</div>
      </div>
      <style jsx>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
        }
        .loader {
          width: min(20vw, 20vh, 100px);
          height: min(20vw, 20vh, 100px);
        }
        .spinner {
          width: 100%;
          height: 100%;
          border: min(1vw, 1vh, 4px) solid rgba(0, 123, 255, 0.2);
          border-top: min(1vw, 1vh, 4px) solid rgba(0, 123, 255, 1);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .inner-spinner {
          width: 100%;
          height: 100%;
          border: min(1vw, 1vh, 4px) solid rgba(0, 123, 255, 0.2);
          border-top: min(1vw, 1vh, 4px) solid rgba(0, 123, 255, 0.6);
          border-radius: 50%;
          animation: spin 1.5s linear infinite reverse;
        }
        .progress-text {
          margin-top: min(4vw, 4vh, 20px);
          font-size: min(4vw, 4vh, 18px);
          color: #007bff;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          .loader {
            width: min(30vw, 30vh, 80px);
            height: min(30vw, 30vh, 80px);
          }
          .progress-text {
            font-size: min(5vw, 5vh, 16px);
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;
