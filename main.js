'use strict'
const { listPeople, getSinglePerson, deleteSinglePerson, editPerson, addPerson, personTrips } = require('./services/DAL')

async function main(options) {
  // console.log(options)
  if (options._.includes('list')) {
    let filters = ''
    if (options.name) {
      filters += `FirstName eq '${options.name}'`
    }
    if (options.gender) {
      filters += `Gender eq '${options.gender}'`
    }
    if (options.filter) {
      filters += options.filter
    }
    const res = await listPeople(filters)
    console.log(res)
    // console.log(JSON.stringify(res))
  }
  if (options._.includes('get')) {
    if (options.id) {
      console.log(await getSinglePerson(options.id))
    }
  }
  if (options._.includes('delete')) {
    if (options.id) {
      console.log(await deleteSinglePerson(options.id))
    }
  }
  if (options._.includes('edit')) {
    if (options.id && options.data) {
      console.log(await editPerson(options.id, options.data))
    }
  }
  if (options._.includes('add')) {
    if (options.data) {
      console.log(await addPerson(options.id, options.data))
    }
  }
  if (options._.includes('trips')) {
    if (options.id) {
      console.log(await personTrips(options.id))
    }
  }
  process.exit(0)
}

module.exports=main
