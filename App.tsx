import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { KnowledgePage } from './components/KnowledgePage';
import { MediaPage } from './components/MediaPage';
import { ContactPage } from './components/ContactPage';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1] || 'home';

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navigation currentPage={currentPage} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage currentSubPage="about" />} />
          <Route path="/about/about-info" element={<AboutPage />} />
          <Route path="/about/about-structure" element={<AboutPage />} />
          <Route path="/about/about-president" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage currentSubPage="services" />} />
          <Route path="/services/case-search" element={<ServicesPage />} />
          <Route path="/services/judicial-services" element={<ServicesPage />} />
          <Route path="/services/document-verification" element={<ServicesPage />} />
          <Route path="/services/family-services" element={<ServicesPage />} />
          <Route path="/knowledge" element={<KnowledgePage currentSubPage="knowledge" />} />
          <Route path="/knowledge/encyclopedia" element={<KnowledgePage />} />
          <Route path="/knowledge/user-guide" element={<KnowledgePage />} />
          <Route path="/knowledge/reports" element={<KnowledgePage />} />
          <Route path="/media" element={<MediaPage currentSubPage="media" />} />
          <Route path="/media/news" element={<MediaPage />} />
          <Route path="/media/gallery" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage currentSubPage="contact" />} />
          <Route path="/contact/contact-info" element={<ContactPage />} />
          <Route path="/contact/suggestions" element={<ContactPage />} />
          <Route path="/contact/judges-program" element={<ContactPage />} />
          <Route path="/contact/faq" element={<ContactPage />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4">المجلس القضائي</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                نسعى لتحقيق العدالة والإنصاف من خلال تقديم خدمات قضائية متطورة وموثوقة، 
                ونعمل على تطوير النظام القضائي ليواكب احتياجات المجتمع.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                    الخدمات الإلكترونية
                  </a>
                </li>
                <li>
                  <a href="/knowledge" className="text-gray-300 hover:text-white transition-colors">
                    دليل المعرفة
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                    عن المجلس
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg mb-4">معلومات الاتصال</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 +249-183-234-567</p>
                <p>📧 info@judicialcouncil.gov.sd</p>
                <p>📍 الخرطوم، جمهورية السودان</p>
                <p>🕒 الأحد - الخميس: 8:00 ص - 4:00 م</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 المجلس القضائي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
      
      <Toaster position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}