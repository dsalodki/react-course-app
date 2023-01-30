import { FC } from "react";
import { CostData } from "../Costs/CostItem";
import CostForm, { ICostFormData } from "./CostForm";
import "./NewCost.css";

export interface INewCostData {
  onAddCost: (cost: CostData) => void;
}

const NewCost: FC<INewCostData> = ({ onAddCost }: INewCostData) => {
  const saveCostDataHandler = (inputCostData: ICostFormData) => {
    const costData: CostData = new CostData(
      Math.random(),
      inputCostData.date,
      inputCostData.name,
      inputCostData.amount
    );

    // {
    //   description: inputCostData.name,
    //   amount: inputCostData.amount,
    //   date: inputCostData.date,
    //   id: Math.random(),
    // };

    onAddCost(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
