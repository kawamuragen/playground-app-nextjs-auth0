import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, Code, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Box, Heading, Stack, StackDivider, Text, Wrap } from "@chakra-ui/layout";
import Link from "next/link";

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

        <div className={styles.center}>
          {isLoading ? (
            <div>Loading...</div>
          ) : user ? (
            <Box w="100%">
              <Stack spacing={4} align="center" pb={6}>
                <Link href="/api/auth/logout">
                  <Button variant="solid" colorScheme="blackAlpha" size="lg">
                    ログアウト
                  </Button>
                </Link>
              </Stack>
              <Card>
                <CardHeader>
                  <Wrap>
                    <Heading size="md">ログインしました。ようこそ！</Heading>
                  </Wrap>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        ユーザー名
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        {user.name}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        メールアドレス
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        {user.email}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        ユーザー情報
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        <Code>{JSON.stringify(user, null, 2)}</Code>
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          ) : (
            <Box w="100%">
              <Stack spacing={4} align="center" pb={6}>
                <Link href="/api/auth/login">
                  <Button variant="solid" colorScheme="blackAlpha" size="lg">
                    ログイン
                  </Button>
                </Link>
              </Stack>
              <Card>
                <CardHeader>
                  <Wrap>
                    <Heading size="md">未ログイン状態です</Heading>
                  </Wrap>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        ユーザー名
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        ログインすると表示されます
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        メールアドレス
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        ログインすると表示されます
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        ユーザー情報
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        ログインすると表示されます
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          )}
        </div>

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
