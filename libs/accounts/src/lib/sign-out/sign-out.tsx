import styles from './sign-out.module.css';

/* eslint-disable-next-line */
export interface SignOutProps {}

export function SignOut(props: SignOutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SignOut!</h1>
    </div>
  );
}

export default SignOut;
