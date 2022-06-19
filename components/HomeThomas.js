import { doc, getDoc } from "firebase/firestore";

import { db, firestore, postToJSON } from "../firebase";

export async function getServerSideProps(context) {
  const messagesQuery = firestore
    .collectionGroup("bday-thomas")
    .where("published", "==", true)
    .orderBy("createdAt", "desc");

  const messages = (await messagesQuery.get()).docs.map(postToJSON);

  return { props: { messages } };

  // Perhaps this is generally what I should be doing, based on existing code from the Next/Firebase course
}

const HomeThomas = () => {
  return (
    <div>
      <h1>Welcome page, for Thomas</h1>
    </div>
  );
};

export default HomeThomas;
