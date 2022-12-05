import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks/CurrentUser";
import { logout } from "../../utils/auth";
import { app } from "../../utils/firebase";
import { LoadingPage } from "./loading/LoadingPage";

type props = {
  children: ReactNode;
};
export const AuthContent: FC<props> = ({ children }) => {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unListen = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (!user) {
        await logout();
        router.push("/login");
      }
    });
    return () => {
      unListen();
    };
  }, []);

  return user ? <TeacherCheck>{children}</TeacherCheck> : <LoadingPage />;
};

const TeacherCheck = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user: currentUser } = useCurrentUser();
  const isAdminRoute = router.pathname.indexOf("/admin") === 0;
  const isTeacher = currentUser?.role === "Teacher";
  const isStudent = currentUser?.role === "Student";

  if (isTeacher) {
    return <>{children}</>;
  }

  if (isStudent) {
    if (isAdminRoute) {
      router.push("/");
      return null;
    } else {
      return <>{children}</>;
    }
  }

  return <LoadingPage />;
};
