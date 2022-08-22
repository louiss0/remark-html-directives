'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var unistUtilVisit = require('unist-util-visit');
var hastscript = require('hastscript');

const nodeDirectiveTypes = ['textDirective', 'leafDirective', 'containerDirective'];
const supportedBlockLevelTags = ['address', 'article', 'aside', 'blockquote', "details", "summary", 'div', 'dl', 'figcaption', 'figure', 'footer', 'header', 'hr', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'ul', 'video', 'audio', "hgroup", 'table', 'tfoot', 'tbody'];
const supportedInlineLevelTags = ['br', 'button', 'i', 'img', 'map', 'iframe', 'span'];
const supportedTableTags = ["tr", "th", "td"];
const supportedTextBasedTags = ['cite', 'code', 'dfn', 'em', 'strong', 'sub', 'sup', 'time', 'var', 'mark', 'q', 'small', 'kbd', 'samp', 'a', 'abbr', 'bdo', "data", "h1", "h2", "h3", "h4", "h5", "h6", 'dd', 'dt'];

function checkIfNodeTypeIsAViableContainerDirective(node) {
  return [node.type === "containerDirective" && supportedBlockLevelTags.includes(node.name), node.type === "containerDirective" && supportedTableTags.includes(node.name)].some(value => value);
}

function checkIfNodeTypeIsAViableLeafDirective(node) {
  return [node.type === "leafDirective" && supportedInlineLevelTags.includes(node.name), node.type === "leafDirective" && supportedTextBasedTags.includes(node.name), node.type === "leafDirective" && supportedTableTags.includes(node.name)].some(value => value);
}

function checkIfNodeTypeIsAViableTextDirective(node) {
  return node.type === "textDirective" && supportedTextBasedTags.includes(node.name);
}

function throwErrorIfANodeIsNotAViableNode(node) {
  const directiveIsViable = [checkIfNodeTypeIsAViableContainerDirective(node), checkIfNodeTypeIsAViableLeafDirective(node), checkIfNodeTypeIsAViableTextDirective(node)].some(value => value);

  if (!directiveIsViable) {
    throw Error(`

    A container directive must be written using these tag names 
    ${supportedBlockLevelTags.join(' , ')}${supportedTableTags.join(' , ')}.
    
    Remenmber to use ::: a name then put ::: at the bottom for them  

    A leaf directive must use these tag names 
    ${supportedInlineLevelTags.join(',')}${supportedTextBasedTags.join(' , ')}${supportedTableTags.join(' , ')}

    Remember to use :: for them 

    A text based directive must contain these tags ${supportedTextBasedTags.join(' , ')}
    
    Remember to use : for them 

  `);
  }
}

// attributes: 
function HTMLDirectives() {
  return tree => {
    unistUtilVisit.visit(tree, node => {
      const nodeDirectiveObject = node;
      const nodeTypeIsAnyOfTheseDirectives = nodeDirectiveTypes.includes(node.type);
      if (!nodeTypeIsAnyOfTheseDirectives) return;
      throwErrorIfANodeIsNotAViableNode(nodeDirectiveObject);
      const data = nodeDirectiveObject.data || (nodeDirectiveObject.data = {});
      const hast = hastscript.h(nodeDirectiveObject.name, nodeDirectiveObject.attributes);
      data.hName = hast.tagName;
      data.hProperties = hast.properties;
    });
  };
}

exports["default"] = HTMLDirectives;
