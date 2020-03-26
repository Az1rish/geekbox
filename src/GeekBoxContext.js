import React from 'react';

const GeekBoxContext = React.createContext({
    user: [],
    categories: [],
    resources: [],
    comments: [],
    addCategory: () => {},
    addResource: () => {},
    addComment: () => {},
    addUser: () => {}
})

export default GeekBoxContext;