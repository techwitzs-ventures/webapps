import styles from './otp.module.css';

/* eslint-disable-next-line */
export interface OtpProps {}

export function Otp(props: OtpProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Otp!</h1>
    </div>
  );
}

export default Otp;
