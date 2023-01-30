import { FC, ReactElement } from "react";
import CostItem, { CostData } from "./CostItem";
import "./CostList.css";

export interface ICostList {
  costs: CostData[];
}

const CostList: FC<ICostList> = ({ costs }: ICostList) => {
  if (costs.length === 0) {
    return <p>В этом году нет расходов</p>;
  }

  return (
    <ul className="cost-list">
      {costs.map((cost: CostData) => (
        <CostItem
          key={cost.id}
          id={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
