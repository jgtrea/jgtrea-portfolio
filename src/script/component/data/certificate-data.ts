export interface CertificateData {
    id: number;
    title: string;
    issuer: string;
    date?: string;
    achievements?: string[];
}

export const CertificateData: CertificateData[] = [
    {
        id: 1,
        title: "Certificate of Completion",
        issuer: "CodeChum Python Course",
        date: "11/2022"
    },
    {
        id: 2,
        title: "CompTIA Tech+ Certification",
        issuer: "CompTIA",
        date: "12/2025"
    }

];