import styles from './styles/whymonedaexists.module.css';

function WhyMonedaExists() {
  return (
    <section className={styles.section}>
      <div className={styles.videoContainer}>
        <iframe
          width="1503"
          height="845"
          src="https://www.youtube.com/embed/tnltNkowUqk?rel=0"
          title="Ejike Egbuagu - why Moneda exists"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className={styles.content}>
        <h3>Why Moneda Exists</h3>
        <p>
          Most African budgets depend on selling raw materials, so commodity
          price reductions can cause economic crisis in African markets. After
          the crude oil crash of 2014, several SMEs with profitable contracts in
          Nigeria went bankrupt (because of dollar scarcity, devaluations and
          illiquidity in credit systems).
        </p>
        <p>
          Moneda was born to fix such anomalies - providing alternative credit
          and execution expertise to oil contractors abandoned by traditional
          credit. This is why we exist.
        </p>
        <h4>Ejike Egbuagu, Chief Group Executive</h4>
      </div>
    </section>
  );
}

export default WhyMonedaExists;
