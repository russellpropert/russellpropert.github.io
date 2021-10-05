import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import lodash from 'lodash'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// init the data store
// ---------------------------
db.data = db.data || { posts: [] }

// add post
// ----------------------------
// db.data.posts.push({id: 1, title: 'test1', publish: true})
// db.data.posts.push({id: 2, title: 'test2', publish: true})
// db.data.posts.push({id: 3, title: 'test3', publish: false})
// db.data.posts.push({id: 4, title: 'test4', publish: true})

// await db.write()

// read
// ----------------------------
console.log(db.data.posts);

// count posts
// ----------------------------
console.log(
  db.data.posts.length
);

// find all posts ids
// ----------------------------
console.log(
  db.data.posts.map(data => data.id)
);

// all matches of published false
// ----------------------------
db.chain = lodash.chain(db.data);
console.log(
  db.chain.get('posts').filter(data => data.publish === false).value()
);
// find post with published false
// ----------------------------

