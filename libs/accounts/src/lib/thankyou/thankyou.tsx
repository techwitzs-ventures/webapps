import styles from './thankyou.module.css';

/* eslint-disable-next-line */
export interface ThankyouProps {}

export function Thankyou(props: ThankyouProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Thankyou!</h1>
    </div>
  );
}

export default Thankyou;
