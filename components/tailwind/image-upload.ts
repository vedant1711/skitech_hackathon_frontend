import { createImageUpload } from "novel/plugins";
import { toast } from "sonner";
import { S3Client, PutObjectCommand, ObjectCannedACL } from "@aws-sdk/client-s3";

const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  throw new Error("AWS credentials are not defined");
}

const s3Client = new S3Client({
  // endpoint: process.env.NEXT_PUBLIC_AWS_ENDPOINT,
  forcePathStyle: false,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const onUpload = async (file: File) => {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    Key: file?.name || "image.png",
    Body: file,
    ContentType: file?.type || "application/octet-stream",
    ACL: ObjectCannedACL.public_read // to make file publicly readable
  };

  const command = new PutObjectCommand(params);

  try {
    const uploadResult = await s3Client.send(command);
    const url = `https://${params.Bucket}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${params.Key}`; // URL of the uploaded file

    // preload the image
    const image = new Image();
    image.src = url;
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });

    return url;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload file to S3");
  }
};


export const uploadFn = createImageUpload({
  onUpload,
  validateFn: (file) => {
    if (!file.type.includes("image/")) {
      toast.error("File type not supported.");
      return false;
    }
    if (file.size / 1024 / 1024 > 20) {
      toast.error("File size too big (max 20MB).");
      return false;
    }
    return true;
  },
});


