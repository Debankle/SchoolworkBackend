import SchoolworkBackend from './App';

SchoolworkBackend.express.listen(SchoolworkBackend.port, () => {
    console.log(`Server is running on port ${SchoolworkBackend.port}`);
}).on('error', (err: Error) => {
    console.log(err);
});