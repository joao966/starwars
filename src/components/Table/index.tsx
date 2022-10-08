import React, { useContext, useMemo, useState } from "react";
import { Context } from "../../context";
import { Result } from "../../types/dataTypes";

export const Table = () => {
  const { data } = useContext(Context);
  console.log('data: ', data);

  const renderColumn = useMemo(() => {
    if (data.length) {
      return Object.keys(data[0]);
    }
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {renderColumn?.map((item) => (
            <th style={{rowGap: '25px'}} key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!!data.length && data.map((planets: any) => {
          return (
            <tr>
              {renderColumn?.map((cur: any) => (<td>{planets[cur]}</td>))}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
