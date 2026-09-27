import { useEffect, useState } from "react";

const Grid = ({ index, handleClick, hasBg }) => {
    return (
        <div
            key={index}
            className={`grid-item ${hasBg ? "clicked" : ""}`}
            onClick={() => handleClick(index)}
        />
    )
}



const GridContainer = ({ size }) => {
    const gridItems = size * size;
    const [clickedItems, setClickedItems] = useState([])

    const handleClick = (index) => {
        setClickedItems([...clickedItems, index]);
    }

    useEffect(() => {
        if (clickedItems.length === gridItems) {
            clickedItems.forEach((item, index) => {
                setTimeout(() => {
                    setClickedItems(prev => prev.filter(i => i !== item));
                }, index * 1000)
            })
        }

    }, [clickedItems]);


    return (
        <div className="grid-container" >
            {
                Array.from({ length: gridItems }).map((_, index) => (

                    <Grid key={index} hasBg={clickedItems.includes(index)} index={index} handleClick={handleClick} />
                ))
            }
        </div>
    )
}

export default GridContainer