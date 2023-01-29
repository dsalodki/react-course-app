import { FC, useState } from "react";
import Card from "../UI/Card";
import CostItem, { CostData } from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

export interface ICosts {
  costs: Array<CostData>;
}

const Costs: FC<ICosts> = (props: ICosts) => {
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const yearChangeHandler = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostItem
          id={props.costs[0].id}
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        ></CostItem>
        <CostItem
          id={props.costs[1].id}
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        ></CostItem>
        <CostItem
          id={props.costs[2].id}
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        ></CostItem>
      </Card>
    </div>
  );
};

export default Costs;
