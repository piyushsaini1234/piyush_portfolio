import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Resume", "Piyush_Saini_Resume.pdf");
  const pdf = await readFile(filePath);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Piyush_Saini_Resume.pdf"',
      "Cache-Control": "no-store",
      "Content-Length": String(pdf.byteLength),
    },
  });
}
