import faunadb from 'faunadb';

const client = new faunadb.Client({ secret: import.meta.env.SNOWPACK_PUBLIC_FAUNADB})
const q = faunadb.query

export { client , q }