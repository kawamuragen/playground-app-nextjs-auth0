import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import LoginStatCard from "@/components/LoginStatCard";
import styles from "@/styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>川村アプリ</title>
        <meta name="description" content="Next.jsとAuth0を使った川村のテスト用アプリです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>※Next.jsとAuth0を使ったテスト用アプリです。しばらくしたら非公開にします。</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>{isLoading ? <div>Loading...</div> : <LoginStatCard user={user} />}</div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Next.js <span>-&gt;</span>
            </h2>
            <p>Next.jsのドキュメントはこちらから確認できます！</p>
          </a>

          <a href="https://auth0.com/docs" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>
              Auth0 <span>-&gt;</span>
            </h2>
            <p>Auth0のドキュメントはこちらから確認できます！</p>
          </a>

          <a
            href="https://auth0.com/docs/quickstart/webapp/nextjs/01-login"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              クイックスタート <span>-&gt;</span>
            </h2>
            <p>Next.jsアプリのAuth0を使ったクイックスタートはこちら！</p>
          </a>

          <a href="https://vercel.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>
              Vercel <span>-&gt;</span>
            </h2>
            <p>デプロイで使用したVercelはこちら！</p>
          </a>
        </div>
      </main>
    </>
  );
}
