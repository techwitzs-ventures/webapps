import styles from './mock-api.module.css';

/* eslint-disable-next-line */
export interface MockApiProps {}

export function MockApi(props: MockApiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MockApi!</h1>
    </div>
  );
}

export default MockApi;
