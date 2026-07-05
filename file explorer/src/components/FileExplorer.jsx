import { useState } from "react";

const FileExplorer = ({ filesandfolders }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="font-sans text-gray-700 select-none">
      {filesandfolders.map((item) => {
        const isFolder = item.type === "folder";

        return (
          <div key={item.id} className="my-1">
            <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors duration-150 cursor-pointer w-fit">
              <span className="text-xl leading-none">
                {isFolder ? "📁" : "📄"}
              </span>
              <span className={`${isFolder ? "font-medium text-gray-800" : "text-gray-600"} text-sm`}>
                {item.name}
              </span>
            </div>
            {isFolder && item.children && (
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