function match(node) {
  return (
    node &&
    node.attributes !== undefined &&
    (node.attributes['v-if'] !== undefined ||
    node.attributes['v-html'] !== undefined ||
    node.attributes['v-model'] !== undefined ||
    node.attributes['v-for'] !== undefined)
  )
}

function transform({ node, parent }) {
  if(!match(node)) return;

  const attributes = node.attributes;
  const ref = parent ? parent.attributes.ref : attributes.source;

  if (ref) {
    if (attributes['v-if'] !== undefined && ref[attributes['v-if']] === false) {
      node.type = false;
      delete node.attributes;
      delete node.children;
      return;
    }

    if (attributes['v-html'] !== undefined && ref[attributes['v-html']]) {
      node.attributes.html = ref[attributes['v-html']]();
    }

    if (attributes['v-model'] !== undefined && ref[attributes['v-model']]) {
      node.attributes.bind = attributes['v-model'];
      if (!attributes.source) {
        node.attributes.source = ref;
      }
    }
  }

  if (attributes['v-for']) {
    const props = attributes['v-for'].split(' in ');
    const array = JSON.parse(props[1]);
    node.children = array.map(a => {
      const children = node.children.join('');
      let data = '';
      if (typeof a === 'object') {
        data = children
          .replace(props[0] + '.', '')
          .split('.')
          .reduce((prev, cur) => prev[cur], a);
      }

      return {
        ...node,
        children: [data || a]
      }
    });
    node.type = 'span';
  }

  delete node.attributes['v-if'];
  delete node.attributes['v-html'];
  delete node.attributes['v-model'];
  delete node.attributes['v-for'];
}

function load(_context) {
}

export default { transform, load, client: true, server: true };