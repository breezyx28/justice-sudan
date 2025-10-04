import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Info, BarChart3, User } from 'lucide-react';

interface AboutPageProps {
  currentSubPage?: string;
}

export function AboutPage({ currentSubPage }: AboutPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const actualSubPage = location.pathname.split('/')[2] || currentSubPage || 'about';

  if (actualSubPage === 'about-info') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/about')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى عن المجلس
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">نبذة تعريفية عن المجلس القضائي</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div>
              <h3 className="text-2xl mb-4 text-blue-600">الرؤية</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                أن نكون المرجع الأول في تقديم الخدمات القضائية المتميزة، ونحقق العدالة والشفافية في جميع أعمالنا، 
                ونساهم في بناء مجتمع عادل يسوده القانون والنظام، ونواكب التطورات التقنية الحديثة لتسهيل الوصول إلى العدالة.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-blue-600">الرسالة</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                نلتزم بتقديم خدمات قضائية عالية الجودة تتسم بالعدالة والشفافية والكفاءة، من خلال فريق متخصص ومؤهل، 
                واستخدام أحدث التقنيات والنظم الإلكترونية، وتطوير الإجراءات بما يضمن سرعة الإنجاز ودقة النتائج.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-blue-600">الأهداف</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>تحقيق العدالة الناجزة في جميع القضايا المعروضة</li>
                <li>تطوير الخدمات الإلكترونية لتسهيل إجراءات التقاضي</li>
                <li>رفع مستوى الشفافية والمساءلة في العمل القضائي</li>
                <li>تأهيل وتدريب الكوادر القضائية والإدارية</li>
                <li>تعزيز الثقة العامة في النظام القضائي</li>
                <li>مواكبة التطورات التقنية والقانونية الحديثة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'about-structure') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/about')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى عن المجلس
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">الهيكل التنظيمي للمجلس القضائي</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-12">
              <div className="bg-blue-600 text-white p-6 rounded-lg inline-block">
                <h3 className="text-2xl">رئيس المجلس القضائي</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="text-xl mb-4 text-blue-800">إدارة الشؤون القضائية</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• قسم القضايا المدنية</li>
                  <li>• قسم القضايا الجنائية</li>
                  <li>• قسم قضايا الأحوال الشخصية</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
                <h4 className="text-xl mb-4 text-amber-800">إدارة التقنية والمعلومات</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• قسم تطوير الأنظمة</li>
                  <li>• قسم الدعم الفني</li>
                  <li>• قسم أمن المعلومات</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h4 className="text-xl mb-4 text-gray-800">إدارة الموارد البشرية</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• قسم التوظيف والتطوير</li>
                  <li>• قسم التدريب والتأهيل</li>
                  <li>• قسم شؤون الموظفين</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h4 className="text-xl mb-4 text-slate-800">إدارة الشؤون المالية</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• قسم المحاسبة</li>
                  <li>• قسم المشتريات</li>
                  <li>• قسم الميزانية</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h4 className="text-xl mb-4 text-blue-800">إدارة العلاقات العامة</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• قسم الإعلام والنشر</li>
                  <li>• قسم التواصل المجتمعي</li>
                  <li>• قسم الفعاليات</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
                <h4 className="text-xl mb-4 text-amber-800">إدارة التطوير والجودة</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• قسم ضمان الجودة</li>
                  <li>• قسم التطوير المؤسسي</li>
                  <li>• قسم قياس الأداء</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'about-president') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/about')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى عن المجلس
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">السيرة الذاتية - د. عبد الرحمن محمد أحمد</h1>
            <p className="text-xl text-gray-600">رئيس المجلس القضائي السوداني</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl mb-6 text-amber-600">المؤهلات العلمية</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>• دكتوراه في القانون المدني - جامعة الخرطوم (2005)</li>
                <li>• ماجستير في القانون الجنائي - جامعة النيلين (2001)</li>
                <li>• بكالوريوس الحقوق - جامعة أم درمان الإسلامية (1998)</li>
                <li>• دبلوم عالي في القضاء الإداري (2003)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl mb-6 text-amber-600">المسيرة المهنية</h3>
              <div className="space-y-6">
                <div className="border-r-4 border-amber-400 pr-6">
                  <h4 className="text-xl mb-2">رئيس المجلس القضائي</h4>
                  <p className="text-gray-600 mb-3">2018 - حتى الآن</p>
                  <p className="text-gray-700 leading-relaxed">
                    يشرف على إدارة المجلس وتطوير الخدمات القضائية الإلكترونية
                  </p>
                </div>
                
                <div className="border-r-4 border-amber-400 pr-6">
                  <h4 className="text-xl mb-2">نائب رئيس المجلس</h4>
                  <p className="text-gray-600 mb-3">2015 - 2018</p>
                  <p className="text-gray-700 leading-relaxed">
                    المساهمة في وضع الخطط الاستراتيجية وتطوير العمل القضائي
                  </p>
                </div>
                
                <div className="border-r-4 border-amber-400 pr-6">
                  <h4 className="text-xl mb-2">قاضي أول بالمحكمة العليا</h4>
                  <p className="text-gray-600 mb-3">2010 - 2015</p>
                  <p className="text-gray-700 leading-relaxed">
                    النظر في القضايا الكبرى وإصدار الأحكام القضائية الهامة
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl mb-6 text-amber-600">الإنجازات والأوسمة</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>• وسام الاستحقاق القضائي من الدرجة الأولى (2020)</li>
                <li>• جائزة أفضل مبادرة في التطوير القضائي (2019)</li>
                <li>• تأليف 3 كتب في القانون المدني والجنائي</li>
                <li>• إنشاء أول نظام إلكتروني متكامل للخدمات القضائية</li>
                <li>• تدريب أكثر من 200 قاضٍ وموظف قضائي</li>
              </ul>
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
          <h1 className="text-4xl mb-6 text-slate-900">عن المجلس</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعرف على المجلس القضائي ورسالته في تحقيق العدالة والإنصاف
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">نبذة تعريفية</CardTitle>
              <CardDescription className="text-lg">
                تعرف على رسالة وأهداف المجلس القضائي
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/about/about-info')}
              >
                اقرأ المزيد
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl">الهيكل التنظيمي</CardTitle>
              <CardDescription className="text-lg">
                عرض شفاف لتوزيع الإدارات والأقسام
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700"
                onClick={() => navigate('/about/about-structure')}
              >
                عرض الهيكل
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-gray-600" />
              </div>
              <CardTitle className="text-2xl">السيرة الذاتية لرئيس المجلس</CardTitle>
              <CardDescription className="text-lg">
                نبذة عن الخبرات والمسيرة المهنية للرئيس
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-gray-600 hover:bg-gray-700"
                onClick={() => navigate('/about/about-president')}
              >
                عرض السيرة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}