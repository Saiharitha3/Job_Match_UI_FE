export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

let toastListeners: ((toasts: Toast[]) => void)[] = [];
let toasts: Toast[] = [];

export const subscribeToToasts = (listener: (toasts: Toast[]) => void) => {
  toastListeners.push(listener);
  listener([...toasts]);
  
  return () => {
    toastListeners = toastListeners.filter(l => l !== listener);
  };
};

const notify = () => {
  toastListeners.forEach(listener => listener([...toasts]));
};

export const showToast = (message: string, type: Toast['type'] = 'success') => {
  const id = Math.random().toString(36).substr(2, 9);
  toasts.push({ id, message, type });
  notify();
  
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    notify();
  }, 3000);
};

