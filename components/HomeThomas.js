import { doc, getDocs } from "firebase/firestore";

import { db, colRef } from "../firebase";

getDocs(colRef).then((snapshot) => {
  snapshot.docs.map((doc) => {
    return (
      <div>
        <h1>{doc.data().message}</h1>
        <br />
        <p>
          <strong>Door:</strong>&nbsp;{doc.data().author}
        </p>
      </div>
    );
  });
});

const HomeThomas = () => {
  return (
    <div>
      <h1>Welcome page, for Thomas</h1>
    </div>
  );
};

export default HomeThomas;
