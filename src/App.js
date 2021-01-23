import Header from './components/Header';
import List from './components/List';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Header title="Tec4med"/>
      <List />
    </div>
  );
}

export default App;
