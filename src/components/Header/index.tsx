
import { SignButton } from '../SignButton';
import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Ig News" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
          <SignButton />
      </div>
    </header>
  )
}