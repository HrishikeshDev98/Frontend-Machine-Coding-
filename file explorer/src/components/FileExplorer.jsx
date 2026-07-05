import { useRef } from "react";
import { useState } from "react";

const FileExplorer = ({ filesandfolders }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [totalFilesAndFolders, setTotalFilesAndFolders] = useState(filesandfolders);
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef(null);

  const handleAddFile = (id) => {
    const name = inputRef.current.value.trim();

    if (!name) {
      alert("Please enter a valid file name.");
      return;
    }


    const foundFolder = totalFilesAndFolders.find((item) => item.id === id && item.type === "folder");

    if (!foundFolder) {
      alert("Folder not found.");
      return;
    }

    const newFileData = {
      id: crypto.randomUUID(),
      name: name,
      type: "file",
    }

    inputRef.current.value = "";

    setTotalFilesAndFolders((prevData) => {
      return prevData.map((item) => {
        if (item.id === id && item.type === "folder") {
          return {
            ...item,
            children: item.children ? [...item.children, newFileData] : [newFileData],
          };
        }
        else {
          return item;
        }
      })
    })

  }

  console.log("Total files and folders:", totalFilesAndFolders);

  return (
    <div className="font-sans text-gray-700 select-none">
      {totalFilesAndFolders.map((item) => {
        const isFolder = item.type === "folder";

        return (
          <div key={item.id} className="my-1">
            <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors duration-150 cursor-pointer w-fit" >
              <span className="text-xl leading-none" onClick={() => isFolder && setIsExpanded(!isExpanded)}>
                {isFolder ? "📁" : "📄"}
              </span>
              <span className={`${isFolder ? "font-medium text-gray-800 flex items-center gap-1" : "text-gray-600"} text-sm`}>
                {item.name}
                {isFolder && <div className="ml-2" onClick={() => { setShowInput(!showInput); }}>➕</div>}
              </span>
              {showInput && isFolder && (
                <div className="flex items-center gap-2 ml-2">
                  <input
                    type="text"
                    className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter folder name"
                    autoFocus
                    ref={inputRef}
                  />
                  <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors duration-150" onClick={() => handleAddFile(item.id)}>
                    Add
                  </button>
                </div>
              )}
            </div>
            {isExpanded && isFolder && item.children && (
              <div className="ml-6 pl-2 border-l border-gray-200">
                <FileExplorer filesandfolders={item.children} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FileExplorer;