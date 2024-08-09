declare module "react-fukidashi" {
  import * as React from "react";

  interface FukidashiProps {
    placement: "left" | "right" | "top" | "bottom";
    width: number;
    gap: number;
    delay: number;
    text: string;
    children?: React.ReactNode;
  }

  export const Fukidashi: React.FC<FukidashiProps>;
}
