import { useState } from 'react';
import { X, Play } from 'lucide-react';

interface VideoPreviewProps {
  onClose: () => void;
}

const VideoPreview = ({ onClose }: VideoPreviewProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      {/* Floating Video Preview */}
      {!isVideoOpen && (
        <div className="fixed bottom-6 right-6 z-[999999999] animate-in slide-in-from-bottom-5 duration-300">
          <div className="relative group">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 bg-slate-800 hover:bg-slate-700 rounded-full p-1.5 shadow-lg transition-colors z-10"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Video Preview Card with Blue Border */}
            <div 
              onClick={handleOpenVideo}
              className="rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 animate-pulse"
              style={{ 
                width: '280px',
                border: '2px solid #1F73ED',
                backgroundColor: '#0f172a'
              }}
            >
              <div className="shadow-2xl overflow-hidden rounded-2xl">
                {/* Title */}
                <div className="px-4 pt-4 pb-2 text-center">
                  <p className="text-lg font-medium text-white">Watch introvideo</p>
                </div>

                {/* Video Thumbnail */}
                <div className="relative aspect-video mx-4 mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Image%2010-21-25%20at%2010.46%E2%80%AFPM.jpg"
                  alt="Video preview"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/20 transition-colors">
                  <div className="bg-blue-500/50 rounded-full p-4 transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            {/* YouTube Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/M_9Hj6pIqtM?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPreview;

