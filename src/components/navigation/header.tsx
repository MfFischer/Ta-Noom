import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Search, MessageCircle, User } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { SearchModal } from '../search/search-modal';
import { ChatDrawer } from '../chat/chat-drawer';
import { MobileMenu } from './mobile-menu';
import { LanguageSwitcher } from '../language/language-switcher';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-gradient-to-r from-earth-50 to-moss-50 sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sprout className="h-8 w-8 text-moss-600" />
              </motion.div>
              <span className="text-xl font-bold text-earth-800">{t('common.appName')}</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {['discover', 'marketplace', 'community', 'learn'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={`/${item}`}
                  className="text-earth-700 hover:text-earth-900 transition-colors capitalize"
                >
                  {t(`common.navigation.${item}`)}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-earth-600 hover:text-earth-800 transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-6 w-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-earth-600 hover:text-earth-800 transition-colors"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
              <Button variant="primary">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </motion.div>
            <MobileMenu 
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};