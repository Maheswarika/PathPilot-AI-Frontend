import api from "./api";

export const getCareers = async () => {
  const response = await api.get("/careers");
  return response.data;
};

export const getCareer = async (id) => {
  const response = await api.get(`/careers/${id}`);
  return response.data;
};

export const getCareerSkills = async (id) => {
  const response = await api.get(`/careers/${id}/skills`);
  return response.data;
};

export const getSkillGap = async (id) => {
  const response = await api.get(`/careers/${id}/skill-gap`);
  return response.data;
};