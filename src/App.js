import Throtelling from "./component/Throtelling";
import React from "react";
import TestApi from "./component/TestApi";
import Api from "./component/Api";
import FilterInput from "./component/FilterInput";
import Form from "./component/Form";
import TableData from "./component/TableData";
import ThemeToggle from "./component/ThemeToggle";
import Debounce from "./component/Debounce";
import StopWatch from "./stopwatch/StopWatch";
import UsersTable from "./crudcomponent/UsersTable";
import { createBrowserRouter } from "react-router";
import Counter from "./component/Counter";
export default function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <UsersTable />,
    },
  ]);
  return (
    <>
      {/* <Counter /> */}
      {/* <StopWatch /> */}
      <UsersTable />
      {/* <Debounce /> */}
      {/* <TestApi /> */}
      {/* <FilterInput /> */}
      {/* <ThemeToggle /> */}
      {/* <Api /> */}
      {/* <TableData /> */}
      {/* <Form /> */}
      {/* <Throtelling /> */}
    </>
  );
}
