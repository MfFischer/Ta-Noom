import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  const menuItems = [
    { path: '/discover', label: t('common.navigation.discover') },
    { path: '/marketplace', label: t('common.navigation.marketplace') },
    { path: '/community', label: t('common.navigation.community') },
    { path: '/learn', label: t('common.navigation.learn') },
  ];

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-earth-600 hover:text-earth-800"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => (
                <div key={item.path} className="border-b border-gray-100">
                  <button
                    className="w-full py-3 px-4 flex justify-between items-center text-earth-700 hover:bg-earth-50 rounded-md"
                    onClick={() => setExpandedItem(expandedItem === item.path ? null : item.path)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === item.path ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedItem === item.path && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-earth-50"
                      >
                        <Link
                          to={item.path}
                          className="block py-2 px-8 text-sm text-earth-600 hover:text-earth-800"
                          onClick={onToggle}
                        >
                          Overview
                        </Link>
                        <Link
                          to={`${item.path}/featured`}
                          className="block py-2 px-8 text-sm text-earth-600 hover:text-earth-800"
                          onClick={onToggle}
                        >
                          Featured
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};