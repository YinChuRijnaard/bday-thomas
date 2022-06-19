import { useCheckBirthday } from "../hooks/useCheckBirthday";

import HomeFriends from "../components/HomeFriends";
import HomeThomas from "../components/HomeThomas";

export default function Home() {
  const isHisBirthday = useCheckBirthday();

  return <>{isHisBirthday ? <HomeThomas /> : <HomeFriends />}</>;
}

// Create Firestore db and save message to db -> map over db to display messages + authors
