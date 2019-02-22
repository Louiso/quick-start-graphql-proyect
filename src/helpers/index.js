const { PubSub } = require('apollo-server');
const shortid = require('shortid');
const fs = require('fs');

const pubsub = new PubSub();

const queries = [
  'save',
  'find',
  'findById',
  'findByIdAndUpdate',
  'findOne',
  'findOneAndUpdate',
  'updateMany',
  'updateOne'
]

const populateSchema = (schema, paths) => {
  queries.forEach((query)=>{
    schema.post(query, function (doc, next){
      if(paths.populate.forEach){
        let DOC = doc;
        paths.populate.forEach((obj)=>{
          DOC = DOC.populate(obj);
        });
        DOC.execPopulate()
          .then(next)
      }
      //doc.populate(ProductPopulate).execPopulate().then(()=> next())  
    });
  });
}
const storeFS = ({ stream , filename }) => {
  const id = shortid.generate();
  const path = `${UPLOAD_DIR}/${id}-${filename}`;
  return new Promise((resolve, reject)=>{
    stream.on('error', error => {
            if (stream.truncated)
              // Delete the truncated file.
              fs.unlinkSync(path)
            reject(error)
          })
          .pipe(fs.createWriteStream(path))
          .on('error', error => reject(error))
          .on('finish', () => resolve({ id, path }))
  });
}

module.exports.storeFS = storeFS;
module.exports.populateSchema = populateSchema;
module.exports.pubsub = pubsub;
