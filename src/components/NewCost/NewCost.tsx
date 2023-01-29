import { FC } from 'react';
import { CostData } from '../Costs/CostItem';
import CostForm, { ICostFormData } from './CostForm';
import './NewCost.css';

export interface INewCostData {
    onAddCost: (cost: CostData) => void;
}

const NewCost: FC<INewCostData> = ({onAddCost}: INewCostData) => {
const saveCostDataHandler = (inputCostData: ICostFormData) => {
    const costData = {
    ...inputCostData,
    id: Math.random()
    }

    console.log(costData);
}

    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>);
};

export default NewCost;