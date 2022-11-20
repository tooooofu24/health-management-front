import { cert, getApps } from "firebase-admin/app";
import { getAuth, UserRecord } from "firebase-admin/auth";
import { NextApiRequest } from "next";
import admin from "firebase-admin";
import { Role, User } from "@prisma/client";
import { findUser } from "./user";
import { APIError } from "./error";

const initializeFirebase = () => {
  if (!getApps()?.length) {
    admin.initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
};

export const getFirebaseUser = async (
  req: NextApiRequest
): Promise<UserRecord> => {
  initializeFirebase();
  const token = req.headers.authorization?.replace("Bearer ", "");
  const decodedIdToken = await getAuth().verifyIdToken(token || "");
  const user = getAuth().getUser(decodedIdToken.uid);
  return user;
};

export const isAuthenticated = async (
  req: NextApiRequest,
  role?: Role
): Promise<User> => {
  const firebaseUser = await getFirebaseUser(req);
  const user = await findUser(firebaseUser);
  if (role && user.role !== role) throw new APIError("権限がありません！", 403);
  return user;
};
