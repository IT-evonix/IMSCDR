export interface NoticeItem {
  id: number;
  title: string;
  slug: string;
  contentType: string;
  category: string;
  startDate?: string | null;
  createdAt: string;
  contentFormat: string;
  pdfUrl?: string | null;
  externalUrl?: string | null;
  contentHtml?: string | null;
}

export const mockNoticesCirculars: NoticeItem[] = [];
