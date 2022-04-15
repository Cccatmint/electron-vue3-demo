
const arr = new Array(999).fill(0).map((item, index) => index)
const defaultFiles = arr.map(item => {
  return {
    id: item.toString(),
    title: `title ---------------------------- ${item}`,
    body: `## body of post ${item}`,
    createdAt: 1650003452234
  }
})
export { defaultFiles }
