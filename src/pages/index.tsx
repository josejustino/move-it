import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountdownProvider } from "../contexts/CountdownContext";
import { Countdown } from "../components/Countdown";

import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
            <ChallengeBox />
          <div>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
