import React from "react";

import { useRouter } from "next/router";

import Header from "../ui/Header/Header";

import styled from "styled-components";
import { useAppDispatch } from "../redux/hook";
import { useSession } from "next-auth/client";
import { setCardSender, setCardSenderJobDesc } from "../redux/data.slice";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [session] = useSession();

  const name = session?.user?.name;
  const email = session?.user?.email;

  React.useEffect(() => {
    dispatch(setCardSender(name));
    dispatch(setCardSenderJobDesc(email));
  }, [session]);

  return (
    <LayoutStyled>
      {router.query.id?.includes("say-thanks") ||
      router.pathname === "/" ? null : (
        <Header />
      )}
      {children}
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
