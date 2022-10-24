import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks/CurrentUser";
import { logout } from "../../utils/auth";

type props = {
  children: ReactNode;
};
export const AuthContent: FC<props> = ({ children }) => {
  const { user, isLoading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    (async () => {
      if (!user) {
        await logout();
        router.push("/login");
      }
    })();
  }, [user, isLoading]);

  return user ? <>{children}</> : null;
};
