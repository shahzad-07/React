function Food(){

    const food1 = "Apple";
    const food2 = "Banana";

    return(
        <ul>
            <li>Orange</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;