import multer from "multer";

/**
 * Store uploaded files temporarily.
 */
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

export default upload;