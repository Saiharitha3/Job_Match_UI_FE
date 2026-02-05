import { Link, useLocation } from 'react-router-dom';
import Icon, { IconName } from '../icons/Icon';

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const location = useLocation();

  const navItems: { path: string; label: string; icon: IconName }[] = [
    { path: '/jobs', label: 'Jobs', icon: 'jobs' },
    { path: '/mock-interview', label: 'AI Mock Interview', icon: 'aiMock' },
    { path: '/resume', label: 'Resume', icon: 'resume' },
    { path: '/profile', label: 'Profile', icon: 'profile' },
    { path: '/settings', label: 'Setting', icon: 'setting' },
    { path: '/subscription', label: 'Subscription', icon: 'subscription' },
    { path: '/credits', label: 'Extra Credits', icon: 'extraCredits' },
  ];

  const isActive = (path: string) => {
    if (path === '/jobs') {
      return location.pathname === '/' || location.pathname.startsWith('/jobs');
    }
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            J
          </div>
          <span className="text-xl font-bold text-gray-900">JobNova</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'bg-primary-50 text-primary-700 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon name={item.icon} className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Upgrade Card */}
      <div className="p-4">
        <div 
          className="rounded-3xl p-5 text-white shadow-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(196, 181, 253, 0.9), rgba(167, 139, 250, 0.95))'
          }}
        >
          <h3 className="text-lg font-semibold mb-2 leading-snug">Upgrade Your Plan</h3>
          <p className="text-sm text-white mb-4 leading-relaxed">Boost your success rate now!</p>
          <Link
            to="/subscription"
            onClick={onClose}
            className="block w-full bg-white text-gray-900 text-center py-3 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm h-12 flex items-center justify-center"
          >
            Subscription
          </Link>
        </div>
      </div>
    </div>
  );
}

