import { FC, useState } from "react";
import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

export class CostData {
  id: number;
  date: Date;
  description: string;
  amount: number;

  constructor(id: number, date: Date, description: string, amount: number) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.amount = amount;
  }
}

const CostItem: FC<CostData> = (props: CostData) => {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription("New Text");
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить Описание</button>
    </Card>
  );
};

export default CostItem;
