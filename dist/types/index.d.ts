import { supportedBlockLevelTags, nodeDirectiveTypes, supportedInlineLevelTags, supportedTableTags, supportedTextBasedTags } from "src/utils";
import { Node } from 'unist-util-visit';
declare type NodeDirectiveTypes = typeof nodeDirectiveTypes[number];
declare type BlockElementNames = typeof supportedBlockLevelTags[number];
declare type InlineElementNames = typeof supportedInlineLevelTags[number];
declare type TableTagNames = typeof supportedTableTags[number];
declare type TextTags = typeof supportedTextBasedTags[number];
declare type RareNodeTypes = "root" | "paragraph" | "listItem" | "thematicBreak" | "text";
interface NodeDirectiveObject extends Node {
    type: NodeDirectiveTypes | RareNodeTypes;
    children: Array<Node>;
    name: BlockElementNames | InlineElementNames | TableTagNames | TextTags;
    attributes: Record<string, string>;
}
export type { NodeDirectiveTypes, BlockElementNames, InlineElementNames, NodeDirectiveObject };
