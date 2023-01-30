import { FC, useState } from "react";
import { CostData } from "../Costs/CostItem";
import CostForm, { ICostFormData } from "./CostForm";
import "./NewCost.css";

export interface INewCostData {
  onAddCost: (cost: CostData) => void;
}

const NewCost: FC<INewCostData> = ({ onAddCost }: INewCostData) => {

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const saveCostDataHandler = (inputCostData: ICostFormData) => {
    const costData: CostData = new CostData(
      Math.random(),
      inputCostData.date,
      inputCostData.name,
      inputCostData.amount
    );

    onAddCost(costData);
    setIsFormVisible(false);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>
      )}
      {isFormVisible &&
      <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>
      }
    </div>
  );
};

export default NewCost;
