import React from "react";
import styles from "../stylesheets/Tile.module.css";

interface Props {
    testId: string;
    children?: any;
    title: string;
}

const Tile = ({ testId, children, title }: Props) => {
    return (
        <div data-testid={testId} className={styles.tile}>
        <h3> {title} </h3>
            {children}
        </div>
    )

}

export default Tile;