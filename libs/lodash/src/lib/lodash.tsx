import styles from './lodash.module.css';

/* eslint-disable-next-line */
export interface LodashProps {}

export function Lodash(props: LodashProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lodash!</h1>
    </div>
  );
}

export default Lodash;
