var obj = {
  bjhdnue832: {
    createdAt: 11,
    completed: false,
    completedAt: undefined
  },
  slkeuoiorn: {
    createdAt: 21,
    completed: true,
    completedAt: 21
  }};
var arr = [];

Object.keys(obj).forEach((key) => {
  arr.push({
    id: key,
    ...obj[key]
  });
});

console.log(arr);
