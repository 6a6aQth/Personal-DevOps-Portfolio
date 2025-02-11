export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/pp1.png",
    spareimg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareimg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareimg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareimg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Kubernetes cluster",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/kubernetes.svg", //b5.svg
    spareimg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareimg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dockerized Smart Contract On Ethereum",
    des: "A Dockerized setup for deploying Ethereum smart contracts on the Sepolia testnet using thirdweb",
    img: "/thirdweb.png",//p1
    iconLists: ["/thirdwebl.png", "/docker-4.svg", "/ts.svg", "/ethereum-1.svg", "/digitalo.svg"],
    link: "https://github.com/6a6aQth/Dockerized-Smart-Contract-On-Ethereum-Blockchain-using-3rdWebEngine",
  },
  {
    id: 2,
    title: "CI/CD Jenkins Pipeline",
    des: "Originally developed as part of a school project to test out and implement a robust CI/CD pipeline using Jenkins",
    img: "/jenkins.png",//ps
    iconLists: ["/jenkins.svg", "/java.svg", "/maven.jpeg", "/git-1.svg", "/junit.svg"],
    link: "https://github.com/6a6aQth/Jenkins-CICD-Pipeline-Of-Unipod-s-Booking-System",
  },
  {
    id: 3,
    title: "AI DB with Kafka, ELK, and Prometheus Monitoring",
    des: "DevOps-driven AI system that interacts with a database, leveraging Apache Kafka for real-time messaging and ELK Stack for comprehensive monitoring and log management",
    img: "/elk.png",
    iconLists: ["/prometheaus.svg", "/logstash.svg", "/kibana.svg", "/kafkaa.png", "/elasticsearch.svg"],
    link: "https://github.com/6a6aQth/AI-Database-with-Kafka-ELK-Stack-n-Prometheus",
  },
  {
    id: 4,
    title: "Heuraduct: A DevSecOps Pipeline For Security",
    des: "a cutting-edge DevSecOps pipeline that integrates security, compliance, and monitoring directly into the CI/CD process. Designed for scalability",
    img: "/heuraduct.jpeg", //p4.svg
    iconLists: ["/jira.svg", "/sonarq.svg", "/hashicorp.jpg", "/owasp.png", "/aws-2.svg"],
    link: "https://github.com/6a6aQth/The-Heuraduct--DevSecOps-Pipeline-For-Security",
  },
];

export const testimonials = [
  {
    quote:
      "Hes impact on our team was outstanding. His innovative approach, including introducing cloud-native tools and automating repetitive tasks, saved us countless hours. In a recent project, he migrated our legacy infrastructure to AWS with zero downtime. His attention to detail and professionalism made the collaboration seamless. I highly recommend him.",
    name: "Hope Chilunga",
    title: "Nkwazi Aeros Lead Drone Pilot",
    profileimg: "/hope.jpeg"
  },
  {
    quote:
      "Michael is a forward-thinking DevOps Engineer who consistently delivers exceptional results. In one of our largest projects, he designed and implemented a secure, scalable deployment system, helping us handle a 200% traffic increase without issues. His problem-solving skills and ability to execute are unparalleled. Michael is more than an engineer; he is a true partner in success.",
    name: "Conrad Zidana",
    title: "Co-Founder Of MidasCreed",
    profileimg: "/conrad.jpeg"
  },
  {
    quote:
      "Collaborating with Michael was an absolute pleasure. His expertise in optimizing workflows, automating processes, and building scalable systems was evident throughout our project. During our migration to the cloud, Michael streamlined our DevOps pipeline, reducing deployment times by 50%. If you are looking for someone to enhance your operations, Michael is the ideal partner",
    name: "Victor Mjimapemba",
    title: "Director of Lemonade Technologies",
    profileimg: "/victor.jpeg"
  },
  {
    quote:
      "Michaels ability to align modern technologies with business goals is remarkable. In one of our projects, he implemented a robust CI/CD pipeline and introduced infrastructure as code with Terraform, which transformed our deployment process. Thanks to his contributions, our systems are more secure and efficient. Michael is a true professional and an invaluable asset to any team.",
    name: "John Daka",
    title: "Founder of Daka Technologies",
    profileimg: "/john.jpeg"
  },
  {
    quote:
      "Working with Michael was a transformative experience. His enthusiasm for DevOps, from container orchestration with Kubernetes to integrating advanced monitoring tools, was unmatched. During a critical project, Michael delivered a complete automated solution that reduced system downtime by 60%. If you want to revolutionize your operations, Michael is the person to cal",
    name: "Sarah Uwayo",
    title: "CEO of Nirvana Tours",
    profileimg: "/sarah.jpeg"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/azureLogo.png",
    nameimg: "/cloudName.png",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/nirvanaa.png",
    nameimg: "/nirvanaName.png",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/kubernetesLogo.png",
    nameimg: "/kubernetesName.png",
  },
  {
    id: 4,
    name: "ansible",
    img: "/ansible.svg",
    nameimg: "/ansibleName.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameimg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "DevOps Tech Lead - MidasCreed",
    desc: "Led DevOps efforts at MidasCreed, enhancing infrastructure automation, streamlining CI/CD pipelines, and ensuring system scalability and reliability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "DevOps Intern - Havilah Investments",
    desc: "Assisted in automating workflows, managing CI/CD pipelines, and maintaining cloud infrastructure as a DevOps Intern at Havilah Investments",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelancer Jenkins Seminar",
    desc: "Led a freelance Jenkins seminar, guiding participants from foundational concepts to advanced CI/CD pipeline implementation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "MLOps Engineer - AI Innovation Hub",
    desc: "Voluntarily Developed and maintained scalable machine learning pipelines and deployed models using modern MLOps tools and practices at AI..",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/6a6aQth"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: ""
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/michaels-lumanga-a85812277/"
  },
];
