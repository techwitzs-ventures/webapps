import styles from './history.module.css';

/* eslint-disable-next-line */
export interface HistoryProps {}

export function History(props: HistoryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to History!</h1>
    </div>
  );
}

export default History;
