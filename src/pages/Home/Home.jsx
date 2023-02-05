import css from './Home.module.css';

const Home = () => {
  return (
    <main>
      <section className={css.section}>
        <div className={css.home}>
          <h1 className={css.home__title}>Phonebook</h1>
          <div className={css.home__wrap}></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
