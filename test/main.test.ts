import {
  // checkIfNodeTypeIsAViableContainerDirective,  
  checkIfNodeTypeIsAViableTextDirective,
  checkIfNodeTypeIsAViableLeafDirective,
} from "../src/utils"

import type {
  NodeDirectiveObject, 
}from "../src/types"

const nodeDirectiveObject:NodeDirectiveObject =  {
  type: "containerDirective",
  name: "div",
  children: [],
  attributes: {
    dataset: "fpoo"
  }
}


function overrideNodeDirtectiveObjectProperties(newAttrs:Partial<NodeDirectiveObject>):NodeDirectiveObject{


  return {...nodeDirectiveObject, ...newAttrs}
}

// test('checkIfNodeTypeIsAViableContainerDirective returns true if the node meets the conditions required by it', () => {
    

//   expect(checkIfNodeTypeIsAViableContainerDirective(nodeDirectiveObject))
//   .toBeDefined()
  
  
//   expect(checkIfNodeTypeIsAViableContainerDirective(nodeDirectiveObject))
//   .toBe(true)



// });



test('checkIfNodeTypeIsAViableLeafDirective returns true if the node meets the conditions required by it', () => {
 

  expect(checkIfNodeTypeIsAViableLeafDirective(overrideNodeDirtectiveObjectProperties({type:"leafDirective"})))
  .toBeDefined()
  
  expect(checkIfNodeTypeIsAViableLeafDirective(overrideNodeDirtectiveObjectProperties({type:"leafDirective"})))
  .toBe(true)
  
});



test('checkIfNodeTypeIsAViableTextDirective returns true if the node meets the conditions required by it', () => {
  

  expect(checkIfNodeTypeIsAViableTextDirective(overrideNodeDirtectiveObjectProperties({type:"textDirective"})))
  .toBeDefined()
  expect(checkIfNodeTypeIsAViableTextDirective(overrideNodeDirtectiveObjectProperties({type:"textDirective"})))
  .toBe(true)
  
});