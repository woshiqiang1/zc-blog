type TagItem = {
  name: string;
  fullName: string;
  color: string;
}

const tagList: TagItem[]= [
  {
    name: 'JS',
    fullName: 'JavaScript',
    color: 'yellow',
  },
  {
    name: 'React',
    fullName: 'React',
    color: 'blue',
  },
  {
    name: 'Vue2',
    fullName: 'Vue 2',
    color: 'green',
  },
  {
    name: 'Vue3',
    fullName: 'Vue3',
    color: 'green',
  },
  {
    name: 'CSS',
    fullName: 'CSS',
    color: 'pink',
  },
]

export { tagList }
export type { TagItem }
