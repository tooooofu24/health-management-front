import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { useFirebaseUser } from "../../hooks/CurrentUser";
import { useFetchCurrentUser } from "../../jotai/user";
import { logout } from "../../utils/auth";
import { userAtom } from "../../jotai/user";

type props = {
  children: ReactNode;
};
export const AuthContent: FC<props> = ({ children }) => {
  const { user, isLoading } = useFirebaseUser();
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

  return user ? <FetchCurrentUser>{children}</FetchCurrentUser> : null;
};

const FetchCurrentUser: FC<props> = ({ children }) => {
  const { fetchCurrentUser } = useFetchCurrentUser();
  const [user] = useAtom(userAtom);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return user?.id ? <>{children}</> : null;
};
