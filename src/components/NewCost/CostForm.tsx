import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import "./CostForm.css";

export interface ICostFormData {
  id: number;
  name: string;
  amount: number;
  date: Date;
}

export interface ICostFormProps {
  onSaveCostData: (inputCostData: ICostFormData) => void;
}

const CostForm: FC<ICostFormProps> = ({ onSaveCostData }: ICostFormProps) => {
  const [userInput, setUserInput] = useState<ICostFormData>({
    id: 0,
    name: "",
    amount: 0,
    date: new Date("2019-01-01"),
  });

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((previousState: ICostFormData) => {
      return {
        ...previousState,
        name: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((previousState: ICostFormData) => {
      return {
        ...previousState,
        amount: Number(e.target.value),
      };
    });
  };

  const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput((previousState: ICostFormData) => {
      return {
        ...previousState,
        date: new Date(e.target.value),
      };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSaveCostData(userInput);

    setUserInput({
      id: 0,
      name: "",
      amount: 0,
      date: new Date("2019-01-01"),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={userInput.name}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.date.toISOString().split('T')[0]}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить Расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
