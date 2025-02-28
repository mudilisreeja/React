import List1 from "./List1";

function App() {
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 105 },
        { id: 3, name: "Grapes", calories: 45 },
        { id: 4, name: "Orange", calories: 32 }
    ];

    const vegetables = [
        { id: 5, name: "Potato", calories: 110 },
        { id: 6, name: "Broccoli", calories: 155 },
        { id: 7, name: "Tomato", calories: 45 },
        { id: 8, name: "Cabbage", calories: 32 }
    ];

    return (
        <>
            {fruits.length > 0 && <List1 items={fruits} category="Fruits" />}
            {vegetables.length > 0 && <List1 items={vegetables} category="Vegetables" />}
        </>
    );
}

export default App;
