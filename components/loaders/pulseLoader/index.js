import { MoonLoader } from "react-spinners";
import styles from "./styles.module.scss";

export function PulseLoaderComp({ loading }) {
  return (
    <div className={styles.loader}>
      <MoonLoader color="#2f82ff" loading={loading} />
    </div>
  );
}
