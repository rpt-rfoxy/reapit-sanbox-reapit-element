/**
 * Gobal override types to make the compiler happy
 */

declare module '*.jpg'

declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}