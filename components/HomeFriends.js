import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

import { Button, Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Google from "./icons/Google";

const HomeFriends = () => {
  const router = useRouter();
  const auth = getAuth();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      router.push("/create");
      toast.success("Je bent ingelogd!");
    } else if (error) {
      toast.error(error.message);
    }
  }, [user]);

  return (
    <main className="flex h-screen w-screen flex-col justify-center bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat lg:bg-top">
      <div className="bg-gray-500/25 p-4 text-center text-white lg:mx-48">
        <Heading size="3xl">
          Schrijf een leuk bericht voor Thomas z&apos;n verjaardag! 🥳
        </Heading>

        <div className="p-4"></div>

        <Text fontSize="xl">
          Het is bijna Thomas z&apos;n verjaardag! 🎉 Daarom leek het mij,{" "}
          <Link href="https://www.instagram.com/yinnn.chu/" isExternal>
            Yin Chu &#40;
            <ExternalLinkIcon mx="2px" />
            &#41;
          </Link>
          , een leuk idee om een kleine app te maken waar vrienden en familie
          een berichtje achter kunnen laten. Lijkt je dat leuk? Log dan snel in!
          😊
        </Text>
      </div>

      <div className="p-4"></div>

      <div className="flex justify-center">
        <Button colorScheme="gray" onClick={() => signInWithGoogle()}>
          <Google />
          Inloggen met Google
        </Button>
      </div>
    </main>
  );
};

export default HomeFriends;

// Is it OK to use a div and use Tailwind to style the Chakra children?
