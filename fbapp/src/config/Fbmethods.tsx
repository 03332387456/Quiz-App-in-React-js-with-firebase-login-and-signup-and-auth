import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  onValue,
  DataSnapshot,
} from "firebase/database";
import {app} from "./Firebaseconfig"

const auth = getAuth(app);
const db = getDatabase(app);

export const fbLogin = (body: { email: string; password: string }) => {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password are Required");
    } else {
      signInWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          const id = res.user.uid;
          const reference = ref(db, `users/${id}`);

          onValue(reference, (snapshot: DataSnapshot) => {
            if (snapshot.exists()) {
              resolve(snapshot.val());
            } else {
              reject("No Data Found");
            }
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  });
};

export const fbSignUp = (body: {
  email: string;
  password: string;
  id?: string;
}) => {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password are Required");
    } else {
      createUserWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          const id = res.user.uid;
          body.id = id;
          const reference = ref(db, `users/${id}`);

          set(reference, body)
            .then(() => {
              resolve("User Created Successfully");
            })
            .catch((error) => {
              reject(error.message);
            });
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  });
};

export const fbAuth = () => {
    return new Promise((resolve,reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              resolve(uid)

            } else {
                reject("nno user is Logged in")

            }
          });
    })
};
