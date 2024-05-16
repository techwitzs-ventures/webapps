import styles from './completeOnboarding.module.css';

/* eslint-disable-next-line */
export interface CompleteOnboardingProps {}

export function CompleteOnboarding(props: CompleteOnboardingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CompleteOnboarding!</h1>
    </div>
  );
}

export default CompleteOnboarding;
