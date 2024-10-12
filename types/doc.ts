export type DOC = {
  date: string; // Date of the event or document creation
  title: string; // Title of the document or event
  slug: string; // URL-friendly identifier for the document
  description: string; // Brief description of the document
  scriptureReference?: string; // Optional scripture reference related to the document
  isEvent?: boolean; // Optional flag to indicate if it's an event
};
