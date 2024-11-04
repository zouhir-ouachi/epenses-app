import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      </CardContent>
    </Card>
  );
};

export default Login;
