import { FC } from "react";
import "./Card.css"

export interface ICard{
    className: string;
    children?:
    | React.ReactNode
    | React.ReactNode[];
}

const Card: FC<ICard> = (props: ICard) => {
    const classes = "card " + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
        );
}

export default Card;