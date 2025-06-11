import React from 'react'
import Card from '@/components/ui/card'
const Certificates = () => {
  return (
    <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        title="Certificate 1"
        description="Description for certificate 1"
        pdfUrl="/certi/Bidhun B.pdf"
        skills={['Skill 1', 'Skill 2']}
        previewUrl="/certi/BIDHUN B.png"
      />
      <Card
        title="Certificate 2"
        description="Description for certificate 2"
        pdfUrl="/path/to/certificate2.pdf"
        skills={['Skill 3', 'Skill 4']}
        previewUrl="/path/to/preview-image.jpg"
      />
      <Card
        title="Certificate 3"
        description="Description for certificate 3"
        pdfUrl="/path/to/certificate3.pdf"
        skills={['Skill 5', 'Skill 6']}
      />
    </div>
  )
}

export default Certificates