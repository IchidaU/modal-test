import { useCallback } from "react";
import { toaster } from "@/components/ui/toaster";

type Props = {
  title: string;
  type: "success" | "info" | "warning" | "error";
};

export const useMessage = () => {
  const showMessage = useCallback((props: Props) => {
    const { title, type } = props;
    toaster.create({
      title,
      type,
      placement: "bottom-end",
      duration: 2000,
      meta: { closable: true },
    });
  }, []);
  return { showMessage };
};
