export const fetchSample = (id: number, cd: (user: object) => void) => {
    setTimeout(() => {
        console.log('wait 0.1 sec.');
        const user = {
            id: id,
            name: 'User' + id,
            email: id + '@test.com'
        };
        cd(user);
    }, 100);
};


export const fetchSample2 = (id: number) => {
   return new Promise(resolve => {
       setTimeout(() => {
           console.log('wait 0.1 sec.');
           const user = {
               id: id,
               name: 'User' + id,
               email: id + '@test.com'
           };
           resolve(user);
       }, 100);
   })
};
