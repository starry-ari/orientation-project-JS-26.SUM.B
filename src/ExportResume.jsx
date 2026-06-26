
//Export Resume to PDF button.

import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

export default function ExportResume({ resumeData }) {
  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;

  return (
    <PDFDownloadLink document={<ResumePDF data={resumeData} />} fileName={fileName}>
      {({ loading, error }) => {
        if (error) return 'Error generating PDF';
        return loading ? 'Preparing PDF...' : 'Download Resume PDF';
      }}
    </PDFDownloadLink>
  );
}