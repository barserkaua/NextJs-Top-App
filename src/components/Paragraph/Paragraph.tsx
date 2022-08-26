import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  children,
  size = "medium",
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.high]: size === "high",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
