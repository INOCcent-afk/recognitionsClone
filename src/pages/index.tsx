import React from "react";

import { signIn, useSession } from "next-auth/client";
import { BrandingColors } from "../utils/Colors";
import { useRouter } from "next/router";

import styled from "styled-components";

const Login = () => {
  const [session] = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push("/appreciations-livewall");
    }
  }, [session]);

  return (
    <LoginPageStyled>
      <h1
        onClick={() => {
          signIn("google");
        }}
      >
        Signin with Google!
      </h1>
    </LoginPageStyled>
  );
};

export default Login;

export const LoginPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    cursor: pointer;
    background: white;
    padding: 20px 30px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${BrandingColors.violet};
    }
  }
`;
