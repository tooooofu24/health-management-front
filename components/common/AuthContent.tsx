import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { useFirebaseUser } from "../../hooks/CurrentUser";
import { userAtom } from "../../jotai/user";
import { logout } from "../../utils/auth";

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

  return user ? <TeacherCheck>{children}</TeacherCheck> : null;
};

const TeacherCheck = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [currentUser] = useAtom(userAtom);
  const isAdminRoute = router.pathname.indexOf("/admin") === 0;
  const isTeacher = currentUser?.role === "Teacher";
  const isStudent = currentUser?.role === "Student";

  if (isTeacher) {
    return <>{children}</>;
  }

  if (isStudent && isAdminRoute) {
    router.push("/");
    return null;
  }

  return null;
};
