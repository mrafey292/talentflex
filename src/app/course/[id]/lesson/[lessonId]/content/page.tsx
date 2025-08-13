import LessonContentPage from "@/components/course/LessonContentPage";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface PageProps {
  params: { id: string; lessonId: string };
}

export default function Page({ params }: PageProps) {
  return (
    <DashboardLayout>
      <LessonContentPage courseId={params.id} lessonId={params.lessonId} />
    </DashboardLayout>
  );
}