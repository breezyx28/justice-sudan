import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Newspaper, Image, Search, Calendar, Eye, Download, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';

interface MediaPageProps {
  currentSubPage?: string;
}

export function MediaPage({ currentSubPage }: MediaPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const actualSubPage = location.pathname.split('/')[2] || currentSubPage || 'media';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: "إطلاق خدمات إلكترونية جديدة لتسهيل إجراءات التقاضي",
      category: "أخبار",
      date: "2024-01-20",
      summary: "أعلن المجلس القضائي عن إطلاق مجموعة جديدة من الخدمات الإلكترونية التي تهدف إلى تسهيل إجراءات التقاضي للمواطنين...",
      image: "https://images.unsplash.com/photo-1757939056741-6a3e18923193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBqdXN0aWNlJTIwbGF3JTIwc3ltYm9sfGVufDF8fHx8MTc1ODcwMTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 1250
    },
    {
      id: 2,
      title: "ورشة عمل حول تطوير الأداء القضائي",
      category: "فعاليات",
      date: "2024-01-15",
      summary: "نظم المجلس ورشة عمل متخصصة حول تطوير الأداء القضائي بمشاركة خبراء محليين ودوليين...",
      image: "https://images.unsplash.com/photo-1749671232689-2f937a2dbb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZSUyMGxlZ2FsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NzA5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 890
    },
    {
      id: 3,
      title: "توقيع اتفاقية تعاون مع الجامعات المحلية",
      category: "إعلانات",
      date: "2024-01-10",
      summary: "وقع المجلس القضائي اتفاقية تعاون مع عدة جامعات محلية لتطوير البرامج التعليمية في مجال القانون...",
      image: "https://images.unsplash.com/photo-1757939056741-6a3e18923193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBqdXN0aWNlJTIwbGF3JTIwc3ltYm9sfGVufDF8fHx8MTc1ODcwMTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 654
    },
    {
      id: 4,
      title: "بدء التسجيل في برنامج قضاة الغد",
      category: "أخبار",
      date: "2024-01-05",
      summary: "أعلن المجلس عن بدء التسجيل في الدورة الجديدة من برنامج قضاة الغد المخصص لتأهيل الكوادر القانونية الشابة...",
      image: "https://images.unsplash.com/photo-1749671232689-2f937a2dbb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZSUyMGxlZ2FsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NzA5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      views: 1456
    }
  ];

  const mediaGallery = [
    {
      id: 1,
      title: "حفل افتتاح المقر الجديد",
      type: "صور",
      date: "2024-01-18",
      count: 25,
      thumbnail: "https://images.unsplash.com/photo-1749671232689-2f937a2dbb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZSUyMGxlZ2FsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NzA5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "ورشة العمل القانونية",
      type: "فيديو",
      date: "2024-01-12",
      duration: "45 دقيقة",
      thumbnail: "https://images.unsplash.com/photo-1757939056741-6a3e18923193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBqdXN0aWNlJTIwbGF3JTIwc3ltYm9sfGVufDF8fHx8MTc1ODcwMTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "لقاء مع رئيس المجلس",
      type: "فيديو",
      date: "2024-01-08",
      duration: "20 دقيقة",
      thumbnail: "https://images.unsplash.com/photo-1749671232689-2f937a2dbb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZSUyMGxlZ2FsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NzA5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "جولة في المرافق الجديدة",
      type: "صور",
      date: "2024-01-03",
      count: 18,
      thumbnail: "https://images.unsplash.com/photo-1757939056741-6a3e18923193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBqdXN0aWNlJTIwbGF3JTIwc3ltYm9sfGVufDF8fHx8MTc1ODcwMTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.includes(searchTerm) || article.summary.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'أخبار', 'فعاليات', 'إعلانات'];

  if (actualSubPage === 'news') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/media')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى المركز الإعلامي
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">مركز الأخبار</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                placeholder="البحث في الأخبار..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-right flex-1"
              />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'all' ? 'الكل' : category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredNews.map((article) => (
                <Card key={article.id} className="border border-gray-200 overflow-hidden">
                  <div className="flex">
                    <div className="w-48 h-32 flex-shrink-0">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{article.summary}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Eye className="h-4 w-4" />
                          {article.views} مشاهدة
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">قراءة المزيد</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl" dir="rtl">
                            <DialogHeader>
                              <DialogTitle>{article.title}</DialogTitle>
                              <DialogDescription>{article.category} - {article.date}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <ImageWithFallback src={article.image} alt={article.title} className="w-full h-64 object-cover rounded" />
                              <p className="text-gray-700 leading-relaxed">{article.summary}</p>
                              <p className="text-gray-700 leading-relaxed">
                                هذا نص تفصيلي للخبر يحتوي على معلومات شاملة حول الموضوع. 
                                يمكن للقراء الاطلاع على التفاصيل الكاملة والاستفادة من المحتوى.
                              </p>
                              <Button onClick={() => toast.success('تم مشاركة الخبر')}>مشاركة الخبر</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'gallery') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/media')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى المركز الإعلامي
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">معرض الوسائط المتعددة</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaGallery.map((item) => (
                <Card key={item.id} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={item.type === 'صور' ? 'default' : 'secondary'}>
                        {item.type}
                      </Badge>
                    </div>
                    {item.type === 'فيديو' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                          <span className="text-black">▶</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{item.date}</span>
                      <span>
                        {item.count ? `${item.count} صورة` : item.duration}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            عرض
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl" dir="rtl">
                          <DialogHeader>
                            <DialogTitle>{item.title}</DialogTitle>
                            <DialogDescription>{item.type} - {item.date}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <ImageWithFallback src={item.thumbnail} alt={item.title} className="w-full h-96 object-cover rounded" />
                            <p className="text-gray-700">
                              {item.type === 'صور' ? `مجموعة من ${item.count} صورة من فعالية ${item.title}` : `فيديو بمدة ${item.duration} عن ${item.title}`}
                            </p>
                            <Button onClick={() => toast.success('تم حفظ العنصر في المفضلة')}>حفظ في المفضلة</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="outline" onClick={() => toast.success('بدء تحميل الملف...')}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-slate-900">المركز الإعلامي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخر الأخبار والفعاليات والمحتوى المرئي للمجلس القضائي
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* الأخبار */}
          <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">الأخبار</CardTitle>
              <CardDescription className="text-lg">
                اطلع على آخر المستجدات القضائية والإدارية
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/media/news')}
              >
                عرض الأخبار
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* معرض الصور والفيديو */}
          <Card className="border-2 border-slate-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">معرض الصور والفيديو</CardTitle>
              <CardDescription className="text-lg">
                أحداث وفعاليات المجلس في صور وفيديو
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => navigate('/media/gallery')}
              >
                تصفح المعرض
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}