import { put } from "@vercel/blob";

export const uploadToBlob = async (filename: string, content: string | Buffer) => {
  try {
    const { url } = await put(filename, content, { access: 'public' });
    return url;
  } catch (error) {
    console.error('Error uploading to blob store:', error);
    throw error;
  }
};

export const uploadFileToBlob = async (file: File) => {
  try {
    const { url } = await put(file.name, file, { access: 'public' });
    return url;
  } catch (error) {
    console.error('Error uploading file to blob store:', error);
    throw error;
  }
};
