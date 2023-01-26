import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  allWorkouts: `${process.env.REACT_APP_BASE_URL}/api/workouts`,
  singleWorkout: (id) => `${process.env.REACT_APP_BASE_URL}/api/workouts/${id}`,
  workoutDirectory: `${process.env.REACT_APP_BASE_URL}/api/workout-directory`,
  workoutsBySelectedMuscleGroup: `${process.env.REACT_APP_BASE_URL}/api/workout-directory/workouts`,
  workoutLog: `${process.env.REACT_APP_BASE_URL}/api/workout-log`,
  account: (userId) =>
    `${process.env.REACT_APP_BASE_URL}/api/account/${userId}`,
  // createReview: (id) => `/api/workouts/${id}/reviews`,
  // singleReview: (workoutId, reviewId) =>
  //   `/api/workouts/${workoutId}/reviews/${reviewId}`,
  login: `${process.env.REACT_APP_BASE_URL}/api/login`,
  register: `${process.env.REACT_APP_BASE_URL}/api/register`,
  search: (query) => `/api/workouts/search?search=${query}`,
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
};

const getHeaders = () => ({
  headers: {
    authorization: `Bearer ${AUTH.getToken()}`,
  },
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
