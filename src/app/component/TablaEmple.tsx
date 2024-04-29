import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface VentasEmple {
  id: number;
  name: string;
  totalSales: string;
  Restaurant: {
    name: string;
  };
}

function decodeBase64UTF8(base64String: string) {
  const buff = Buffer.from(base64String, "latin1");
  return buff.toString("utf-8");
}

export const TablaEmple = (props: {
  id: number;
  selected: number;
  month: number;
}) => {
  const { id, selected, month } = props;

  const [stats, setStats] = useState<VentasEmple[]>([]);
  const [total, setTotal] = useState(0);
  const [maxporcent, setMaxPorcent] = useState(0);

  // var totacuelta = 0;
  useEffect(() => {
    axios
      .get("/api/salesbyemple/" + id + "/" + month)
      .then(function (response) {
        // console.log(response.data);
        setStats(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/api/totals/" + id + "/" + month)
      .then(function (response) {
        console.log(parseFloat(response.data._sum.quantity));
        setTotal(parseFloat(response.data._sum.quantity));
      })
      .catch(function (error) {
        console.log(error);
      });

    // if (stats.length != 0 && total != 0) {
    //   console.log()
    //   setMaxPorcent((parseFloat(stats[0]) * 100) / total);
    // }
  }, [selected, id, month]);
  return total !== 0 ? (
    <table className="table-fixed">
      <thead>
        <tr className="border-b-2 border-slate-300 h-12 text-xl italic">
          <th>Empleado</th>
          <th>Restaurante</th>
          <th>Total Vendido</th>
          <th>% Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat) => {
          // totacuelta += parseFloat(stat._sum.quantity);
          const porcent = ((parseFloat(stat.totalSales) * 100) / total).toFixed(
            3
          );

          return (
            <tr key={stat.id} className="border-b-2 border-slate-300 h-12 ">
              <td>{decodeBase64UTF8(stat.name)}</td>
              <td className="text-center">{stat.Restaurant.name}</td>
              <td className="text-right">
                {parseFloat(stat.totalSales).toFixed(2)} €
              </td>
              <td className="text-right">
                {" "}
                {((parseFloat(stat.totalSales) * 100) / total).toFixed(3)} %
              </td>
              <td className="text-right px-4">
                {" "}
                <ProgressBar
                  completed={(
                    (parseFloat(stat.totalSales) * 100) /
                    total
                  ).toFixed(2)}
                  maxCompleted={35}
                  labelSize="12px"
                  baseBgColor="#6b7280"
                  bgColor="#dc3545"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <></>
  );
};
