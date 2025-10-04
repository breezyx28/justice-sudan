import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import {
  Search,
  Scale,
  FileCheck,
  Users,
  ArrowRight,
  HelpCircle,
  CheckCircle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { toast } from "sonner";

interface ServicesPageProps {
  currentSubPage?: string;
}

export function ServicesPage({ currentSubPage }: ServicesPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const actualSubPage =
    location.pathname.split("/")[2] || currentSubPage || "services";

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    caseNumber: "",
    reason: "",
    plaintiffName: "",
    defendantName: "",
    caseType: "",
    description: "",
  });
  const [familyService, setFamilyService] = useState<string | null>(null);
  const [familyFormData, setFamilyFormData] = useState({
    groomName: "",
    groomId: "",
    groomAge: "",
    brideName: "",
    brideId: "",
    brideAge: "",
    witnessName1: "",
    witnessId1: "",
    witnessName2: "",
    witnessId2: "",
    dowry: "",
    marriageDate: "",
    spouseName: "",
    spouseId: "",
    divorceReason: "",
    childrenCount: "",
    testatorName: "",
    testatorId: "",
    beneficiaries: "",
    willContent: "",
    deceasedName: "",
    deceasedId: "",
    heirs: "",
    estateValue: "",
  });

  // Mock case database
  const mockCases = [
    {
      caseNumber: "2024/123",
      court: "المحكمة العليا - الدائرة المدنية",
      status: "جلسة قادمة",
      nextSession: "2024-02-15",
      judge: "القاضي أحمد محمد",
      parties: "محمد علي ضد شركة التجارة الحديثة",
      type: "قضية مدنية",
      filingDate: "2024-01-10",
    },
    {
      caseNumber: "2024/089",
      court: "محكمة الأحوال الشخصية",
      status: "قيد النظر",
      nextSession: "2024-02-20",
      judge: "القاضية فاطمة أحمد",
      parties: "عائشة محمد ضد يوسف علي",
      type: "قضية طلاق",
      filingDate: "2023-12-05",
    },
  ];

  const handleCaseSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = mockCases.filter(
      (caseItem) =>
        caseItem.caseNumber.includes(query) ||
        caseItem.parties.includes(query) ||
        caseItem.type.includes(query)
    );

    setSearchResults(results);
    if (results.length > 0) {
      toast.success(`تم العثور على ${results.length} قضية`);
    } else {
      toast.error("لم يتم العثور على نتائج");
    }
  };

  const handleDocumentVerification = (docNumber: string) => {
    setVerificationResult({
      docNumber,
      isValid: Math.random() > 0.3,
      issueDate: "2024-01-10",
      type: "عقد زواج",
    });
    toast.success("تم التحقق من الوثيقة");
  };

  if (actualSubPage === "case-search") {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/services")}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى الخدمات
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">استعلام عن القضايا</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex gap-4 mb-6">
              <Input
                placeholder="أدخل رقم القضية أو اسم الطرف..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-right"
              />
              <Button onClick={() => handleCaseSearch(searchQuery)}>بحث</Button>
            </div>

            {searchResults.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl mb-4">
                  نتائج البحث ({searchResults.length} قضية)
                </h3>
                {searchResults.map((caseItem, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 hover:border-blue-400 transition-colors pointer-cursor"
                    onClick={() => setSelectedCase(caseItem)}
                  >
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">
                            رقم القضية: {caseItem.caseNumber}
                          </h4>
                          <p className="text-gray-600">{caseItem.type}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">المحكمة:</p>
                          <p className="text-gray-700">{caseItem.court}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">الحالة:</p>
                          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                            {caseItem.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === "judicial-services") {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/services")}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى الخدمات
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">الخدمات القضائية</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <FileCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3">رفع دعوى جديدة</h3>
                <p className="text-gray-600 mb-4">
                  تقديم دعوى قضائية جديدة إلكترونياً
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      بدء الإجراء
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl" dir="rtl">
                    <DialogHeader>
                      <DialogTitle>رفع دعوى جديدة</DialogTitle>
                      <DialogDescription>
                        يرجى ملء البيانات المطلوبة لتقديم الدعوى
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>اسم المدعي</Label>
                        <Input placeholder="الاسم الكامل" />
                      </div>
                      <div>
                        <Label>اسم المدعى عليه</Label>
                        <Input placeholder="الاسم الكامل" />
                      </div>
                      <div>
                        <Label>نوع القضية</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نوع القضية" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="civil">قضية مدنية</SelectItem>
                            <SelectItem value="commercial">قضية تجارية</SelectItem>
                            <SelectItem value="family">قضية أحوال شخصية</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>وصف القضية</Label>
                        <Textarea placeholder="اكتب تفاصيل القضية" />
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      onClick={() => toast.success('تم تقديم الدعوى بنجاح')}
                    >
                      تقديم الدعوى
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Scale className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3">طلب تأجيل جلسة</h3>
                <p className="text-gray-600 mb-4">تقديم طلب تأجيل موعد جلسة</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      تقديم طلب
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl" dir="rtl">
                    <DialogHeader>
                      <DialogTitle>طلب تأجيل جلسة</DialogTitle>
                      <DialogDescription>
                        يرجى ملء البيانات المطلوبة لطلب التأجيل
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>رقم القضية</Label>
                        <Input placeholder="رقم القضية" />
                      </div>
                      <div>
                        <Label>تاريخ الجلسة الحالي</Label>
                        <Input type="date" />
                      </div>
                      <div>
                        <Label>سبب التأجيل</Label>
                        <Textarea placeholder="اذكر سبب طلب التأجيل" />
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      onClick={() => toast.success('تم تقديم طلب التأجيل بنجاح')}
                    >
                      تقديم الطلب
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === "document-verification") {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/services")}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى الخدمات
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">
              التحقق من صحة الوثائق
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="docNumber">رقم الوثيقة</Label>
                <Input
                  id="docNumber"
                  placeholder="أدخل رقم الوثيقة"
                  className="text-right"
                />
              </div>
              <Button
                className="w-full"
                onClick={() => handleDocumentVerification("DOC2024001")}
              >
                تحقق الآن
              </Button>

              {verificationResult && (
                <div
                  className={`p-6 rounded-lg border ${
                    verificationResult.isValid
                      ? "bg-blue-50 border-blue-200"
                      : "bg-gray-50 border-gray-200"
                  } mt-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle
                      className={`h-6 w-6 ${
                        verificationResult.isValid
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    />
                    <h4
                      className={`text-xl font-semibold ${
                        verificationResult.isValid
                          ? "text-blue-800"
                          : "text-gray-800"
                      }`}
                    >
                      {verificationResult.isValid
                        ? "وثيقة صحيحة"
                        : "وثيقة غير صحيحة"}
                    </h4>
                  </div>
                  {verificationResult.isValid && (
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold">رقم الوثيقة:</span>{" "}
                        {verificationResult.docNumber}
                      </p>
                      <p>
                        <span className="font-semibold">تاريخ الإصدار:</span>{" "}
                        {verificationResult.issueDate}
                      </p>
                      <p>
                        <span className="font-semibold">نوع الوثيقة:</span>{" "}
                        {verificationResult.type}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (actualSubPage === "family-services") {
    return (
      <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/services")}
              className="text-blue-600 hover:text-blue-800 mb-4"
            >
              ← العودة إلى الخدمات
            </button>
            <h1 className="text-4xl mb-6 text-slate-900">
              خدمات التوثيقات الأسرية
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3">طلب عقد زواج</h3>
                <p className="text-gray-600 mb-4">تقديم طلب لعقد زواج جديد</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      بدء الطلب
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl" dir="rtl">
                    <DialogHeader>
                      <DialogTitle>طلب عقد زواج</DialogTitle>
                      <DialogDescription>
                        يرجى ملء البيانات المطلوبة لإصدار عقد الزواج
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>اسم العريس</Label>
                        <Input placeholder="الاسم الكامل" />
                      </div>
                      <div>
                        <Label>رقم الهوية</Label>
                        <Input placeholder="رقم الهوية" />
                      </div>
                      <div>
                        <Label>اسم العروس</Label>
                        <Input placeholder="الاسم الكامل" />
                      </div>
                      <div>
                        <Label>رقم الهوية</Label>
                        <Input placeholder="رقم الهوية" />
                      </div>
                      <div>
                        <Label>المهر</Label>
                        <Input placeholder="قيمة المهر" />
                      </div>
                      <div>
                        <Label>تاريخ الزواج</Label>
                        <Input type="date" />
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      onClick={() => toast.success('تم تقديم الطلب بنجاح')}
                    >
                      تقديم الطلب
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <FileCheck className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3">طلب وثيقة طلاق</h3>
                <p className="text-gray-600 mb-4">استخراج وثيقة طلاق رسمية</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      بدء الطلب
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl" dir="rtl">
                    <DialogHeader>
                      <DialogTitle>طلب وثيقة طلاق</DialogTitle>
                      <DialogDescription>
                        يرجى ملء البيانات المطلوبة لاستخراج وثيقة الطلاق
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>اسم الزوج</Label>
                        <Input placeholder="الاسم الكامل" />
                      </div>
                      <div>
                        <Label>اسم الزوجة</Label>
                        <Input placeholder="الاسم الكامل" />
                      </div>
                      <div>
                        <Label>رقم عقد الزواج</Label>
                        <Input placeholder="رقم العقد" />
                      </div>
                      <div>
                        <Label>سبب الطلاق</Label>
                        <Textarea placeholder="اذكر سبب الطلاق" />
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      onClick={() => toast.success('تم تقديم الطلب بنجاح')}
                    >
                      تقديم الطلب
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-slate-900 mb-6">الخدمات الإلكترونية</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            منصة متكاملة لجميع الخدمات القضائية والإدارية الإلكترونية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">استعلام عن القضايا</CardTitle>
              <CardDescription className="text-lg">
                تتبع حالة قضيتك باستخدام الرقم المرجعي
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-600"
                onClick={() => navigate("/services/case-search")}
              >
                بدء الاستعلام
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl">الخدمات القضائية</CardTitle>
              <CardDescription className="text-lg">
                تقديم الدعاوى وطلبات المتابعة إلكترونياً
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 pointer-cursor"
                onClick={() => navigate("/services/judicial-services")}
              >
                عرض الخدمات
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-gray-600" />
              </div>
              <CardTitle className="text-2xl">التحقق من الوثائق</CardTitle>
              <CardDescription className="text-lg">
                تأكد من صحة المستندات الرسمية فوراً
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 pointer-cursor"
                onClick={() => navigate("/services/document-verification")}
              >
                التحقق من وثيقة
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-slate-400 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <CardTitle className="text-2xl">
                خدمات التوثيقات الأسرية
              </CardTitle>
              <CardDescription className="text-lg">
                توثيق عقود الزواج، الطلاق، والوصايا
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 pointer-cursor"
                onClick={() => navigate("/services/family-services")}
              >
                عرض الخدمات
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* الخدمات الأكثر استخداماً */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl text-center mb-8 text-slate-900">
            الخدمات الأكثر استخداماً
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate("/services/case-search")}
            >
              <Search className="h-4 w-4" />
              استعلام سريع
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate("/services/document-verification")}
            >
              <FileCheck className="h-4 w-4" />
              تحقق من وثيقة
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate("/services/family-services")}
            >
              <Users className="h-4 w-4" />
              عقد زواج
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate("/services/judicial-services")}
            >
              <Scale className="h-4 w-4" />
              متابعة قضية
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
