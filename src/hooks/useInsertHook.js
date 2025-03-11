const useInsertHook = () => {
  function insert(tree, folderId, name, isFolder) {
    if (folderId == tree.id) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return tree;
    }
    for (let i = 0; i < tree.items.length; i++) {
      const result = insert(tree.items[i], folderId, name, isFolder);
      if (result) {
        return tree; // Return the tree once the insertion is done
      }
    }
    return tree;
  }
  return { insert };
};

export default useInsertHook;
