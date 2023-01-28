import { FC } from "react";
import Card from "./Card";
import CostDate from "./CostDate";
import "./CostItem.css";

export class CostData {
  date: Date;
  description: string;
  amount: number;

  constructor(date: Date, description: string, amount: number) {
    this.date = date;
    this.description = description;
    this.amount = amount;
  }
}

const CostItem: FC<CostData> = (props: CostData) => {
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default CostItem;
