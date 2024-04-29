import { Sale } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const SalesEmple = (props: { id: number }) => {
  const { id } = props;
  const decoder = new TextDecoder();
  const [sales, setSales] = useState();
  useEffect(() => {
    getNameEmployee(id);
  }, [id]);
  const getNameEmployee = (id: number) => {
    axios
      .get("/api/empleados/" + id)
      .then(function (response) {
        // console.log(response.data);
        setSales(response.data[0].name);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return <div>{sales}</div>;
};
