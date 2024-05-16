import styles from './fuse.module.css';

/* eslint-disable-next-line */
export interface FuseProps {}

export function Fuse(props: FuseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Fuse!</h1>
    </div>
  );
}

export default Fuse;
