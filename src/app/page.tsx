import styles from './components/Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="/">Головна</a>
      <a href="/articles">Статті</a>
    </nav>
  );
}
