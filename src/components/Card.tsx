import { FC } from "react";
import "./Card.css"

export interface Card{
    className: string;
    children?:
    | React.ReactNode
    | React.ReactNode[];
}

const Card: FC<Card> = (props: Card) => {
    const classes = "card " + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
        );
}

export default Card;