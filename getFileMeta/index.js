function getFileMeta(file) {
    return {
      name: file.originalname,
      type: file.mimetype,
      size: file.size
    }
  }
  
  module.exports = getFileMeta