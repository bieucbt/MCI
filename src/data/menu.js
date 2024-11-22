


const courses = [
  "Python Foundation in Data Analytics",
  "Python for Machine Learning",
  "SQL for Newbies: Data Analysis for Beginners",
  "Database and SQL for Data Science",
  "Analyzing and Visualizing Data on Power BI",
  "Applying Power BI In Business Intelligence",
  "Career Coaching",
  "VBA Basic to Advanced",
  "VBA Applications",
  "Business Analyst for Beginners"
];

const coursesWithMore = [
  ...courses,
  "Xem thêm"
];

const comboCourses = [
  "Kĩ thuật Lập trình Python Cơ bản",
  "Combo Power BI Level 1 & Level 2",
  "Combo Python Level 1 & Level 2",
  "Combo SQL Level 1 & Level 2",
  "Combo VBA Level 1 & Level 2",
  "Combo Business Analyst Level 1 & Level 2",
  "Combo Data Engineering Professional"
];

const trackCourses = [
  "Data Analyst Professional (Data Analyst with Python Track)",
  "Data for Newbies Track",
  "Data Science Track",
  "Business Intelligence Track",
  "Business Analyst Fast Track",
  "Data Engineer Track",
  "Business Intelligence Analyst On Google Platform Track",
  "AI Engineer Track",
  "Data Foundation"
];


export const menu = [
  {
    title: 'khóa học',
    subMenu: [
      {
        title: 'Trương trình học theo từng môn',
        subMenu: coursesWithMore
      },
      {
        title: 'Trương trình học theo lộ trình',
        subMenu: comboCourses
      },
      {
        title: 'Trường trình học chuyển nghành và đầy đủ',
        subMenu: trackCourses
      }
    ]
  },
  {
    title: 'Doanh nghiệp',
    subMenu: [
      'Đào tạo doanh nghiệp',
      'Doanh nghiệp tiêu biểu',
      'Giải pháp doanh nghiệp'
    ]
  },
  {
    title: 'Lịch đào tạo',
    subMenu: [
      'Lịch đào tạo',
      'Giảng viên'
    ]
  },
  {
    title: 'Blog'
  },
  {
    title: 'Về chúng tôi',
    subMenu: [
      'Học Viên công nghệ MCI',
      'Việc làm tại MCI',
      'Liên hệ'
    ]
  } 
]
