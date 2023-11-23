import Button from '@/components/Button';
import Section from '@/components/Section';

import styles from './styles/reports.module.css';
import Image from 'next/image';
import { reportHighlight } from '@/data/reportsData';
import { PiLinkSimpleBold } from 'react-icons/pi';

function Reports() {
  const firstTwoHighLights = reportHighlight.slice(0, 2);
  const lastTwoHighLights = reportHighlight.slice(2, 4);
  return (
    <Section>
      <div className={styles.main}>
        <div className={styles.title}>
          <h3>Reports</h3>
          <Button variant="link-light">All reports</Button>
        </div>
        <p>
          Get up to date with industry news, reports, events and lots of other
          valuable resources you&lsquo;ll find helpful.
        </p>
        <div className={styles.reportsContainer}>
          <div className={styles.someReports}>
            {firstTwoHighLights.map((report) => (
              <Report key={report.title} report={report} />
            ))}
          </div>
          <div className={styles.moreReports}>
            {lastTwoHighLights.map((report) => (
              <Report key={report.title} report={report} large={false} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Report({ report, large = true }) {
  return (
    <div className={styles.report}>
      <div className={`${large ? styles.reportImg : styles.reportImg2} `}>
        <Image
          width={1270}
          height={720}
          alt={report.title}
          src={report.coverImage}
          draggable={false}
        />
        <div className={styles.readArticle}>
          <p>
            <PiLinkSimpleBold />
          </p>
          <p>Read article</p>
        </div>
      </div>
      <h4>{report.title}</h4>
    </div>
  );
}

export default Reports;
