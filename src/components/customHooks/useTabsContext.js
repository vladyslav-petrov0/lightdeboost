import { useContext } from "react";
import { TabsContext } from "../context/TabsContext";

export const useTabsContext = () => useContext(TabsContext);
