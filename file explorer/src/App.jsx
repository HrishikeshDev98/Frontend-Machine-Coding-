import FileExplorer from "./components/FileExplorer"
import fileFolderData from "./constants"

const App = () => {
  return (
    <div>
      <FileExplorer filesandfolders={fileFolderData} />
    </div>
  )
}

export default App