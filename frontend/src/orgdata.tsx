import { useState } from "react"
const [orgData, setOrgData] = useState( [
  { id: 1, name: 'Denny Curtis', title: 'CEO', img: 'https://cdn.balkan.app/shared/2.jpg' },
  { id: 2, pid: 1, name: 'Ashley Barnett', title: 'Sales Manager', img: 'https://cdn.balkan.app/shared/3.jpg' },
  { id: 3, pid: 1, name: 'Caden Ellison', title: 'Dev Manager', img: 'https://cdn.balkan.app/shared/4.jpg' },
  { id: 4, pid: 2, name: 'Elliot Patel', title: 'Sales', img: 'https://cdn.balkan.app/shared/5.jpg' },
  { id: 5, pid: 2, name: 'Lynn Hussain', title: 'Sales', img: 'https://cdn.balkan.app/shared/6.jpg' },
  { id: 6, pid: 3, name: 'Tanner May', title: 'Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
  { id: 7, pid: 3, name: 'Fran Parsons', title: 'Developer', img: 'https://cdn.balkan.app/shared/8.jpg' },
  { id: 8, pid: 4, name: 'Tanner May', title: 'Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
  { id: 9, pid: 4, name: 'Fran Parsons', title: 'Developer', img: 'https://cdn.balkan.app/shared/8.jpg' },
  { id: 10, pid: 5, name: 'Tanner May', title: 'Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
  { id: 11, pid: 5, name: 'Fran Parsons', title: 'Developer', img: 'https://cdn.balkan.app/shared/8.jpg' },
])

const data = [orgData, setOrgData]

export default data;