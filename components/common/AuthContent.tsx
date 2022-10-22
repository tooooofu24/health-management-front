import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import { FC, ReactNode, useState } from "react";
import { logout } from "../../utils/auth";
import { getBearerToken, refreshBearerToken } from "../../utils/bearer";
import { app } from "../../utils/firebase";

type props = {
  children: ReactNode;
};
export const AuthContent: FC<props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(getBearerToken())
  );
  const router = useRouter();
  const auth = getAuth(app);

  onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      setIsAuthenticated(true);
      refreshBearerToken(user);
    } else {
      await logout();
      router.push("/login");
    }
  });
  return isAuthenticated ? <>{children}</> : null;
};
