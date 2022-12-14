import { NodeDirectiveObject } from 'src/types';
declare const nodeDirectiveTypes: readonly ["textDirective", "leafDirective", "containerDirective"];
declare const supportedBlockLevelTags: readonly ["address", "article", "aside", "blockquote", "details", "summary", "div", "dl", "figcaption", "figure", "footer", "header", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "ul", "video", "audio", "hgroup", "table", "tfoot", "thead", "tbody"];
declare const supportedInlineLevelTags: readonly ["br", "button", "i", "img", "map", "iframe", "span"];
declare const supportedTableTags: readonly ["tr", "th", "td", "col", "caption", "colgroup"];
declare const supportedTextBasedTags: readonly ["cite", "code", "dfn", "em", "strong", "sub", "sup", "time", "var", "mark", "q", "small", "kbd", "samp", "a", "abbr", "bdo", "data", "h1", "h2", "h3", "h4", "h5", "h6", "dd", "dt"];
declare function checkIfNodeTypeIsAViableContainerDirective(node: NodeDirectiveObject): boolean;
declare function checkIfNodeTypeIsAViableLeafDirective(node: NodeDirectiveObject): boolean;
declare function checkIfNodeTypeIsAViableTextDirective(node: NodeDirectiveObject): boolean;
declare function throwErrorIfANodeIsNotAViableNode(node: NodeDirectiveObject): void;
export { supportedInlineLevelTags, supportedTextBasedTags, supportedTableTags, supportedBlockLevelTags, nodeDirectiveTypes, throwErrorIfANodeIsNotAViableNode, checkIfNodeTypeIsAViableContainerDirective, checkIfNodeTypeIsAViableTextDirective, checkIfNodeTypeIsAViableLeafDirective, };
