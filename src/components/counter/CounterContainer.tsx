import { useCounterStore } from "@/store/zustand/counterStore";

const CounterContainer = () => {
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

export default CounterContainer;
