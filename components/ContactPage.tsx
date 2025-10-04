import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, MessageSquare, Users, HelpCircle, Mail, MapPin, Clock, Building } from 'lucide-react';
import { toast } from 'sonner';

interface ContactPageProps {
  currentSubPage?: string;
}

export function ContactPage({ currentSubPage }: ContactPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const actualSubPage = location.pathname.split('/')[2] || currentSubPage || 'contact';
  
  const [suggestionForm, setSuggestionForm] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const [judgesProgramForm, setJudgesProgramForm] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  });

  const faqItems = [
    {
      question: "كيف يمكنني الاستعلام عن قضية؟",
      answer: "يمكنك الاستعلام عن قضيتك من خلال صفحة الخدمات الإلكترونية باستخدام رقم القضية أو رقم الهوية."
    },
    {
      question: "ما هي الوثائق المطلوبة لتقديم دعوى؟",
      answer: "تختلف الوثائق حسب نوع الدعوى، ولكن عموماً تشمل: الهوية الشخصية، وثائق تثبت الحق المدعى به، وأي مستندات داعمة أخرى."
    },
    {
      question: "كم تستغرق معالجة الطلبات الإلكترونية؟",
      answer: "عادة ما تتم معالجة الطلبات خلال 3-5 أيام عمل، وقد تختلف المدة حسب نوع الطلب وتعقيده."
    },
    {
      question: "هل يمكنني تأجيل موعد الجلسة؟",
      answer: "نعم، يمكنك تقديم طلب تأجيل من خلال الخدمات الإلكترونية قبل موعد الجلسة بمدة كافية ولأسباب مقبولة."
    },
    {
      question: "كيف أحصل على نسخة معتمدة من الحكم؟",
      answer: "يمكنك طلب نسخة معتمدة من الحكم إلكترونياً أو بزيارة المحكمة المختصة مع إحضار الوثائق المطلوبة."
    }
  ];

  if (actualSubPage === 'contact-info') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى تواصل معنا
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">بيانات الاتصال الكاملة</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl mb-4 text-blue-800">معلومات الاتصال</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">الهاتف الرئيسي:</p>
                      <p>+249-183-234-567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">الفاكس:</p>
                      <p>+249-183-234-568</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">البريد الإلكتروني:</p>
                      <p>info@judicialcouncil.gov.sd</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl mb-4 text-green-800">العنوان وأوقات العمل</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">العنوان:</p>
                      <p>الخرطوم، جمهورية السودان، ص.ب 11111</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-semibold">أوقات العمل:</p>
                      <p>الأحد - الخميس: 8:00 ص - 4:00 م</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">أرقام الإدارات المتخصصة</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">الشؤون القضائية</h4>
                  <p>+249-183-234-570 - تحويلة: 101</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">خدمة المواطنين</h4>
                  <p>+249-183-234-571 - تحويلة: 102</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">التقنية والمعلومات</h4>
                  <p>+249-183-234-572 - تحويلة: 103</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">الموارد البشرية</h4>
                  <p>+249-183-234-573 - تحويلة: 104</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'suggestions') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى تواصل معنا
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">نموذج الاقتراحات والملاحظات</h1>
            <p className="text-xl text-gray-600">آراؤكم مهمة لنا في تطوير خدماتنا</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={(e) => {
              e.preventDefault();
              toast.success('تم إرسال اقتراحكم بنجاح. سيتم الرد خلال 48 ساعة.');
              setSuggestionForm({ name: '', email: '', category: '', message: '' });
            }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    required
                    value={suggestionForm.name}
                    onChange={(e) => setSuggestionForm({...suggestionForm, name: e.target.value})}
                    className="text-right"
                  />
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={suggestionForm.email}
                    onChange={(e) => setSuggestionForm({...suggestionForm, email: e.target.value})}
                    className="text-right"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="category">نوع الاقتراح</Label>
                <Select value={suggestionForm.category} onValueChange={(value) => setSuggestionForm({...suggestionForm, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الاقتراح" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">تحسين الخدمات</SelectItem>
                    <SelectItem value="website">تطوير الموقع</SelectItem>
                    <SelectItem value="process">تسهيل الإجراءات</SelectItem>
                    <SelectItem value="complaint">شكوى</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">الرسالة *</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="اكتب اقتراحك أو ملاحظتك هنا..."
                  value={suggestionForm.message}
                  onChange={(e) => setSuggestionForm({...suggestionForm, message: e.target.value})}
                  className="text-right"
                />
              </div>
              
              <Button type="submit" className="w-full">
                إرسال الاقتراح
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'faq') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى تواصل معنا
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">الأسئلة الشائعة</h1>
            <p className="text-xl text-gray-600">إجابات شاملة للاستفسارات الأكثر شيوعاً</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-700">{item.question}</h4>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-3">لم تجد إجابة لسؤالك؟</h3>
              <p className="text-gray-700 mb-4">
                يمكنك التواصل معنا مباشرة وسيقوم فريقنا المتخصص بالرد عليك في أقرب وقت
              </p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" onClick={() => navigate('/contact/contact-info')}>
                  <Phone className="h-4 w-4 mr-2" />
                  اتصل بنا
                </Button>
                <Button size="sm" variant="outline" onClick={() => navigate('/contact/suggestions')}>
                  <Mail className="h-4 w-4 mr-2" />
                  راسلنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === 'judges-program') {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى تواصل معنا
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">برنامج قضاة الغد</h1>
            <p className="text-xl text-gray-600">برنامج تأهيلي شامل للكوادر القانونية الشابة</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl mb-4 text-amber-800">حول البرنامج</h3>
              <div className="space-y-3">
                <p><strong>الهدف:</strong> إعداد جيل جديد من القضاة المؤهلين وفقاً لأحدث المعايير</p>
                <p><strong>المدة:</strong> 12 شهراً (6 شهور تدريب نظري + 6 شهور تدريب عملي)</p>
                <p><strong>المتطلبات:</strong> شهادة بكالوريوس في الحقوق بتقدير ممتاز، خبرة لا تقل عن سنتين</p>
                <p><strong>المزايا:</strong> راتب شهري، شهادة معتمدة، فرص عمل مضمونة</p>
              </div>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              toast.success('تم تسجيل طلبكم بنجاح. سيتم التواصل معكم قريباً.');
              setJudgesProgramForm({ name: '', email: '', phone: '', education: '', experience: '', motivation: '' });
            }} className="space-y-6">
              <h3 className="text-xl font-semibold">نموذج التسجيل</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="judgeName">الاسم الكامل *</Label>
                  <Input
                    id="judgeName"
                    required
                    value={judgesProgramForm.name}
                    onChange={(e) => setJudgesProgramForm({...judgesProgramForm, name: e.target.value})}
                    className="text-right"
                  />
                </div>
                <div>
                  <Label htmlFor="judgeEmail">البريد الإلكتروني *</Label>
                  <Input
                    id="judgeEmail"
                    type="email"
                    required
                    value={judgesProgramForm.email}
                    onChange={(e) => setJudgesProgramForm({...judgesProgramForm, email: e.target.value})}
                    className="text-right"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="judgePhone">رقم الهاتف *</Label>
                <Input
                  id="judgePhone"
                  required
                  value={judgesProgramForm.phone}
                  onChange={(e) => setJudgesProgramForm({...judgesProgramForm, phone: e.target.value})}
                  className="text-right"
                />
              </div>
              
              <div>
                <Label htmlFor="education">المؤهل العلمي *</Label>
                <Textarea
                  id="education"
                  required
                  rows={3}
                  placeholder="اذكر تفاصيل مؤهلاتك العلمية..."
                  value={judgesProgramForm.education}
                  onChange={(e) => setJudgesProgramForm({...judgesProgramForm, education: e.target.value})}
                  className="text-right"
                />
              </div>
              
              <div>
                <Label htmlFor="experience">الخبرة العملية</Label>
                <Textarea
                  id="experience"
                  rows={3}
                  placeholder="اذكر خبراتك العملية في المجال القانوني..."
                  value={judgesProgramForm.experience}
                  onChange={(e) => setJudgesProgramForm({...judgesProgramForm, experience: e.target.value})}
                  className="text-right"
                />
              </div>
              
              <div>
                <Label htmlFor="motivation">دافع الانضمام *</Label>
                <Textarea
                  id="motivation"
                  required
                  rows={4}
                  placeholder="لماذا تريد الانضمام لبرنامج قضاة الغد؟"
                  value={judgesProgramForm.motivation}
                  onChange={(e) => setJudgesProgramForm({...judgesProgramForm, motivation: e.target.value})}
                  className="text-right"
                />
              </div>
              
              <Button type="submit" className="w-full">
                تسجيل في البرنامج
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 text-slate-900">تواصل معنا</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لخدمتكم ومساعدتكم في جميع الاستفسارات والطلبات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* بيانات الاتصال */}
          <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">بيانات الاتصال</CardTitle>
              <CardDescription className="text-lg">
                أرقام الهواتف والعناوين الرسمية للمجلس
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/contact/contact-info')}
              >
                عرض بيانات الاتصال
              </Button>
            </CardContent>
          </Card>

          {/* الاقتراحات والملاحظات */}
          <Card className="border-2 border-slate-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">الاقتراحات والملاحظات</CardTitle>
              <CardDescription className="text-lg">
                شاركنا آراءك لتحسين جودة الخدمات
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => navigate('/contact/suggestions')}
              >
                إرسال اقتراح
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* برنامج قضاة الغد */}
          <Card className="border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl">برنامج قضاة الغد</CardTitle>
              <CardDescription className="text-lg">
                مبادرة لتأهيل وتدريب الكوادر القانونية الشابة
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700"
                onClick={() => navigate('/contact/judges-program')}
              >
                التسجيل في البرنامج
              </Button>
            </CardContent>
          </Card>

          {/* الأسئلة الشائعة */}
          <Card className="border-2 border-slate-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">الأسئلة الشائعة</CardTitle>
              <CardDescription className="text-lg">
                أجوبة لأكثر استفسارات المستخدمين شيوعاً
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => navigate('/contact/faq')}
              >
                عرض الأسئلة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}