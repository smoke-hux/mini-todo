import React, { useState, useEffect, useContext } from "react";

import { DraftModeProvider } from "next/dist/server/async-storage/draft-mode-provider";
import { ToDoListContext } from "@/context/ToDolistApp";
const Home = () => {
  const {checkIfWalletIsConnected} = useContext(ToDoListContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return <div>Home</div>;
};

export default Home;
