import { useState } from "react";
import { RiFileAddLine } from "react-icons/ri";
import { RiFolderAddLine } from "react-icons/ri";

const Folder = function ({ explorer, handleAddAction }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    isFolder: false,
    isVisible: false,
  });
  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
    console.log("test");
  };

  const handleInsertNode = (e, isFolder) => {
    e.stopPropagation();
    if (e.keyCode == 13 && e.target.value) {
      handleAddAction(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ isFolder: false, isVisible: false });
    }
  };

  const handleOnBlur = (e) => {
    e.stopPropagation();
    if (e.target.value) {
      handleAddAction(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ isFolder: false, isVisible: false });
    } else {
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  if (!explorer.isFolder) {
    return <div>📄 {explorer.name}</div>;
  } else {
    return (
      <>
        <div className="folder" onClick={handleExpand}>
          📁 {explorer.name}
          <div>
            <RiFileAddLine
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
                setShowInput({ isFolder: false, isVisible: true });
              }}
              className="action"
            />
            <RiFolderAddLine
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
                setShowInput({ isFolder: true, isVisible: true });
              }}
              className="action"
            />
          </div>
        </div>
        <div className="nestest-folder">
          {showInput.isVisible && (
            <>
              {showInput.isFolder ? <span> 📁 </span> : <span> 📄 </span>}
              <input
                type="text"
                autoFocus="true"
                onKeyDown={handleInsertNode}
                onBlur={handleOnBlur}
              />
            </>
          )}
          {isExpanded &&
            explorer.items.map((exp) => {
              return (
                <Folder
                  key={exp.id}
                  explorer={exp}
                  handleAddAction={handleAddAction}
                />
              );
            })}
        </div>
      </>
    );
  }
};

export default Folder;
