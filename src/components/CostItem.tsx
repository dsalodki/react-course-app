import { FC } from "react";
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
    <div className="cost-item">
    <CostDate date={props.date} />
      <div className="cort-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default CostItem;