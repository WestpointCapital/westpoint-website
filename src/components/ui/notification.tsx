import { useEffect, useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Notification = ({ message, type, isVisible, onClose }: NotificationProps) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border max-w-sm ${
          type === 'success'
            ? 'bg-green-500/90 border-green-400 text-white'
            : 'bg-red-500/90 border-red-400 text-white'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 flex-shrink-0" />
        )}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Notification;
