'use strict'

const Api = require('./api')

async function listPeople(filters) {
  let query = 'People'
  if (filters) {
    query += `?$filter=${filters}`
  }
  return await Api.get(query)
}
async function getSinglePerson(id) {
  return await Api.get(`People('${id}')`)
}
async function deleteSinglePerson(id) {
  return await Api.delete(`People('${id}')`)
}
async function editPerson(id, data) {
  return await Api.patch(`People('${id}')`, data)
}
async function addPerson(id, data) {
  return await Api.post(`People('${id}')`, data)
}
async function personTrips(id) {
  return await Api.get(`People('${id}')/trips`)
}

module.exports = { listPeople, getSinglePerson, deleteSinglePerson, editPerson, addPerson, personTrips }
