import styles from "@/styles/index.module.css";
import { SignupForm } from "@/components";

export default function Signup() {
  return (
    <div className={styles.container}>
      <SignupForm />
    </div>
  );
}
