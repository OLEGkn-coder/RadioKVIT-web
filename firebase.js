import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBaoXsNCsK-wkhY9mdakEdGbFLZrsWgI6k",
  authDomain: "radiokvit-bde2d.firebaseapp.com",
  databaseURL: "https://твій_домен.firebaseio.com",
  projectId: "radiokvit-bde2d",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
