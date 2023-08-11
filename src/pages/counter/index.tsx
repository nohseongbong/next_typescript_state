import { useCounterStore } from "@/share/store/zustand/counterStore";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <span>Counter page</span>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
