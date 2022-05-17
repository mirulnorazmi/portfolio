export const consoleLog = (data: any) => {
    if (process.env.NODE_ENV === 'production') return;
    console.log(data);
};
