// components/Header.tsx

import { FC } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <header>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </header>
    );
  }

  return (
    <header>
      <a href="/api/auth/login">Login</a>
    </header>
  );
};

export default Header;
