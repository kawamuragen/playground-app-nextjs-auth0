import { Button, Code, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Box, Heading, Stack, StackDivider, Text, Wrap } from "@chakra-ui/layout";
import Link from "next/link";
import { UserProfile } from "@auth0/nextjs-auth0/client";

type Props = {
  user: UserProfile | undefined;
};

export default function LoginStatCard({ user }: Props) {
  return (
    <Box w="100%">
      <Stack spacing={4} align="center" pb={6}>
        {user ? (
          <Link href="/api/auth/logout">
            <Button variant="solid" colorScheme="blackAlpha" size="lg">
              ログアウト
            </Button>
          </Link>
        ) : (
          <Link href="/api/auth/login">
            <Button variant="solid" colorScheme="blackAlpha" size="lg">
              ログイン
            </Button>
          </Link>
        )}
      </Stack>
      <Card>
        <CardHeader>
          <Wrap>
            <Heading size="md">{user ? "ログインしました。ようこそ！" : "未ログイン状態です"}</Heading>
          </Wrap>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                ユーザー名
              </Heading>
              <Text pt="2" fontSize="sm">
                {user ? user.name : "ログインすると表示されます"}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                メールアドレス
              </Heading>
              <Text pt="2" fontSize="sm">
                {user ? user.email : "ログインすると表示されます"}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                ユーザー情報
              </Heading>
              <Text pt="2" fontSize="sm">
                {user ? <Code>{JSON.stringify(user, null, 2)}</Code> : "ログインすると表示されます"}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
