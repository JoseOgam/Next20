"use client";
// import { CustomBtn } from "@/components";
// import { useState } from "react";

import { Quotes } from "@/components";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Quotes />
      </Provider>
    </div>
  );
}

// export default function Home() {
//   const [counter, setCounter] = useState(0);
//   const handleAddCounter = () => {
//     setCounter(() => counter + 1);
//   };
//   const handleResetCounter = () => {
//     setCounter(0);
//   };
//   const handleSubtractCounter = () => {
//     setCounter(() => counter - 1);
//   };

//   return (
//     <main className="">
//       <div className="flex h-screen items-center justify-center font-extrabold text-8xl">
//         {counter}
//       </div>
//       <div className="flex flex-col md:flex-row md:items-center gap-4 items-center justify-between pt-5 pb-10 px-10 ">
//         <CustomBtn
//           title="Add"
//           handleClick={handleAddCounter}
//           btnStyle="addBtn"
//         />
//         <CustomBtn
//           title="Reset"
//           handleClick={handleResetCounter}
//           btnStyle="resetBtn"
//         />
//         <CustomBtn
//           title="Subtract"
//           handleClick={handleSubtractCounter}
//           btnStyle="subtractBtn"
//         />
//       </div>
//     </main>
//   );
// }
