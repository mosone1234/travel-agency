import httpClient from './htttpClient'
// const END_POINT = '/services'

const getAllServices = () => {
  return httpClient.get('/index')
}

// const getProject = (projectId) => {
//   return httpClient.get(END_POINT + '/' + projectId)
// }

// const createProject = (project) => {
//   return httpClient.post(END_POINT, project)
// }

// const updateProject = (project) => {
//   return httpClient.put(END_POINT, project)
// }

// const deleteProject = (projectId) => {
//   return httpClient.delete(END_POINT + '/' + projectId)
// }

// const addUserToProject = (projectUser) => {
//   console.log('api --< ', projectUser)
//   return httpClient.post('/add-project-user', projectUser)
// }

// const removeUserToProject = (userId) => {
//   return httpClient.post('/remove-project-user' + '/' + userId)
// }

export { getAllServices }
