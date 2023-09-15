import styles from '../styles/getstarted.module.css';
import YouTube from 'react-youtube';

export const GetStarted = () => {
  const options = {
    height: '290',
    width: '440',
  };
  return (
    <div className={styles.container}>
      <h1>YOUR GET STARTED GUIDE</h1>
      <p>
        We are officially hosted on the Cronos blockchain. View our how-to video
        series to get started on the journey!
      </p>

      <hr />

      <div className={styles.gridContainer}>
        <div>
          <h3>Step One</h3>
          <p>How to create and connect your wallet</p>
          <YouTube videoId='GAG6Qa5WUQw' opts={options} />
        </div>
        <div>
          <h3>Step Two</h3>
          <p>How to fund your wallet</p>
          <YouTube videoId='fgN3ByI4NYQ' opts={options} />
        </div>
        <div>
          <h3>Step Three</h3>
          <p>How to create virtual collectibles</p>
          <YouTube videoId='tN1PhuthJng' opts={options} />
        </div>
        <div>
          <h3>Step Four</h3>
          <p>How to see your virtual collectibles in your wallet</p>
          <YouTube videoId='KI84eU0sJ2c' opts={options} />
        </div>
      </div>
    </div>
  );
};
