import { listItemStore } from "@/share/store/mobx/listItemStore";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";

const ListItemDetail = observer(() => {
  const store = listItemStore;

  const onClickBtn = () => {
    runInAction(() => {
      store.model?.setText(store.text);
    });
  };

  return (
    <div>
      <span>ListItemDetail page</span>
      <span>{store.model?.text}</span>
      <input value={store.text} onChange={store.setText} />
      <button onClick={onClickBtn}>버튼</button>
    </div>
  );
});

export default ListItemDetail;
