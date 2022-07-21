export default datastreams;
declare const datastreams: {
    start: {
        tag: string;
        operator: (constraints: any) => Promise<any>;
    };
    load: {
        tag: string;
        operator: (info: any) => Promise<any>;
    };
    ".brainsatplay": {
        package: any;
        graph: any;
        plugins: any;
    };
};
