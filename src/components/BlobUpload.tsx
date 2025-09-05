import { useState } from 'react';
import { uploadToBlob, uploadFileToBlob } from '../utils/blob';
import { Button } from './ui/button';

const BlobUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleTextUpload = async () => {
    setUploading(true);
    try {
      const url = await uploadToBlob('articles/blob.txt', 'Hello World!');
      setUploadedUrl(url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadFileToBlob(file);
      setUploadedUrl(url);
    } catch (error) {
      console.error('File upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-slate-900/50 border border-blue-500/20 rounded-xl">
      <h3 className="text-xl font-bold mb-4 text-white">Blob Store Upload</h3>
      
      <div className="space-y-4">
        <Button 
          onClick={handleTextUpload}
          disabled={uploading}
          className="hero-button"
        >
          {uploading ? 'Uploading...' : 'Upload Text Example'}
        </Button>

        <div>
          <input
            type="file"
            onChange={handleFileUpload}
            disabled={uploading}
            className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-blue-500"
          />
        </div>

        {uploadedUrl && (
          <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
            <p className="text-white/70 text-sm mb-2">Uploaded URL:</p>
            <a 
              href={uploadedUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 break-all"
            >
              {uploadedUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlobUpload;
