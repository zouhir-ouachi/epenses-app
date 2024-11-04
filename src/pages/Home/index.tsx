import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <Button
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          Log Out
        </Button>
      ) : (
        <Button variant="outline" onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      )}
    </>
  );
};

export default Home;
