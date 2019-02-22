process.env.PORT = process.env.PORT || 4000

process.env.URL_MONGO = process.env.URL_MONGO || 'mongodb://admin:admin123@cluster0-shard-00-00-kcc1o.mongodb.net:27017,cluster0-shard-00-01-kcc1o.mongodb.net:27017,cluster0-shard-00-02-kcc1o.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

process.env.SECRET = process.env.SECRET || 'clave_secreta'

process.env.EXPIRE_TIME = process.env.EXPIRE_TIME || 60 * 60 * 24 * 30