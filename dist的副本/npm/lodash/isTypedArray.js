var baseIsTypedArray=require("./_baseIsTypedArray.js"),baseUnary=require("./_baseUnary.js"),nodeUtil=require("./_nodeUtil.js"),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;