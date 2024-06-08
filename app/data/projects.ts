export const projects = [
  {
    title: "Video Editor",
    description:
      "The Video Editor for the OneDay web app allows users to compose videos from various video sources. The video sources include video recorded by webcam, video recorded from the screen (or both simultaneously), uploaded videos or videos from a digital library. The video recorder for the Video Editor uses browser apis such as Media Capture and Streams and merges video and audio streams onto a HTML 5 canvas to allow multiple video streams to be rendered. IndexedDB stores the settings and video and thumbnail object urls locally for quick retrieval. The Video Editor also allows users to send and publish videos to a variety of contacts both in the OneDay platform and ad hoc users as needed. Click on the images to watch videos of the Video Editor in action.",
    videos: [
      {
        thumbnail: "/video-editor-1.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/part1-D6nZMDMIOv1QdHya5RAHkrLHLN1r2z.mp4",
        alt: "Video Editor Part One",
        width: 506,
        height: 285,
      },
      {
        thumbnail: "/video-editor-2.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/part2-gV4PhLb8DZ1fKN1iBN8xFmK7rAFqSc.mp4",
        alt: "Video Editor Part Two",
        width: 506,
        height: 285,
      },
      {
        thumbnail: "/video-editor-3.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/delivery-swHu7mqC1kZ5MR7NCN3dPl7yuybmbu.mp4",
        alt: "Video Editor Part Three",
        width: 506,
        height: 285,
      },
    ],
  },
  {
    title: "Peer Chat",
    description:
      "The peer to peer chat was a proof of concept for a hackathon. WebRTC using STUN and TURN servers (deployed as an AWS Lambda) establish a UDP connection that allows users to call and talk to one another by video through a connection on the OneDay web app. The image below shows the peer to peer chat in action. Click on the image to watch a video of the peer to peer chat in action.",
    videos: [
      {
        thumbnail: "/peer-to-peer.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/oneday-chat-rtagSAWOuIE6kpatlMQY3MhBft0jfS.mp4",
        alt: "Peer to Peer Chat",
        width: 506,
        height: 248,
      },
    ],
  },
  {
    title: "Reporting Dashboard",
    description:
      "We built a reporting dashboard using Chart.js to create animated charts and custom graphic legends showing video usage on the OneDay platform. The dashboard was built using React and was a part of the OneDay web app. The dashboard showed the number of videos created, the number of videos published, the number of videos sent and the number of videos viewed. The dashboard also filtered by community and date range. Click on the image to watch a video of the reporting dashboard.",
    videos: [
      {
        thumbnail: "/dashboard.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/dashboard-ycc0tpGMihNqOAllDwQqliWQ2tgp4U.mp4",
        alt: "reporting dashboard",
        width: 506,
        height: 314,
      },
    ],
  },
  {
    title: "Magento AEM Integration",
    description:
      "We reverse engineered the existing front end React application for deploying AEM assets and websites though the Cloud Manager platform. Once we had an idea how it worked we built APIs and interfaces to allow Adobe Experience Manager users to deploy Magento stores. Users could see Call To Action hero cards on the dashboard letting them know important information about the state of their store. They also had environment and deployment cards to show the status of both on the dashboard. They were able to see the process of deployments as a timeline showing build, testing and deployment to the environment. To see a blog about the product click on the link below:",
    link: {
      url: "https://blog.developer.adobe.com/use-aem-as-a-cloud-service-with-multiple-adobe-commerce-systems-9295612a9554",
      text: "Adobe AEM Commerce Blog",
    }
  },
  {
    title: "Collaboracast",
    description:
      "Collaboracast was a remake of an older sales communication software web application that I built for Don-Nan. The application allowed the sales team to keep track of communication with customers so that the sales team would not duplicate or contradict communications given by other sales team members. The older version was written in the Laravel PHP framework and connected to a MySQL database. Collaboracast was built using Sequelize (a Node.js ORM) and connected to a PostgreSQL database. The front end was built using React and the api and web application were both deployed to Heroku.",
  },
  {
    title: "Signature Theaters",
    description:
      "Signature Theaters is the company website acting as a simple marketing tool. The website features and background video showcasing a retractable screen installed to reveal a television above a fireplace. The website also features an interface to allow users to chat with support at Signature Theaters. Click on the image to watch a video of the Signature Theaters website.",
    videos: [
      {
        thumbnail: "/signature-theaters.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/signature-vxR1xfhkhystPoY7AycMSHTiv918LB.mp4",
        alt: "Signature Theaters",
        width: 506,
        height: 285,
      },
    ],
  },
  {
    title: "License and Permit SaaS Platform",
    description:
      "The License and Permit platform was an initiative by NIC to centralize all state license and permit web services. From the platform state agencies could log in to create and manage license and permit web applications for their constituents. I solved how to integrate a React application into Spring Boot. The front end contained a form building wizard to create a standard license or permit application to be shared with users.",
  },
  {
    title: "TOPS",
    description:
      "TOPS is the license and permit application used by the Texas Department of Public Safety to manage all licenses for private security in Texas. The customer facing application is written AngularJS. The customer facing application was the first SPA (single page application) javascript used by TexasNIC / Texas.gov. The customer facing application is a wizard to allow users to fill out new applications for private security services. Click on the image to watch a video of the TOPS application.",
    videos: [
      {
        thumbnail: "/tops.png",
        url: "https://kje6xzcltrtysivq.public.blob.vercel-storage.com/tops-11h23g45QNmtb9QNUNf4aUHR5xFGkW.mp4",
        alt: "TOPS",
        width: 506,
        height: 285,
      },
    ],
  },
  {
    title: "True Image Video CMS",
    description:
      "I built a video cms for True Image using PHP, MySQL and FFMPEG. It allowed the proprietors to upload videos to their website to promote their work. An authentication system allowed customers of True Image and media representatives of agencies that aired the video to download videos that True Image created. The application was deployed to a HostGator server.",
  },
  {
    title: "PHP and MySQL Custom CMSes",
    description:
      "While working at CVA Advertising I developed content managements systems written in PHP and MySQL to allow users to manage the content on their marketing websites. Features included a fully function programmatic calendar and a map application using trignometry fuctions and Google Maps APIs to allow users to get directions to stores. Later the custom CMSes would be replaced by WordPress.",
  },
];
