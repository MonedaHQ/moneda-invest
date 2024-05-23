import { motion, useInView } from 'framer-motion';
import Section from '@/components/Section';

import { advisoryTeam, executiveTeam } from '@/data/teamData';

import styles from './styles/team.module.css';
import Image from 'next/image';
import { slide } from '@/utils/anim';
import { useRef } from 'react';

function Team() {
  return (
    <Section>
      <main className={styles.main}>
        <Members data={advisoryTeam} />
        <Members data={executiveTeam} />
      </main>
    </Section>
  );
}

function Members({ data }) {
  const { title, members } = data;
  return (
    <div className={styles.members}>
      <h3>{title}</h3>
      <div className={styles.membersContainer}>
        {members.map((member, index) => (
          <Member member={member} index={index} key={member.name} />
        ))}
      </div>
    </div>
  );
}

function Member({ member, index }) {
  const { name, position, job, paragraph, avatar } = member;
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <div
      className={styles.member}
      ref={ref}
      custom={index}
      variants={slide}
      initial="initial"
      animate={inView ? 'enter' : 'initial'}
    >
      <div className={styles.titles}>
        <div className={styles.avatarContainer}>
          <Image
            src={avatar}
            alt={name}
            width={250}
            height={250}
            className={styles.avatar}
            draggable={false}
          />
        </div>
        <div className={styles.titleContent}>
          <h4>{name}</h4>
          <h5>{position}</h5>
          <h6>{job}</h6>
        </div>
      </div>
      <div className={styles.paragraph}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Team;
