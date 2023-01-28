import { FC } from "react";
import Card from "./Card";
import CostItem, { CostData } from "./CostItem";
import "./Costs.css"

export interface Costs{
    costs: Array<CostData>
}

const Costs: FC<Costs> = (props: Costs) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      ></CostItem>
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      ></CostItem>
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      ></CostItem>
    </Card>
  );
};

export default Costs;