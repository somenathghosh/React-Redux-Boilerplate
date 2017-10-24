'use strict';

const FULL_URL = 'https://jsonplaceholder.typicode.com/users';
const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const URL_END_POINT = 'https://jsonplaceholder.typicode.com/';


const authParameters = {
  headers: {
    Authorization: 'xxxxxxx'
  }
};

export const getUsers = (searchQuery) => {
  const API_ENDPOINT = URL_END_POINT + `${searchQuery}`;
  return fetch(API_ENDPOINT, authParameters)
  .then(response => {
    return response.json();
  })
  .then(json => {
      return json.data.map((object) => ({
        name: object.name ,
        email: object.email,
        phone: object.phone,
        website: object.website
      }));
  });
};
