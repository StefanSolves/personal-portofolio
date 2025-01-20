// import { cn } from "@/lib/utils";
// import React from "react";

// export const Meteors = ({
//   number,
//   className,
// }: {
//   number?: number;
//   className?: string;
// }) => {
//   const meteors = new Array(number || 20).fill(true);
//   return (
//     <>
//       {meteors.map((el, idx) => (
//         <span
//           key={"meteor" + idx}
//           className={cn(
//             "animate-meteor-effect absolute top-1/2 left-1/2 rounded-full",
//             className
//           )}
//           style={{
//             left: Math.floor(Math.random() * (800 - -800) + -400) + "px",
//             animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
//             animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
//           }}
//         ></span>
//       ))}
//     </>
//   );
// };
