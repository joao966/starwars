import React, { useContext, useMemo, useState } from "react";
import { Context } from "../../context";
import { Result } from "../../types/dataTypes";

export const Table = () => {
  const { data } = useContext(Context);

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
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {!!data.length &&
            data
              .map((planets) => Object.values(planets))
              .map((item) => <td key={item}>{item}</td>)}
        </tr>
      </tbody>
    </table>
  );
};
