import "./styles.css";
import explorer from "./data/folderData";
import { useState } from "react";
import Folder from "./components/Folder";
import useInsertHook from "./hooks/useInsertHook";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insert } = useInsertHook();
  const handleAddAction = (folderId, name, isFolder = false) => {
    const newTree = insert({ ...explorerData }, folderId, name, isFolder);
    setExplorerData(newTree);
  };
  return (
    <div className="explorer">
      <Folder explorer={explorerData} handleAddAction={handleAddAction} />
    </div>
  );
}
