import { supportedBlockLevelTags, nodeDirectiveTypes, supportedInlineLevelTags } from "src/utils";

import {Node,} from 'unist-util-visit'

type NodeDirectiveTypes = typeof nodeDirectiveTypes[number];

type BlockElementNames = typeof supportedBlockLevelTags[number];

type InlineElementNames = typeof supportedInlineLevelTags[number];


type RareNodeTypes =  "root" | "paragraph" | "listItem" | "thematicBreak"| "text"

interface NodeDirectiveObject extends Node {
  type: NodeDirectiveTypes | RareNodeTypes
  children: Array<Node>
  name: BlockElementNames | InlineElementNames
  attributes: Record<string, string>
}


export type { NodeDirectiveTypes, BlockElementNames, InlineElementNames, NodeDirectiveObject };

