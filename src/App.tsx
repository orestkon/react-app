import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "expense 1", amount: 10, category: "Utilities" },
    { id: 2, description: "expense 2", amount: 10, category: "Utilities" },
    { id: 3, description: "expense 3", amount: 10, category: "Utilities" },
    { id: 4, description: "expense 4", amount: 10, category: "Utilities" },
  ]);

  const onDelete = (id: number) => {
    setExpenses(
      expenses.filter((expense) => (expense.id === id ? null : expense))
    );
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
