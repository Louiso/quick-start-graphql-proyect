const mkdirp = require('mkdirp');
const shortid = require('shortid');
const fs = require('fs');

const UPLOAD_DIR = './uploads'

mkdirp.sync(UPLOAD_DIR);

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

const File = {
  Mutation: {
    singleUpload: async (parent, { file }, context , info ) => {
      const { filename, mimetype, encoding, createReadStream } = await file;
      const stream = createReadStream();
      const  { id, path } = await storeFS({ stream, filename });
      return {
        filename,
        mimetype,
        encoding
      }
    }
  }
}

module.exports = File;