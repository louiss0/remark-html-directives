import {
  checkIfNodeTypeIsAViableContainerDirective,
  checkIfNodeTypeIsAViableTextDirective,
  checkIfNodeTypeIsAViableLeafDirective,
  supportedInlineLevelTags,
  supportedTextBasedTags,
  supportedTableTags,
  supportedBlockLevelTags,
  throwErrorIfANodeIsNotAViableNode
} from '../src/utils';

import type { NodeDirectiveObject } from '../src/types';

const nodeDirectiveObject: NodeDirectiveObject = {
  type: 'containerDirective',
  name: 'div',
  children: [],
  attributes: {
    dataset: 'fpoo',
  },
};

function overrideNodeDirtectiveObjectProperties(
  newAttrs: Partial<NodeDirectiveObject>
): NodeDirectiveObject {
  return { ...nodeDirectiveObject, ...newAttrs };
}

describe('checkIfNodeTypeIsAViableContainerDirective function checks for the right conditions', () => {
  it('checkIfNodeTypeIsAViableContainerDirective returns true if the node meets the conditions required by it', () => {
    expect(
      checkIfNodeTypeIsAViableContainerDirective(nodeDirectiveObject)
    ).toBeDefined();

    expect(
      checkIfNodeTypeIsAViableContainerDirective(nodeDirectiveObject)
    ).toBeTruthy();
  });

  test('checkIfNodeTypeIsAViableContainerDirective does not accept inline tag names', () => {
    supportedInlineLevelTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableContainerDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'containerDirective',
            name: tag,
          })
        )
      ).toBeFalsy();
    });
  });

  test('checkIfNodeTypeIsAViableContainerDirective does not accept text tag names', () => {
    supportedTextBasedTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableContainerDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'containerDirective',
            name: tag,
          })
        )
      ).toBeFalsy();
    });
  });

  test("checkIfNodeTypeIsAViableContainerDirective  accept's table tag names", () => {
    supportedTableTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableContainerDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'containerDirective',
            name: tag,
          })
        )
      ).toBeTruthy();
    });
  });

  test("checkIfNodeTypeIsAViableContainerDirective  accept's block tag names", () => {
    supportedBlockLevelTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableContainerDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'containerDirective',
            name: tag,
          })
        )
      ).toBeTruthy();
    });
  });
});

describe('checkIfNodeTypeIsAViableLeafDirective function checks for the right tags', () => {
  test('checkIfNodeTypeIsAViableLeafDirective returns true if the node meets the conditions required by it', () => {
    expect(
      checkIfNodeTypeIsAViableLeafDirective(nodeDirectiveObject)
    ).toBeDefined();
    expect(
      checkIfNodeTypeIsAViableLeafDirective(
        overrideNodeDirtectiveObjectProperties({
          type: 'leafDirective',
          name: 'img',
        })
      )
    ).toBeTruthy();
  });

  test("checkIfNodeTypeIsAViableLeafDirective doesn't accept block tags ", () => {
    supportedBlockLevelTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableLeafDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'leafDirective',
            name: tag,
          })
        )
      ).toBeFalsy();
    });
  });

  test("checkIfNodeTypeIsAViableLeafDirective accept's text tags ", () => {
    supportedTextBasedTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableLeafDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'leafDirective',
            name: tag,
          })
        )
      ).toBeTruthy();
    });
  });

  test("checkIfNodeTypeIsAViableLeafDirective  accept's inline tags ", () => {
    supportedInlineLevelTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableLeafDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'leafDirective',
            name: tag,
          })
        )
      ).toBeTruthy();
    });
  });

  test("checkIfNodeTypeIsAViableLeafDirective  accept's table tags ", () => {
    supportedTableTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableLeafDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'leafDirective',
            name: tag,
          })
        )
      ).toBeTruthy();
    });
  });
});

describe('checkIfNodeTypeIsAViableTextDirective function checks for the right tags', () => {
  it('checkIfNodeTypeIsAViableTextDirective returns true if the node meets the conditions required by it', () => {
    expect(
      checkIfNodeTypeIsAViableTextDirective(
        overrideNodeDirtectiveObjectProperties({ type: 'textDirective' })
      )
    ).toBeDefined();
    expect(
      checkIfNodeTypeIsAViableTextDirective(
        overrideNodeDirtectiveObjectProperties({
          type: 'textDirective',
          name: 'abbr',
        })
      )
    ).toBeTruthy();
  });

  test("checkIfNodeTypeIsAViableTextDirective returns false if an inline tag is used as an argument", ()=> {

    supportedInlineLevelTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableTextDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'textDirective',
            name: tag,
          })
        )
      ).toBeFalsy();
    });
  })
  
  test("checkIfNodeTypeIsAViableTextDirective returns false if an block tag is used as an argument", ()=> {

    supportedBlockLevelTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableTextDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'textDirective',
            name: tag,
          })
        )
      ).toBeFalsy();
    });
  })
  
  test("checkIfNodeTypeIsAViableTextDirective returns false if an table tag is used as an argument", ()=> {
    supportedTableTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableTextDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'textDirective',
            name: tag,
          })
        )
      ).toBeFalsy();
    });
  })
  
  test("checkIfNodeTypeIsAViableTextDirective returns true if a text based tag is used as an argument", ()=> {

    supportedTextBasedTags.forEach((tag) => {
      expect(
        checkIfNodeTypeIsAViableTextDirective(
          overrideNodeDirtectiveObjectProperties({
            type: 'textDirective',
            name: tag,
          })
        )
      ).toBeTruthy();
    });
  })

});


describe("error thrower throws error when a tag is not viable", ()=>{

  test("an error is thrown when node is not the right one", ()=>{


    expect(()=> throwErrorIfANodeIsNotAViableNode({
      type: "foo",
      name: "ggoiyrave"
    })).toThrowError()
  })

})