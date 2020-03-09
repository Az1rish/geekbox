import React from 'react';

const GeekBoxContext = React.createContext({
    users: [],
    categories: [],
    resources: [],
    comments: [],
    addCategory: () => {},
    addResource: () => {},
    addComment: () => {},
    addUser: () => {}
})

export default GeekBoxContext;