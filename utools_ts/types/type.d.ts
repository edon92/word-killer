
// declare global {
//   interface Window { MyNamespace: any; }
// }

interface Learn {
  level?: number
  done?: boolean
  learnDate: Date
}

interface WebItem {
  value: string[]
  key: string
}

interface YoudaoBasic {
  exam_type: '初中' | '高中' | 'CET4' | 'CET6' | '考研' | 'SAT'
  ['uk-phonetic']: string
  ['us-phonetic']: string
  ['uk-speech']: string
  explains?: string[]
  ['us-speech']: string
  isWord: boolean
  speakUrl: string
  phonetic: string
}

interface Youdao {
  returnPhrase: string[]
  query: string
  errorCode: number
  l: string
  tSpeakUrl: string
  web: WebItem[]
  requestId: string
  translation: string[]
  dict: string
  webdict: string
  basic: YoudaoBasic
}

interface Word {
  text: string
  textExts: Array<any>
  translation: string
  ctime: string
  learn: Learn
  youdao: Youdao
}

type MyDbDoc = {
  _id: string
  _rev?: string
  list: Word[]
}

interface AllTypeList {
  allWords: Word[]
  needLearnWords: Word[]
  doneList: Word[]
}