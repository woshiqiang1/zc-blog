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
    color: 'cyan',
  },
  {
    name: 'Vue2',
    fullName: 'Vue 2',
    color: 'whatsapp',
  },
  {
    name: 'Vue3',
    fullName: 'Vue3',
    color: 'whatsapp',
  },
  {
    name: 'CSS',
    fullName: 'CSS',
    color: 'pink',
  },
  {
    name: 'Draft',
    fullName: 'Draft',
    color: 'blackAlpha',
  }
]

export { tagList }
export type { TagItem }
