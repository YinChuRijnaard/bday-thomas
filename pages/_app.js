import { ChakraProvider } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

import AuthContext from "../AuthContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext>
      <ChakraProvider>
        <Component {...pageProps} />
        <Toaster />
      </ChakraProvider>
    </AuthContext>
  );
}

export default MyApp;
