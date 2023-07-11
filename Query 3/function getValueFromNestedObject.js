function getValueFromNestedObject(obj, key) 
{
  
  if (obj === null || obj === undefined) 
{
    return undefined;
  }
  
    if (key in obj) {
    return obj[key];
  }
  
    for (let prop in obj) {
    
    const value = getValueFromNestedObject(obj[prop], key);
    
    
    if (value !== undefined) {
      return value;
    }
  }
  
  
  return undefined;
}

const nestedObject = {
  key1: 'value1',
  key2: {
    key3: 'value3',
    key4: {
      key5: 'value5',
      key6: 'value6'
    }
  }
};

const key = 'key6';
const value = getValueFromNestedObject(nestedObject, key);
console.log(value); // Output: value6
