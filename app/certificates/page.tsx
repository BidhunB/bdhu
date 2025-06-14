import React from 'react'
import Card from '@/components/ui/card'
const Certificates = () => {
  return (
    <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
      title="Advanced Driver Assistance System Workshop"
      description="Participated in an Advanced Driver Assistance System Workshop organised by Techmaghi and Department of Computer Science Engineering as a part of RITU '23 - the Techno-Cultural Fest of RIT, Kottayam."
      previewUrl="/certi/18-3-23.pdf"
      pdfUrl="/certi/18-3-23.pdf"
      skills={["Advanced Driver Assistance Systems", "Workshop"]}
      date={new Date('2023-03-18')}
    />

<Card
      title="AI for Students: Build Your Own Generative AI Model (Completion)"
      description="Successfully completed a hands-on project in the workshop 'AI for Students: Build Your Own Generative AI Model' conducted by AI expert and IIT Delhi alumnus, Mr. Trivikrama. The workshop is designed to equip students with skills essential in the AI era."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/21-8-23(2).pdf"
      skills={["Generative AI", "AI", "Machine Learning"]}
      date={new Date('2023-08-21')}
    />

<Card
      title="AI for Students: Build Your Own Generative AI Model (Participation)"
      description="Participated in the workshop 'AI for Students: Build Your Own Generative AI Model' conducted by AI expert and IIT Delhi alumnus, Mr. Trivikrama. The workshop is designed to equip students with skills essential in the AI era."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/21-8-23.pdf"
      skills={["Generative AI", "AI", "Machine Learning"]}
      date={new Date('2023-08-21')}
    />

<Card
      title="Webinar on Cyber Security"
      description="Attended a webinar on Cyber Security on 26/08/23 conducted by Qnayds LLP. Hope you have got valuable insights about future of cybersecurity and its scopes."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/26-8-23.pdf"
      skills={["Cyber Security"]}
      date={new Date('2023-08-26')}
    />

<Card
      title="Internship at Neo Green Labs"
      description="Successfully completed a five-day Internship program at Neo Green Labs. During the period of his internship, he was Punctual, Hardworking and Inquisitive. The domain of Internship was Programming with Python."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/06-09-23.pdf"
      skills={["Python", "Programming", "Internship"]}
      date={new Date('2023-09-10')}
    />

<Card
      title="Masterclass on Introduction to Data Science"
      description="Successfully completed the Masterclass on Introduction to Data Science."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/24-9-23.pdf"
      skills={["Data Science", "Data Analysis"]}
      date={new Date('2023-09-24')}
    />

<Card
      title="Web Development Workshop (INFORMATYKA)"
      description="Participated in a Web Development Workshop, as part of INFORMATYKA, organized by the IEEE Computer Society Kerala Chapter."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/3-10-23.pdf"
      skills={["Web Development", "Workshop"]}
      date={new Date('2023-10-03')}
    />

<Card
      title="Masterclass on ChatGPT"
      description="Successfully completed the Masterclass on ChatGPT." 
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/29-10-23.pdf"
      skills={["ChatGPT", "AI", "Generative AI"]}
      date={new Date('2023-10-29')}
    />

<Card
      title="The Joy of Computing using Python"
      description="Successfully completed the course The Joy of Computing using Python, with a consolidated score of 66%."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/1-1-24.pdf"
      skills={["Python", "Programming", "Computer Science"]}
      date={new Date('2024-04-30')} // Assuming end of April 2024 as it was Jan-Apr 2024 [cite: 16]
    />

<Card
      title="Workshop on Artificial Intelligence With Python"
      description="Attended the one-day workshop on Artificial Intelligence With Python organised by Techmaghi in association with KSHITIJ, IIT KHARAGPUR." 
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/12-4-24.pdf"
      skills={["Artificial Intelligence", "Python", "Workshop"]}
      date={new Date('2024-04-06')}
    />

<Card
      title="Industrial Training Programme at Techgentsia"
      description="Successfully undergone one-day Industrial Training Programme as part of their Industrial Visit." 
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/23-8-24.pdf"
      skills={["Industrial Training", "Software Technology"]}
      date={new Date('2024-08-23')}
    />

<Card
      title="Workshop on Data Science with Python"
      description="Attended the one-day workshop on Data Science with Python organized by Techmaghi in association with ELAN & nVISION, IIT HYDERABAD."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/18-11-24.pdf"
      skills={["Data Science", "Python", "Workshop"]}
      date={new Date('2024-11-09')}
    />

<Card
      title="National Level Product Design UI/UX Hackathon, ScaleX"
      description="Participated In the National Level Product Design UI/UX Hackathon, ScaleX, organized by the Department of Computer Science & Engineering at Carmel College of Engineering & Technology, Punnapra."
      previewUrl="/path/to/image.jpg"
      pdfUrl="/certi/14-5-25.pdf"
      skills={["Product Design", "UI/UX", "Hackathon"]}
      date={new Date('2025-03-14')}
    />
    </div>
  )
}

export default Certificates