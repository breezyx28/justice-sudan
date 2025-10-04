import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BookOpen, HelpCircle, BarChart3, Search, Download, FileText, Users, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { toast } from 'sonner';

interface KnowledgePageProps {
  currentSubPage?: string;
}

export function KnowledgePage({ currentSubPage }: KnowledgePageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const actualSubPage = location.pathname.split('/')[2] || currentSubPage || 'knowledge';
  const [searchTerm, setSearchTerm] = useState('');

  const legalArticles = [
    {
      id: 1,
      title: "قانون الأحوال المدنية الجديد",
      category: "قوانين مدنية",
      summary: "التحديثات الجديدة على قانون الأحوال المدنية وتأثيرها على المواطنين",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "إجراءات التقاضي الإلكتروني",
      category: "إجراءات قضائية",
      summary: "دليل شامل لاستخدام الأنظمة الإلكترونية في التقاضي",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "حقوق المتهم في المحاكمة",
      category: "قوانين جنائية",
      summary: "الحقوق الأساسية للمتهم وضمانات المحاكمة العادلة",
      date: "2024-01-05"
    }
  ];

  const userGuides = [
    {
      title: "كيفية تقديم دعوى قضائية",
      description: "دليل خطوة بخطوة لتقديم الدعاوى القضائية",
      steps: ["تحضير المستندات المطلوبة", "ملء النموذج الإلكتروني", "دفع الرسوم", "متابعة حالة الطلب"]
    },
    {
      title: "استخدام نظام الاستعلام عن القضايا",
      description: "طريقة البحث عن القضايا ومتابعة تطوراتها",
      steps: ["إدخال رقم القضية", "التحقق من البيانات", "عرض تفاصيل القضية", "طباعة التقرير"]
    },
    {
      title: "خدمات التوثيق الإلكتروني",
      description: "كيفية الحصول على الوثائق المعتمدة إلكترونياً",
      steps: ["اختيار نوع الوثيقة", "ملء البيانات المطلوبة", "رفع المستندات", "استلام الوثيقة"]
    }
  ];

  const reports = [
    {
      title: "تقرير الأداء القضائي 2024",
      type: "PDF",
      size: "2.5 MB",
      description: "إحصائيات شاملة عن أداء المحاكم والقضايا المنجزة"
    },
    {
      title: "إحصائيات القضايا المدنية",
      type: "Excel",
      size: "1.8 MB",
      description: "بيانات تفصيلية عن القضايا المدنية حسب النوع والمنطقة"
    },
    {
      title: "تقرير الخدمات الإلكترونية",
      type: "PDF",
      size: "3.2 MB",
      description: "استخدام المواطنين للخدمات الإلكترونية ومعدلات الرضا"
    }
  ];

  const statistics = {
    totalCases: 15847,
    completedCases: 12654,
    pendingCases: 3193,
    satisfactionRate: 94
  };

  const filteredArticles = legalArticles.filter(article =>
    article.title.includes(searchTerm) || article.category.includes(searchTerm)
  );

  if (actualSubPage === 'encyclopedia') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/knowledge')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى دليل المعرفة
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">الموسوعة القضائية</h1>
            <p className="text-xl text-gray-600">مكتبة شاملة للقوانين والأحكام والمقالات القانونية</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex gap-4 mb-8">
              <Input
                placeholder="البحث في الموسوعة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 text-right"
              />
              <Button variant="outline">
                <Search className="h-4 w-4" />
                بحث
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2 text-blue-800">القوانين المدنية</h4>
                <p className="text-blue-600">125 مقال</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <FileText className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2 text-green-800">القوانين الجنائية</h4>
                <p className="text-green-600">89 مقال</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2 text-purple-800">الأحوال الشخصية</h4>
                <p className="text-purple-600">67 مقال</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl mb-4">أحدث المقالات</h3>
              {filteredArticles.map((article) => (
                <Card key={article.id} className="border border-gray-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{article.title}</h3>
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.summary}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm">قراءة المزيد</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl" dir="rtl">
                          <DialogHeader>
                            <DialogTitle>{article.title}</DialogTitle>
                            <DialogDescription>{article.category} - {article.date}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">{article.summary}</p>
                            <Button onClick={() => toast.success('تم حفظ المقال في المفضلة')}>حفظ في المفضلة</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
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

  if (actualSubPage === 'user-guide') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/knowledge')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى دليل المعرفة
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">دليل المستخدم</h1>
            <p className="text-xl text-gray-600">إرشادات مفصلة لاستخدام جميع الخدمات المتاحة</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            {userGuides.map((guide, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <CardDescription className="text-lg">{guide.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {guide.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-700 text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl mb-6">فيديوهات تعليمية</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-2xl">🎥 فيديو توضيحي</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">كيفية استخدام النظام الإلكتروني</h4>
                  <p className="text-gray-600">مدة الفيديو: 5 دقائق</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4">مشاهدة الفيديو</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl" dir="rtl">
                      <DialogHeader>
                        <DialogTitle>كيفية استخدام النظام الإلكتروني</DialogTitle>
                        <DialogDescription>فيديو تعليمي - مدة 5 دقائق</DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-500 text-2xl">🎥 سيتم تشغيل الفيديو هنا</span>
                      </div>
                      <Button onClick={() => toast.success('تم تسجيل المشاهدة')}>تم المشاهدة</Button>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-2xl">🎥 فيديو توضيحي</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">تقديم الطلبات إلكترونياً</h4>
                  <p className="text-gray-600">مدة الفيديو: 7 دقائق</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4">مشاهدة الفيديو</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl" dir="rtl">
                      <DialogHeader>
                        <DialogTitle>تقديم الطلبات إلكترونياً</DialogTitle>
                        <DialogDescription>فيديو تعليمي - مدة 7 دقائق</DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-500 text-2xl">🎥 سيتم تشغيل الفيديو هنا</span>
                      </div>
                      <Button onClick={() => toast.success('تم تسجيل المشاهدة')}>تم المشاهدة</Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'reports') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/knowledge')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى دليل المعرفة
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">التقارير والإحصائيات</h1>
            <p className="text-xl text-gray-600">بيانات شاملة عن أداء المجلس والخدمات المقدمة</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-blue-600">{statistics.totalCases.toLocaleString()}</h3>
                <p className="text-blue-700 font-semibold">إجمالي القضايا</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-green-600">{statistics.completedCases.toLocaleString()}</h3>
                <p className="text-green-700 font-semibold">قضايا مكتملة</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <BarChart3 className="h-12 w-12 text-amber-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-amber-600">{statistics.pendingCases.toLocaleString()}</h3>
                <p className="text-amber-700 font-semibold">قضايا معلقة</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-purple-600">{statistics.satisfactionRate}%</h3>
                <p className="text-purple-700 font-semibold">معدل الرضا</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">التقارير القابلة للتحميل</h3>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-purple-400 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <FileText className="h-8 w-8 text-gray-500" />
                          <div>
                            <h4 className="text-lg font-semibold">{report.title}</h4>
                            <p className="text-gray-600">{report.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">{report.type}</Badge>
                            <p className="text-sm text-gray-500">{report.size}</p>
                          </div>
                          <Button onClick={() => toast.success('بدء تحميل التقرير...')}>
                            <Download className="h-4 w-4 mr-2" />
                            تحميل
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl mb-6">الرسوم البيانية التفاعلية</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4">توزيع القضايا حسب النوع</h4>
                  <div className="h-64">
                    <ChartContainer config={{
                      civil: { label: 'مدنية', color: '#3b82f6' },
                      criminal: { label: 'جنائية', color: '#ef4444' },
                      personal: { label: 'أحوال شخصية', color: '#10b981' },
                      labor: { label: 'عمالية', color: '#f59e0b' }
                    }}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'مدنية', value: 45, fill: '#3b82f6' },
                            { name: 'جنائية', value: 25, fill: '#ef4444' },
                            { name: 'أحوال شخصية', value: 20, fill: '#10b981' },
                            { name: 'عمالية', value: 10, fill: '#f59e0b' }
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4">معدل إنجاز القضايا الشهري</h4>
                  <div className="h-64">
                    <ChartContainer config={{
                      cases: { label: 'القضايا', color: '#3b82f6' }
                    }}>
                      <LineChart data={[
                        { month: 'يناير', cases: 120 },
                        { month: 'فبراير', cases: 135 },
                        { month: 'مارس', cases: 148 },
                        { month: 'أبريل', cases: 162 },
                        { month: 'مايو', cases: 155 },
                        { month: 'يونيو', cases: 178 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="cases" stroke="#3b82f6" strokeWidth={3} />
                      </LineChart>
                    </ChartContainer>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4">مقارنة أداء المحاكم</h4>
                  <div className="h-64">
                    <ChartContainer config={{
                      completed: { label: 'مكتملة', color: '#10b981' },
                      pending: { label: 'معلقة', color: '#f59e0b' }
                    }}>
                      <BarChart data={[
                        { court: 'العليا', completed: 450, pending: 120 },
                        { court: 'المدنية', completed: 380, pending: 95 },
                        { court: 'الجنائية', completed: 320, pending: 85 },
                        { court: 'الأحوال', completed: 280, pending: 70 },
                        { court: 'العمالية', completed: 150, pending: 45 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="court" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="completed" fill="#10b981" name="مكتملة" />
                        <Bar dataKey="pending" fill="#f59e0b" name="معلقة" />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </div>
              </div>
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
          <h1 className="text-4xl mb-6 text-slate-900">دليل المعرفة</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مركز شامل للمعلومات القانونية والإرشادات والتقارير الإحصائية
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* الموسوعة القضائية */}
          <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">الموسوعة القضائية</CardTitle>
              <CardDescription className="text-lg">
                مرجع قانوني شامل للتشريعات والأحكام
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/knowledge/encyclopedia')}
              >
                تصفح الموسوعة
              </Button>
            </CardContent>
          </Card>

          {/* دليل المستخدم */}
          <Card className="border-2 border-slate-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">دليل المستخدم</CardTitle>
              <CardDescription className="text-lg">
                إرشادات للاستفادة المثلى من خدمات الموقع
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => navigate('/knowledge/user-guide')}
              >
                عرض الأدلة
              </Button>
            </CardContent>
          </Card>

          {/* التقارير والإحصائيات */}
          <Card className="border-2 border-slate-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">التقارير والإحصائيات</CardTitle>
              <CardDescription className="text-lg">
                بيانات دقيقة عن سير العمل القضائي
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => navigate('/knowledge/reports')}
              >
                عرض التقارير
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}