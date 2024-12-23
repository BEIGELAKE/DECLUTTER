import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/Button';

const AuthPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="bg-background-light p-8 rounded-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome to Declutter</h1>
        <p className="text-text-muted mb-8">
          Join our community to buy and sell pre-loved items
        </p>
        <Button
          className="w-full mb-4"
          onClick={() => loginWithRedirect()}
        >
          Sign in with Auth0
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;