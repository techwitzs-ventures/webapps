import styles from './invoices.module.css';

/* eslint-disable-next-line */
export interface InvoicesProps {}

export function Invoices(props: InvoicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Invoices!</h1>
    </div>
  );
}

export default Invoices;
