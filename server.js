const newFolderName = function (folders) {
  let nextN = 2
  let newName = 'New Folder'
  while (folders.indexOf(newName) !== -1) {
    newName = `New Folder (${nextN})`
    nextN++
  }
  return newName
}

module.exports = { newFolderName }
