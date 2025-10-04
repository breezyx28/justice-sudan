import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, Users, FileText, Shield, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1749671232689-2f937a2dbb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZSUyMGxlZ2FsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NzA5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="مبنى العدالة"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mb-6">
              أهلاً بكم في المجلس القضائي
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              نحن نسعى لتقديم العدالة والإنصاف من خلال خدمات قضائية متطورة وموثوقة
            </p>
            
            {/* كيف أبدأ Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl mb-4">كيف أبدأ؟</h2>
              <p className="text-gray-200 mb-6">
                ابدأ رحلتك معنا من خلال استكشاف خدماتنا الإلكترونية المتكاملة
              </p>
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/services')}
              >
                اكتشف المزيد
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-amber-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="bg-amber-800 px-3 py-1 rounded ml-4 text-sm">آخر الأخبار</span>
            <div className="overflow-hidden">
              <div className="animate-pulse">
                <span className="text-sm">
                  🔔 بدء التسجيل في برنامج قضاة الغد للعام الجديد • 
                  📋 تحديثات جديدة على نظام الاستعلام عن القضايا • 
                  ⚖️ اعتماد إجراءات إلكترونية جديدة لتسهيل الخدمات
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl mb-2">1,250+</h3>
                <p className="text-gray-600">قضية مكتملة</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl mb-2">850+</h3>
                <p className="text-gray-600">وثيقة معتمدة</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl mb-2">98%</h3>
                <p className="text-gray-600">معدل الرضا</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-slate-200 hover:border-amber-400 transition-colors">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl mb-2">24/7</h3>
                <p className="text-gray-600">خدمة متواصلة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">هل تحتاج لمساعدة؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            فريقنا المتخصص جاهز لمساعدتك في جميع الاستفسارات القانونية والإدارية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-slate-900"
              onClick={() => navigate('/contact')}
            >
              تواصل معنا
            </Button>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => navigate('/knowledge')}
            >
              دليل المعرفة
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}