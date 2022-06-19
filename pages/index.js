import { useCheckBirthday } from "../hooks/useCheckBirthday";

import HomeFriends from "../components/HomeFriends";
import HomeThomas from "../components/HomeThomas";

export default function Home() {
  const isHisBirthday = useCheckBirthday();

  return <>{!isHisBirthday ? <HomeThomas /> : <HomeFriends />}</>;
}

// Organise imports
// Clean up code where possible
// Clean up firebase.js
