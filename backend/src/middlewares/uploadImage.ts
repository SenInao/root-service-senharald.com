import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import v2 from "../config/cloudinary"
import path from "path";

function uploadMiddleware(folderName: String) {
  const storage = new CloudinaryStorage({
    cloudinary: v2,
    params: (req: Request, file) => {
      const folderPath = `${folderName.trim()}`; // Update the folder path here
      const fileExtension = path.extname(file.originalname).substring(1);
      const publicId = `${file.fieldname}-${Date.now()}`;
      
      return {
        folder: folderPath,
        public_id: publicId,
        format: fileExtension,
      };
    },
  });

  return multer({
    storage: storage,
    limits: {
      fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
    },
  });
}

export default uploadMiddleware;
