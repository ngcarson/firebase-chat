import { Slot, useSegments, useRouter } from "expo-router";
//import { SessionProvider } from '../ctx';
import "../global.css";
import { AuthContextProvider, useAuth } from '../context/authContext';
import { useEffect } from "react";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated or not
    if (typeof isAuthenticated == 'undefined') return;
    const inApp = segments[0] == 'app';
    if (isAuthenticated && !inApp) {
      // Redirect to home
      router.replace('home');
    } else if (isAuthenticated == false) {
      // Redirect to singIn
      router.replace("signIn");
    }
  }, [isAuthenticated])

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  )
}