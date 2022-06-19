import { useCheckBirthday } from "../hooks/useCheckBirthday";

import HomeFriends from "../components/HomeFriends";
import HomeThomas from "../components/HomeThomas";

export default function Home() {
  const isHisBirthday = useCheckBirthday();

  return <>{isHisBirthday ? <HomeThomas /> : <HomeFriends />}</>;
}

// How do I make sure the /create route is ONLY accessible when logged in?
// How do I make sure that signInWithRedirect actually routes to the create page. Atm, it only works when using signInWithPopup (note: signInWithPopup doesn't work on mobile, that's why)
// What are the steps I need to take in order to (map and) display the messages in the HomeThomas component?
