import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Scale } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'الصفحة الرئيسية' },
    { id: 'about', label: 'عن المجلس' },
    { id: 'services', label: 'الخدمات الإلكترونية' },
    { id: 'knowledge', label: 'دليل المعرفة' },
    { id: 'media', label: 'المركز الإعلامي' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3">
            <Scale className="h-8 w-8 text-amber-400" />
            <div>
              <h1 className="text-xl font-bold">المجلس القضائي</h1>
              <p className="text-xs text-gray-300">العدالة والإنصاف</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-reverse space-x-4">
              {navigationItems.map((item) => (
                <Link key={item.id} to={item.id === 'home' ? '/' : `/${item.id}`}>
                  <Button
                    variant={currentPage === item.id ? "secondary" : "ghost"}
                    className="text-white hover:text-white hover:bg-slate-700"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white hover:bg-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.id} to={item.id === 'home' ? '/' : `/${item.id}`}>
                  <Button
                    variant={currentPage === item.id ? "secondary" : "ghost"}
                    className="w-full text-right justify-start text-white hover:text-white hover:bg-slate-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}