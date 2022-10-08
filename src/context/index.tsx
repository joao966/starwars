import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPlanets } from "../services/getPlanets";
import { Result } from "../types/dataTypes";

type Props = {
  children: React.ReactNode;
};

type ResultPlanets = {
  data: Result[];
};

export const Context = createContext<ResultPlanets>({ data: [] });

export const Provider = ({ children }: Props) => {
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    const handlePlanets = async () => {
      const planets = await getPlanets();
      setData(planets);
    };

    handlePlanets();
  }, []);

  const INITIAL_VALUE: ResultPlanets = {
    data,
  };

  return <Context.Provider value={INITIAL_VALUE}>{children}</Context.Provider>;
};
