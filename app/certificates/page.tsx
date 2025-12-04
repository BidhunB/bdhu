"use client"
import React from 'react'
import Card from '@/components/ui/card'
import { NavbarDemo } from '@/components/ui/resizable-navbar-demo'
import { Timeline } from '@/components/ui/timeline'

const Certificates = () => {
  const data = [
    {
      title: "March 2023",
      content: (
        <Card
          title="Advanced Driver Assistance System Workshop"
          description="Participated in an Advanced Driver Assistance System Workshop..."
          previewUrl="/jpg/18-3-23.jpg"
          pdfUrl="/certi/18-3-23.pdf"
          skills={["Advanced Driver Assistance Systems", "Workshop"]}
          date={new Date('2023-03-18')}
        />
      ),
    },
    {
      title: "August 2023",
      content: (
        <div className="flex flex-col gap-4">
          <Card
            title="AI for Students: Build Your Own Generative AI Model (Participation)"
            description="Participated in the workshop 'AI for Students: Build Your Own Generative AI Model' conducted by AI expert and IIT Delhi alumnus, Mr. Trivikrama. The workshop is designed to equip students with skills essential in the AI era."
            previewUrl="/jpg/21-8-23.jpg"
            pdfUrl="/certi/21-8-23.pdf"
            skills={["Generative AI", "AI", "Machine Learning"]}
            date={new Date('2023-08-21')}
          />
          <Card
            title="AI for Students: Build Your Own Generative AI Model (Completion)"
            description="Successfully completed a hands-on project in the workshop 'AI for Students: Build Your Own Generative AI Model' conducted by AI expert and IIT Delhi alumnus, Mr. Trivikrama. The workshop is designed to equip students with skills essential in the AI era."
            previewUrl="/jpg/21-8-23(2).jpg"
            pdfUrl="/certi/21-8-23(2).pdf"
            skills={["Generative AI", "AI", "Machine Learning"]}
            date={new Date('2023-08-21')}
          />
          <Card
            title="Webinar on Cyber Security"
            description="Attended a webinar on Cyber Security on 26/08/23 conducted by Qnayds LLP. Hope you have got valuable insights about future of cybersecurity and its scopes."
            previewUrl="/jpg/26-8-23.jpg"
            pdfUrl="/certi/26-8-23.pdf"
            skills={["Cyber Security"]}
            date={new Date('2023-08-26')}
          />
        </div>
      ),
    },
    {
      title: "September 2023",
      content: (
        <div className="flex flex-col gap-4">
          <Card
            title="Internship at Neo Green Labs"
            description="Successfully completed a five-day Internship program at Neo Green Labs. During the period of his internship, he was Punctual, Hardworking and Inquisitive. The domain of Internship was Programming with Python."
            previewUrl="/jpg/06-09-23.jpg"
            pdfUrl="/certi/06-09-23.pdf"
            skills={["Python", "Programming", "Internship"]}
            date={new Date('2023-09-10')}
          />
          <Card
            title="Masterclass on Introduction to Data Science"
            description="Successfully completed the Masterclass on Introduction to Data Science."
            previewUrl="/jpg/24-9-23.jpg"
            pdfUrl="/certi/24-9-23.pdf"
            skills={["Data Science", "Data Analysis"]}
            date={new Date('2023-09-24')}
          />
        </div>
      ),
    },
    {
      title: "October 2023",
      content: (
        <div className="flex flex-col gap-4">
          <Card
            title="Web Development Workshop (INFORMATYKA)"
            description="Participated in a Web Development Workshop, as part of INFORMATYKA, organized by the IEEE Computer Society Kerala Chapter."
            previewUrl="/jpg/3-10-23.jpg"
            pdfUrl="/certi/3-10-23.pdf"
            skills={["Web Development", "Workshop"]}
            date={new Date('2023-10-03')}
          />
          <Card
            title="Masterclass on ChatGPT"
            description="Successfully completed the Masterclass on ChatGPT."
            previewUrl="/jpg/29-10-23.jpg"
            pdfUrl="/certi/29-10-23.pdf"
            skills={["ChatGPT", "AI", "Generative AI"]}
            date={new Date('2023-10-29')}
          />
        </div>
      ),
    },
    {
      title: "April 2024",
      content: (
        <div className="flex flex-col gap-4">
          <Card
            title="Workshop on Artificial Intelligence With Python"
            description="Attended the one-day workshop on Artificial Intelligence With Python organised by Techmaghi in association with KSHITIJ, IIT KHARAGPUR."
            previewUrl="/jpg/12-4-24.jpg"
            pdfUrl="/certi/12-4-24.pdf"
            skills={["Artificial Intelligence", "Python", "Workshop"]}
            date={new Date('2024-04-06')}
          />
          <Card
            title="The Joy of Computing using Python"
            description="Successfully completed the course The Joy of Computing using Python, with a consolidated score of 66%."
            previewUrl="/jpg/1-1-24.jpg"
            pdfUrl="/certi/1-1-24.pdf"
            skills={["Python", "Programming", "Computer Science"]}
            date={new Date('2024-04-30')}
          />
        </div>
      ),
    },
    {
      title: "August 2024",
      content: (
        <Card
          title="Industrial Training Programme at Techgentsia"
          description="Successfully undergone one-day Industrial Training Programme as part of their Industrial Visit."
          previewUrl="/jpg/23-8-24.jpg"
          pdfUrl="/certi/23-8-24.pdf"
          skills={["Industrial Training", "Software Technology"]}
          date={new Date('2024-08-23')}
        />
      ),
    },
    {
      title: "November 2024",
      content: (
        <Card
          title="Workshop on Data Science with Python"
          description="Attended the one-day workshop on Data Science with Python organized by Techmaghi in association with ELAN & nVISION, IIT HYDERABAD."
          previewUrl="/jpg/18-11-24.jpg"
          pdfUrl="/certi/18-11-24.pdf"
          skills={["Data Science", "Python", "Workshop"]}
          date={new Date('2024-11-09')}
        />
      ),
    },
    {
      title: "March 2025",
      content: (
        <Card
          title="National Level Product Design UI/UX Hackathon, ScaleX"
          description="Participated In the National Level Product Design UI/UX Hackathon, ScaleX, organized by the Department of Computer Science & Engineering at Carmel College of Engineering & Technology, Punnapra."
          previewUrl="/jpg/14-5-25.jpg"
          pdfUrl="/certi/14-5-25.pdf"
          skills={["Product Design", "UI/UX", "Hackathon"]}
          date={new Date('2025-03-14')}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="fixed z-10 top-0 left-auto right-auto">
          <NavbarDemo />
        </div>
      </div>
      <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
        <Timeline data={data} />
      </div>
    </>
  )
}

export default Certificates