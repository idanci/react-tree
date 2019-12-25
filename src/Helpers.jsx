const FilterNodes = (data, id) => {
  var r = data.filter(function(node) {
    if (node.children) { node.children = FilterNodes(node.children, id) };
    return node.id != id
  })
  return r;
};

export default FilterNodes;
