import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Timetracker from "../components/timetracker/Timetracker";
import styles from "../components/styles/Layout.module.css";

const Home: NextPage = (data: any) => {
  return (
    <div className={styles.wrapper}>
      <Timetracker {...data} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
};
