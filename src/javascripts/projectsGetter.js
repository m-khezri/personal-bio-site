import axios from 'axios';

const getProjects = () => axios.get('http://localhost:3005/projects');

export default getProjects;
