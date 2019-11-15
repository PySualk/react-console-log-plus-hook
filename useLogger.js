import clp from "console-log-plus";

export default function useLogger() {
  const logger = {
    clp: clpAttributes => clp(clpAttributes)
  };
  return logger;
}
